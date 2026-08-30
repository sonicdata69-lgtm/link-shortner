// ====== zlink shared config ======
const SUPABASE_URL = "https://ohnyndnscrktcidfnvvo.supabase.co";
const SUPABASE_KEY = "sb_publishable_5hDMPysgOtpWq-6SVT1fLQ_28zCTo6j";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ====== i18n ======
const I18N = {
  ar: {
    dir: "rtl",
    brand_tagline: "اختصر رابطك واربح من كل كليك",
    nav_home: "الرئيسية",
    nav_dashboard: "لوحتي",
    nav_admin: "الأدمن",
    nav_login: "دخول",
    nav_logout: "خروج",
    url_label: "الرابط الطويل",
    url_placeholder: "https://example.com/رابط-طويل",
    shorten_btn: "اختصر الرابط",
    shorten_loading: "بنختصر...",
    result_label: "رابطك الجديد جاهز",
    copy_hint: "دوس عليه للنسخ",
    copied: "اتنسخ! ✅",
    again_btn: "اختصار رابط تاني",
    url_error: "اكتب رابط صحيح من فضلك",
    generic_error: "حصل خطأ، جرب تاني",
    login_hint: "سجّل دخولك عشان تربح فلوس من روابطك",
    auth_title: "دخول / حساب جديد",
    email_label: "البريد الإلكتروني",
    password_label: "كلمة المرور",
    login_btn: "دخول",
    signup_btn: "إنشاء حساب",
    have_account: "عندك حساب؟ سجل دخول",
    no_account: "مالكش حساب؟ اعمل واحد",
    auth_error: "بيانات غلط أو حصل خطأ",
    dash_title: "لوحة التحكم",
    balance_label: "رصيدك الحالي",
    egp: "جنيه",
    my_links: "روابطي",
    link_col_short: "الرابط المختصر",
    link_col_clicks: "الكليكات",
    no_links: "لسه معملتش أي رابط",
    withdraw_title: "طلب سحب أرباح",
    amount_label: "المبلغ",
    method_label: "طريقة السحب",
    details_label: "بيانات الحساب (رقم / يوزر / عنوان محفظة)",
    withdraw_btn: "اطلب السحب",
    withdraw_success: "تم إرسال طلبك، هيتراجع من الأدمن قريب",
    withdraw_history: "طلباتي السابقة",
    status_pending: "قيد المراجعة",
    status_approved: "متوافق عليه",
    status_rejected: "مرفوض",
    status_paid: "تم الدفع",
    redirect_text: "بنوصلك للرابط...",
    skip_ad: "تخطي",
    skip_ad_wait: "استنى",
    link_not_found: "الرابط ده مش موجود 😕",
    admin_title: "لوحة تحكم الأدمن",
    admin_no_access: "الصفحة دي للأدمن بس",
    tab_withdrawals: "طلبات السحب",
    tab_users: "المستخدمين",
    tab_settings: "الإعدادات",
    wd_col_email: "الإيميل",
    wd_col_amount: "المبلغ",
    wd_col_method: "الطريقة",
    wd_col_details: "البيانات",
    wd_col_status: "الحالة",
    wd_col_actions: "إجراء",
    approve: "موافقة",
    reject: "رفض",
    mark_paid: "تم الدفع",
    users_col_email: "الإيميل",
    users_col_balance: "الرصيد",
    users_col_joined: "تاريخ التسجيل",
    settings_site_name: "اسم الموقع",
    settings_rate: "الأرباح لكل 1000 كليك (جنيه)",
    settings_min_withdraw: "أقل مبلغ للسحب",
    settings_ad_html: "كود الإعلان (HTML/JS)",
    settings_ad_seconds: "ثواني الانتظار قبل التخطي",
    save_settings: "حفظ الإعدادات",
    settings_saved: "تم الحفظ ✅",
    footer_text: "zlink — اختصار روابط واربح",
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
