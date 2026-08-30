// ====== zlink shared config ======
const SUPABASE_URL = "https://ohnyndnscrktcidfnvvo.supabase.co";
const SUPABASE_KEY = "sb_publishable_5hDMPysgOtpWq-6SVT1fLQ_28zCTo6j";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ====== i18n ======
const I18N = {
  ar: {
    dir: "rtl",
    brand_tagline: "اختصر رابطك واربح من كل نقرة",
    nav_home: "الرئيسية",
    nav_dashboard: "لوحة التحكم",
    nav_admin: "الإدارة",
    nav_login: "تسجيل الدخول",
    nav_logout: "تسجيل الخروج",
    url_label: "الرابط الطويل",
    url_placeholder: "https://example.com/رابط-طويل",
    shorten_btn: "اختصار الرابط",
    shorten_loading: "جارٍ الاختصار...",
    result_label: "رابطك الجديد جاهز الآن",
    copy_hint: "انقر عليه للنسخ",
    copied: "تم النسخ! ✅",
    again_btn: "اختصار رابط آخر",
    url_error: "يرجى إدخال رابط صحيح",
    generic_error: "حدث خطأ، يرجى المحاولة مرة أخرى",
    login_hint: "سجّل الدخول لتربح المال من روابطك",
    auth_title: "تسجيل الدخول / حساب جديد",
    email_label: "البريد الإلكتروني",
    password_label: "كلمة المرور",
    login_btn: "تسجيل الدخول",
    signup_btn: "إنشاء حساب",
    have_account: "لديك حساب بالفعل؟ سجّل الدخول",
    no_account: "ليس لديك حساب؟ أنشئ حسابًا",
    auth_error: "بيانات غير صحيحة أو حدث خطأ",
    dash_title: "لوحة التحكم",
    balance_label: "رصيدك الحالي",
    egp: "جنيه",
    my_links: "روابطي",
    link_col_short: "الرابط المختصر",
    link_col_clicks: "عدد النقرات",
    no_links: "لم تقم بإنشاء أي رابط بعد",
    withdraw_title: "طلب سحب الأرباح",
    amount_label: "المبلغ",
    method_label: "طريقة السحب",
    details_label: "بيانات الحساب (رقم الهاتف / اسم المستخدم / عنوان المحفظة)",
    withdraw_btn: "طلب السحب",
    withdraw_success: "تم إرسال طلبك، وستتم مراجعته من قبل الإدارة قريبًا",
    withdraw_history: "الطلبات السابقة",
    status_pending: "قيد المراجعة",
    status_approved: "تمت الموافقة",
    status_rejected: "مرفوض",
    status_paid: "تم الدفع",
    redirect_text: "جارٍ تحويلك إلى الرابط...",
    skip_ad: "تخطي",
    skip_ad_wait: "انتظر",
    link_not_found: "هذا الرابط غير موجود 😕",
    admin_title: "لوحة تحكم الإدارة",
    admin_no_access: "هذه الصفحة مخصصة للإدارة فقط",
    tab_withdrawals: "طلبات السحب",
    tab_users: "المستخدمون",
    tab_settings: "الإعدادات",
    wd_col_email: "البريد الإلكتروني",
    wd_col_amount: "المبلغ",
    wd_col_method: "الطريقة",
    wd_col_details: "البيانات",
    wd_col_status: "الحالة",
    wd_col_actions: "الإجراء",
    approve: "موافقة",
    reject: "رفض",
    mark_paid: "تم الدفع",
    users_col_email: "البريد الإلكتروني",
    users_col_balance: "الرصيد",
    users_col_joined: "تاريخ التسجيل",
    settings_site_name: "اسم الموقع",
    settings_rate: "الأرباح لكل 1000 نقرة (جنيه)",
    settings_min_withdraw: "أقل مبلغ للسحب",
    settings_ad_html: "كود الإعلان (HTML/JS)",
    settings_ad_seconds: "ثواني الانتظار قبل التخطي",
    save_settings: "حفظ الإعدادات",
    settings_saved: "تم الحفظ ✅",
    footer_text: "zlink — اختصار الروابط وربح المال",
    hero_cta_start: "ابدأ مجانًا",
    hero_cta_dashboard: "الانتقال إلى لوحة التحكم",
    hero_cta_how: "كيف يعمل الموقع؟",
    tagline_main: "مع zlink بدايتك للربح من اختصار الروابط 💸",
    tagline_reasons: "اسباب اختيارك لينا:",
    tagline_reason1: "الثقة والأمان 🔒",
    tagline_reason2: "تسهيل تجربة الزوار لضمان تجربه سهله",
    tagline_reason3: "سحب ارباح يومي بدون تأخير ⚡",
    tagline_reason4: "أفضل عائد CPM 💵",
    tagline_reason5: "دعم فني متواجد طوال اليوم 🧑🏻‍💻",
    feature1_title: "اختصار فوري",
    feature1_desc: "حوّل أي رابط طويل إلى رابط قصير وسهل المشاركة في ثانية واحدة.",
    feature2_title: "اربح من كل نقرة",
    feature2_desc: "كل نقرة على روابطك تتحول إلى مال حقيقي يمكنك سحبه في أي وقت.",
    feature3_title: "تحكم كامل",
    feature3_desc: "تابع روابطك ونقراتك وأرباحك جميعًا من لوحة تحكم واحدة بسيطة.",
    steps_title: "كيف تبدأ؟",
    step1_title: "أنشئ حسابًا",
    step1_desc: "سجّل مجانًا خلال ثوانٍ دون أي تعقيد.",
    step2_title: "اختصر روابطك",
    step2_desc: "من لوحة التحكم، أدخل أي رابط طويل واحصل على نسخة مختصرة فورًا.",
    step3_title: "اربح مع كل نقرة",
    step3_desc: "شارك روابطك في أي مكان، وكل من ينقر عليها ستكسب مالًا.",
    add_link_title: "أضف رابطًا جديدًا",
    advanced_options: "خيارات متقدمة (اختياري)",
    custom_alias_label: "اسم مخصص للرابط (اختياري)",
    custom_alias_placeholder: "my-link",
    password_protect_label: "حماية بكلمة مرور (اختياري)",
    password_protect_placeholder: "اتركه فارغًا إذا لم ترغب في ذلك",
    expiry_label: "تاريخ الانتهاء",
    expiry_none: "بدون",
    expiry_1d: "يوم واحد",
    expiry_7d: "7 أيام",
    expiry_30d: "30 يومًا",
    alias_taken: "هذا الاسم مستخدم بالفعل، جرّب اسمًا آخر",
    link_col_dest: "الوجهة",
    qr_btn: "QR",
    stats_btn: "إحصائيات",
    edit_btn: "تعديل",
    delete_btn: "حذف",
    delete_confirm: "هل أنت متأكد من حذف هذا الرابط؟",
    edit_link_title: "تعديل الرابط",
    new_destination_label: "الرابط الأصلي الجديد",
    new_password_label: "كلمة مرور جديدة (اتركها فارغة لإزالتها)",
    save_btn: "حفظ",
    cancel_btn: "إلغاء",
    close_btn: "إغلاق",
    qr_title: "رمز QR لهذا الرابط",
    stats_title: "إحصائيات النقرات",
    no_stats: "لا توجد نقرات على هذا الرابط بعد",
    protected_link_title: "هذا الرابط محمي بكلمة مرور",
    enter_password_label: "أدخل كلمة المرور للمتابعة",
    unlock_btn: "متابعة",
    wrong_password: "كلمة المرور غير صحيحة",
    link_expired: "هذا الرابط منتهي الصلاحية ⏰",
    export_csv: "تصدير CSV",
    referral_bonus_referrer_label: "مكافأة صاحب الدعوة (جنيه) — غير مُفعّلة حاليًا",
    referral_bonus_referred_label: "مكافأة المستخدم الجديد (جنيه) — غير مُفعّلة حاليًا",
    search_email_placeholder: "ابحث بالبريد الإلكتروني",
    ban_btn: "حظر",
    banned_badge: "محظور",
    unban_btn: "إلغاء الحظر",
    about_us_title: "عن zlink",
    about_us_desc: "zlink منصة لاختصار الروابط، تتيح لك تحويل أي رابط طويل إلى رابط قصير سهل المشاركة، وتحقيق أرباح حقيقية من كل نقرة عليه.",
    contact_whatsapp: "تواصل معنا عبر واتساب",
    // Referral section translations
    referral_badge: "عرض خاص لأعضاء الموقع",
    referral_title: "ادعُ أصدقاءك وارِبح مكافآت فورية",
    referral_subtitle: "احصل على 3 دولارات هدية لكل صديق يقوم بالتسجيل والعمل معنا من خلال رابط الإحالة (الريفيرال) الخاص بك. بعد انضمام صديقك وبدء نشاطه، سيتم تحويل مكافآتك مباشرة وسيتم إضافتها إلى رصيدك فورًا.",
    referral_benefit1_title: "الثقة والأمان",
    referral_benefit1_desc: "منصة موثوقة وآمنة لعملائك",
    referral_benefit2_title: "سحب يومي بدون تأخير",
    referral_benefit2_desc: "احصل على أرباحك فورًا في أي وقت",
    referral_benefit3_title: "أفضل عائد CPM",
    referral_benefit3_desc: "أعلى معدل أرباح لكل ألف نقرة",
    referral_benefit4_title: "دعم فني متواجد",
    referral_benefit4_desc: "فريقنا يساعدك طوال اليوم",
    referral_stat1_label: "مكافأة صاحب الدعوة",
    referral_stat2_label: "عدد الأصدقاء المدعويين",
    referral_stat3_label: "إجمالي المكافآت",
    referral_link_placeholder: "رابط الإحالة الخاص بك",
    referral_copy_btn: "نسخ الرابط",
    referral_copied: "تم النسخ! ✅",
    referral_start_btn: "ابدأ أرباحك",
    referral_contact_btn: "تواصل معنا",
  },
  en: {
    dir: "ltr",
    brand_tagline: "Shorten your link, earn from every click",
    nav_home: "Home",
    nav_dashboard: "Dashboard",
    nav_admin: "Admin",
    nav_login: "Login",
    nav_logout: "Logout",
    url_label: "Long URL",
    url_placeholder: "https://example.com/very/long/link",
    shorten_btn: "Shorten",
    shorten_loading: "Shortening...",
    result_label: "Your new link is ready",
    copy_hint: "Tap to copy",
    copied: "Copied! ✅",
    again_btn: "Shorten another",
    url_error: "Please enter a valid URL",
    generic_error: "Something went wrong, try again",
    login_hint: "Log in to earn money from your links",
    auth_title: "Login / Sign up",
    email_label: "Email",
    password_label: "Password",
    login_btn: "Login",
    signup_btn: "Create account",
    have_account: "Already have an account? Log in",
    no_account: "No account? Sign up",
    auth_error: "Invalid credentials or error occurred",
    dash_title: "Dashboard",
    balance_label: "Your balance",
    egp: "EGP",
    my_links: "My links",
    link_col_short: "Short link",
    link_col_clicks: "Clicks",
    no_links: "You haven't created any links yet",
    withdraw_title: "Request withdrawal",
    amount_label: "Amount",
    method_label: "Withdrawal method",
    details_label: "Account details (number / username / wallet address)",
    withdraw_btn: "Request withdrawal",
    withdraw_success: "Request sent, admin will review it soon",
    withdraw_history: "Previous requests",
    status_pending: "Pending",
    status_approved: "Approved",
    status_rejected: "Rejected",
    status_paid: "Paid",
    redirect_text: "Taking you to your link...",
    skip_ad: "Skip",
    skip_ad_wait: "Wait",
    link_not_found: "This link doesn't exist 😕",
    admin_title: "Admin panel",
    admin_no_access: "Admins only",
    tab_withdrawals: "Withdrawals",
    tab_users: "Users",
    tab_settings: "Settings",
    wd_col_email: "Email",
    wd_col_amount: "Amount",
    wd_col_method: "Method",
    wd_col_details: "Details",
    wd_col_status: "Status",
    wd_col_actions: "Action",
    approve: "Approve",
    reject: "Reject",
    mark_paid: "Mark paid",
    users_col_email: "Email",
    users_col_balance: "Balance",
    users_col_joined: "Joined",
    settings_site_name: "Site name",
    settings_rate: "Earnings per 1000 clicks (EGP)",
    settings_min_withdraw: "Minimum withdrawal",
    settings_ad_html: "Ad code (HTML/JS)",
    settings_ad_seconds: "Seconds before skip",
    save_settings: "Save settings",
    settings_saved: "Saved ✅",
    footer_text: "zlink — shorten links & earn",
    hero_cta_start: "Get started free",
    hero_cta_dashboard: "Go to dashboard",
    hero_cta_how: "How it works",
    tagline_main: "Start earning from shortened links with zlink 💸",
    tagline_reasons: "Why choose us:",
    tagline_reason1: "Trust & Security 🔒",
    tagline_reason2: "Easy visitor experience for your audience",
    tagline_reason3: "Daily withdrawals without delay ⚡",
    tagline_reason4: "Best CPM rates 💵",
    tagline_reason5: "24/7 technical support 🧑🏻‍💻",
    feature1_title: "Instant shortening",
    feature1_desc: "Turn any long link into a short, shareable one in a single second.",
    feature2_title: "Earn from every click",
    feature2_desc: "Every click on your links turns into real money you can withdraw anytime.",
    feature3_title: "Full control",
    feature3_desc: "Track all your links, clicks, and earnings from one simple dashboard.",
    steps_title: "How to get started",
    step1_title: "Create an account",
    step1_desc: "Sign up for free in seconds, no hassle.",
    step2_title: "Shorten your links",
    step2_desc: "From your dashboard, paste any long link to get a short one instantly.",
    step3_title: "Earn with every click",
    step3_desc: "Share your links anywhere, and earn money every time someone clicks.",
    add_link_title: "Add a new link",
    advanced_options: "Advanced options (optional)",
    custom_alias_label: "Custom alias (optional)",
    custom_alias_placeholder: "my-link",
    password_protect_label: "Password protect (optional)",
    password_protect_placeholder: "Leave empty if not needed",
    expiry_label: "Expiration",
    expiry_none: "None",
    expiry_1d: "1 day",
    expiry_7d: "7 days",
    expiry_30d: "30 days",
    alias_taken: "This alias is taken, try another",
    link_col_dest: "Destination",
    qr_btn: "QR",
    stats_btn: "Stats",
    edit_btn: "Edit",
    delete_btn: "Delete",
    delete_confirm: "Delete this link?",
    edit_link_title: "Edit link",
    new_destination_label: "New destination URL",
    new_password_label: "New password (leave empty to remove)",
    save_btn: "Save",
    cancel_btn: "Cancel",
    close_btn: "Close",
    qr_title: "QR code for this link",
    stats_title: "Click statistics",
    no_stats: "No clicks yet on this link",
    protected_link_title: "This link is password protected",
    enter_password_label: "Enter password to continue",
    unlock_btn: "Unlock",
    wrong_password: "Wrong password",
    link_expired: "This link has expired ⏰",
    export_csv: "Export CSV",
    referral_bonus_referrer_label: "Referrer bonus (EGP) — not active yet",
    referral_bonus_referred_label: "New user bonus (EGP) — not active yet",
    search_email_placeholder: "Search by email",
    ban_btn: "Ban",
    banned_badge: "Banned",
    unban_btn: "Unban",
    about_us_title: "About zlink",
    about_us_desc: "zlink is a link-shortening platform that turns any long link into a short, shareable one, and lets you earn real money from every click on it.",
    contact_whatsapp: "Contact us on WhatsApp",
    // Referral section translations
    referral_badge: "Special offer for site members",
    referral_title: "Invite friends and earn instant rewards",
    referral_subtitle: "Get $3 gift for each friend who signs up and works with us through your referral link. After your friend joins and starts activity, your rewards will be transferred directly and added to your balance instantly.",
    referral_benefit1_title: "Trust & Security",
    referral_benefit1_desc: "A reliable and secure platform for your clients",
    referral_benefit2_title: "Daily withdrawal without delay",
    referral_benefit2_desc: "Get your earnings instantly anytime",
    referral_benefit3_title: "Best CPM returns",
    referral_benefit3_desc: "Highest earning rate per thousand clicks",
    referral_benefit4_title: "Available technical support",
    referral_benefit4_desc: "Our team helps you throughout the day",
    referral_stat1_label: "Referrer reward per signup",
    referral_stat2_label: "Friends invited",
    referral_stat3_label: "Total earnings",
    referral_link_placeholder: "Your referral link",
    referral_copy_btn: "Copy link",
    referral_copied: "Copied! ✅",
    referral_start_btn: "Start your earnings",
    referral_contact_btn: "Contact us",
  }
};

const METHOD_LABELS = {
  ar: { vodafone_cash: "فودافون كاش", instapay: "إنستاباي", binance: "باينانس" },
  en: { vodafone_cash: "Vodafone Cash", instapay: "InstaPay", binance: "Binance" }
};

function getLang() {
  return localStorage.getItem("zlink_lang") || "ar";
}
function setLang(l) {
  localStorage.setItem("zlink_lang", l);
}

function t(key) {
  const lang = getLang();
  return (I18N[lang] && I18N[lang][key]) || key;
}

function applyI18n() {
  const lang = getLang();
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key]) el.placeholder = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.lang === lang);
  });
}

function initLangSwitcher() {
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      applyI18n();
    });
  });
  applyI18n();
}

// ====== security helpers ======
// أي بيانات قادمة من المستخدم أو من قاعدة البيانات (البريد الإلكتروني، بيانات الحساب، عنوان الرابط، الاسم المخصص...)
// يجب أن تمر على هذه الدالة قبل وضعها داخل innerHTML، لمنع تنفيذ أكواد HTML/JS خبيثة (XSS).
function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[c]));
}

// ====== auth helpers ======
async function getCurrentProfile() {
  const { data: { user } } = await sb.auth.getUser();
  if (!user) return null;
  const { data } = await sb.from("profiles").select("*").eq("id", user.id).single();
  return data || { id: user.id, email: user.email, balance: 0, is_admin: false };
}

async function updateNav() {
  const profile = await getCurrentProfile();
  const loginLink = document.getElementById("navLogin");
  const dashLink = document.getElementById("navDashboard");
  const adminLink = document.getElementById("navAdmin");
  const logoutBtn = document.getElementById("navLogout");
  if (profile) {
    if (loginLink) loginLink.classList.add("hidden");
    if (dashLink) dashLink.classList.remove("hidden");
    if (adminLink) adminLink.classList.toggle("hidden", !profile.is_admin);
    if (logoutBtn) logoutBtn.classList.remove("hidden");
  } else {
    if (loginLink) loginLink.classList.remove("hidden");
    if (dashLink) dashLink.classList.add("hidden");
    if (adminLink) adminLink.classList.add("hidden");
    if (logoutBtn) logoutBtn.classList.add("hidden");
  }
  if (logoutBtn) {
    logoutBtn.onclick = async () => {
      await sb.auth.signOut();
      location.href = "index.html";
    };
  }
  return profile;
}
