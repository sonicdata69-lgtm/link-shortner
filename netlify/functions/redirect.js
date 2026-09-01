export default async (req, context) => {
  const url = new URL(req.url);
  const code = url.pathname.split("/").filter(Boolean)[0];

  if (!code) {
    return new Response("الرابط غير موجود", { status: 404 });
  }

  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

  if (!supabaseUrl || !supabaseKey) {
    return new Response("إعدادات قاعدة البيانات ناقصة", { status: 500 });
  }

  const response = await fetch(
    `${supabaseUrl}/rest/v1/links?short_code=eq.${encodeURIComponent(code)}&select=id,original_url,expires_at,clicks&limit=1`,
    {
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`
      }
    }
  );

  if (!response.ok) {
    return new Response("حدث خطأ في قاعدة البيانات", { status: 500 });
  }

  const links = await response.json();
  const link = links[0];

  if (!link) {
    return new Response("هذا الرابط غير موجود 😕", { status: 404 });
  }

  if (
    link.expires_at &&
    new Date(link.expires_at).getTime() <= Date.now()
  ) {
    return new Response("هذا الرابط منتهي الصلاحية ⏰", { status: 410 });
  }

  const visitorId =
    req.headers.get("x-forwarded-for") ||
    req.headers.get("x-real-ip") ||
    "unknown";

  await fetch(`${supabaseUrl}/rest/v1/link_clicks`, {
    method: "POST",
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal"
    },
    body: JSON.stringify({
      link_id: link.id,
      visitor_id: visitorId.split(",")[0].trim()
    })
  });

  await fetch(
    `${supabaseUrl}/rest/v1/links?id=eq.${encodeURIComponent(link.id)}`,
    {
      method: "PATCH",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal"
      },
      body: JSON.stringify({
        clicks: Number(link.clicks || 0) + 1
      })
    }
  );

  return Response.redirect(link.original_url, 302);
};
