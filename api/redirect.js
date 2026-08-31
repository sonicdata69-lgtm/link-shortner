import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  try {
    const code = String(req.query.code || "").trim();

    if (!code) {
      return res.status(404).send("الرابط غير موجود");
    }

    const { data: link, error } = await supabase
      .from("links")
      .select("id, original_url, expires_at, clicks")
      .eq("short_code", code)
      .maybeSingle();

    if (error) {
      console.error(error);
      return res.status(500).send("حدث خطأ");
    }

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

    await supabase.from("link_clicks").insert({
      link_id: link.id,
      visitor_id: String(visitorId).split(",")[0].trim()
    });

    await supabase
      .from("links")
      .update({
        clicks: Number(link.clicks || 0) + 1
      })
      .eq("id", link.id);

    return res.redirect(302, link.original_url);

  } catch (error) {
    console.error(error);
    return res.status(500).send("حدث خطأ أثناء تحويل الرابط");
  }
}
