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
    egp: "دولار",
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
    settings_rate: "الأرباح لكل 1000 نقرة (دولار)",
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
    tagline_reasons: "أسباب اختيارك لينا:",
    tagline_reason1: "الثقة والأمان 🔒",
    tagline_reason2: "تسهيل تجربة الزوار لضمان تجربة سهلة",
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
    referral_bonus_referrer_label: "مكافأة صاحب الدعوة (دولار) — غير مُفعّلة حاليًا",
    referral_bonus_referred_label: "مكافأة المستخدم الجديد (دولار) — غير مُفعّلة حاليًا",
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
    referral_subtitle: "احصل على مكافأة نقدية لكل صديق يسجّل ويعمل معنا من خلال رابط الإحالة (الريفيرال) الخاص بك. بعد انضمام صديقك وقيامه بأول عملية سحب لأرباحه، تُضاف مكافأتك تلقائيًا إلى رصيدك.",
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
    referral_disclaimer: "* تُحتسب المكافأة الفعلية وتُضاف لرصيدك بعد أول عملية سحب يقوم بها صديقك.",
    referral_desc: "شارك رابط الدعوة بتاعك، وبعد ما صاحبك يعمل أول عملية سحب لأرباحه، هتاخد مكافأة تتضاف لرصيدك تلقائيًا.",
    referral_link_label: "رابط الدعوة بتاعك",
    referred_count_label: "عدد اللي دخلوا بدعوتك",
    referral_earned_label: "اللي كسبته من الإحالة",
    search_links_placeholder: "دور في روابطك",
    sort_by_clicks: "الأكثر كليكات",
    link_col_actions: "إجراءات",
    account_banned_title: "حسابك محظور",
    account_banned_desc: "تواصل مع الدعم لمزيد من التفاصيل.",
    withdraw_turnaround_note: "⚡ استلام الأرباح يوميًا بحد أقصى 24 ساعة من وقت الطلب.",
    tab_stats: "📊 الإحصائيات",
    tab_visits: "🧾 تفاصيل الزيارات",
    tab_links: "🔗 إدارة الروابط",
    tab_withdraw: "💵 السحب",
    tab_referrals: "🤝 الإحالات",
    tab_traffic: "📡 مصادر الزيارات",
    tab_tools: "🛠 أدوات",
    tab_settings: "⚙️ الإعدادات",
    tab_support: "💬 الدعم",
    stats_overview_title: "نظرة عامة",
    ov_total_views: "إجمالي المشاهدات",
    ov_total_earnings: "إجمالي الأرباح",
    ov_referral_earnings: "أرباح الإحالة",
    ov_avg_cpm: "متوسط CPM",
    ov_earnings_note: "الأرباح والـ CPM لسه صفر لحد ما يتم ربط الموقع بشبكة إعلانات فعلية. عدد المشاهدات أعلاه حقيقي ومأخوذ من كليكات روابطك.",
    stats_chart_title: "المشاهدات خلال آخر 14 يوم",
    visits_title: "تفاصيل الزيارات اليومية",
    visits_desc: "إجمالي المشاهدات مجمّعة يوميًا عبر كل روابطك (بيانات حقيقية).",
    visits_col_date: "التاريخ",
    visits_col_views: "المشاهدات",
    per_country_note: "ملحوظة: عائد الكليك بيختلف حسب بلد الزائر — الميزة دي هتتفعّل بعد ربط شبكة إعلانات حقيقية.",
    traffic_title: "مصادر الزيارات",
    coming_soon_desc: "الميزة دي لسه تحت التطوير — هتقدر تشوف منها الأماكن اللي بتيجي منها زياراتك (واتساب، فيسبوك، مباشر...) قريبًا.",
    tools_title: "أدوات",
    tools_coming_soon_desc: "أدوات إضافية زي التقصير بالجملة (Bulk) وربط API بتاعك جاية قريبًا.",
    settings_title: "إعدادات الحساب",
    settings_email_label: "البريد الإلكتروني",
    settings_new_password_label: "كلمة مرور جديدة",
    settings_password_placeholder: "اتركها فاضية لو مش عايز تغيرها",
    settings_password_empty_error: "من فضلك اكتب كلمة مرور جديدة",
    settings_password_short_error: "كلمة المرور لازم تكون 6 حروف على الأقل",
    settings_saved: "تم الحفظ بنجاح",
    support_title: "الدعم الفني",
    support_desc: "لو عندك أي استفسار أو مشكلة في حسابك أو أرباحك، تواصل معنا مباشرة.",
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
    egp: "USD",
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
    settings_rate: "Earnings per 1000 clicks (USD)",
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
    referral_bonus_referrer_label: "Referrer bonus (USD) — not active yet",
    referral_bonus_referred_label: "New user bonus (USD) — not active yet",
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
    referral_subtitle: "Get a cash reward for every friend who signs up and works with us through your referral link. Once your friend joins and makes their first withdrawal, your reward is added to your balance automatically.",
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
    referral_disclaimer: "* The actual reward is credited to your balance after your friend's first withdrawal.",
    referral_desc: "Share your referral link — once your friend makes their first withdrawal, you'll get a reward added to your balance automatically.",
    referral_link_label: "Your referral link",
    referred_count_label: "Friends who joined",
    referral_earned_label: "Earned from referrals",
    search_links_placeholder: "Search your links",
    sort_by_clicks: "Most clicks",
    link_col_actions: "Actions",
    account_banned_title: "Your account is banned",
    account_banned_desc: "Contact support for more details.",
    withdraw_turnaround_note: "⚡ Earnings are paid out daily, within 24 hours of your request.",
    tab_stats: "📊 Statistics",
    tab_visits: "🧾 Visit Details",
    tab_links: "🔗 Manage Links",
    tab_withdraw: "💵 Withdraw",
    tab_referrals: "🤝 Referrals",
    tab_traffic: "📡 Traffic Sources",
    tab_tools: "🛠 Tools",
    tab_settings: "⚙️ Settings",
    tab_support: "💬 Support",
    stats_overview_title: "Overview",
    ov_total_views: "Total Views",
    ov_total_earnings: "Total Earnings",
    ov_referral_earnings: "Referral Earnings",
    ov_avg_cpm: "Average CPM",
    ov_earnings_note: "Earnings and CPM stay at zero until a real ad network is connected. The view count above is real, taken from your links' actual clicks.",
    stats_chart_title: "Views over the last 14 days",
    visits_title: "Daily Visit Details",
    visits_desc: "Total views aggregated daily across all your links (real data).",
    visits_col_date: "Date",
    visits_col_views: "Views",
    per_country_note: "Note: click payout varies by visitor country — this will activate once a real ad network is connected.",
    traffic_title: "Traffic Sources",
    coming_soon_desc: "This feature is still in development — soon you'll see where your visits come from (WhatsApp, Facebook, direct...).",
    tools_title: "Tools",
    tools_coming_soon_desc: "Extra tools like bulk shortening and API access are coming soon.",
    settings_title: "Account Settings",
    settings_email_label: "Email",
    settings_new_password_label: "New password",
    settings_password_placeholder: "Leave empty if you don't want to change it",
    settings_password_empty_error: "Please enter a new password",
    settings_password_short_error: "Password must be at least 6 characters",
    settings_saved: "Saved successfully",
    support_title: "Support",
    support_desc: "If you have any question or issue with your account or earnings, contact us directly.",
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
  populateMethodSelect();
}

// إعادة بناء قائمة طرق السحب باللغة الحالية، مع الحفاظ على القيمة المختارة
function populateMethodSelect() {
  const select = document.getElementById("method");
  if (!select) return;
  const lang = getLang();
  const labels = METHOD_LABELS[lang] || METHOD_LABELS.ar;
  const previous = select.value;
  select.innerHTML = "";
  Object.keys(labels).forEach(value => {
    const opt = document.createElement("option");
    opt.value = value;
    opt.textContent = labels[value];
    select.appendChild(opt);
  });
  if (previous) select.value = previous;
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
