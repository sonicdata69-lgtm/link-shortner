export default async function handler(req, res) {
  try {
    const code = String(req.query.code || "").trim();

    if (!code) {
      return res.status(404).send("الرابط غير موجود");
    }

    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase environment variables are missing");
      return res.status(500).send("إعدادات قاعدة البيانات ناقصة");
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
      console.error(await response.text());
      return res.status(500).send("حدث خطأ في قاعدة البيانات");
    }

    const links = await response.json();
    const link = links[0];

    if (!link) {
      return res.status(404).send("هذا الرابط غير موجود 😕");
    }

    if (
      link.expires_at &&
      new Date(link.expires_at).getTime() <= Date.now()
    ) {
      return res.status(410).send("هذا الرابط منتهي الصلاحية ⏰");
    }

    const visitorId =
      req.headers["x-forwarded-for"] ||
      req.headers["x-real-ip"] ||
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
        visitor_id: String(visitorId).split(",")[0].trim()
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

    return res.redirect(302, link.original_url);

  } catch (error) {
    console.error(error);
    return res.status(500).send("حدث خطأ أثناء تحويل الرابط");
  }
}
