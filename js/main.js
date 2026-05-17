(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("#primary-menu");
    const year = document.querySelector("#year");
    const languageToggle = document.querySelector("[data-language-toggle]");
    const languageCurrent = document.querySelector("[data-language-current]");
    const languageNext = document.querySelector("[data-language-next]");
    const root = document.documentElement;

    const storage = {
        get(key) {
            try {
                return localStorage.getItem(key);
            } catch (error) {
                return null;
            }
        },
        set(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (error) {
                return null;
            }
        }
    };

    const translations = {
        en: {
            metaTitle: "Karamix Labs | Premium Mobile Apps, Web Interfaces & Digital Systems",
            metaDescription: "Karamix Labs is a premium digital company designing mobile application interfaces, responsive web platforms, business dashboards, and scalable digital systems.",
            brandHome: "Karamix Labs home",
            brandName: "Karamix Labs",
            brandTagline: "Mobile Applications • Web Interfaces • Digital Systems",
            languageSwitchLabel: "Switch language to Arabic",
            navHome: "Home",
            navCompany: "Company",
            navServices: "Services",
            navSolutions: "Solutions",
            navTechnologies: "Technologies",
            navLeadership: "Leadership",
            navContact: "Contact",
            heroEyebrow: "Mobile Apps • Web Interfaces • Digital Systems",
            heroTitle: "Designing Modern Mobile Apps and Web Interfaces",
            heroLead: "Karamix Labs designs and builds modern mobile application interfaces, responsive web platforms, business dashboards, and practical digital systems with clean structure, premium visuals, and user-focused experiences.",
            heroPrimary: "Start a Project",
            heroSecondary: "View Services",
            companyShowcaseLabel: "Featured Karamix Labs interface preview",
            showcaseLabel: "Featured Interface System",
            companyImageAlt: "Premium Karamix Labs interface system preview",
            companyEyebrow: "Company",
            companyTitle: "Clean Digital Interfaces for Practical Business Use",
            companyP1: "Karamix Labs is a modern interface-focused studio creating mobile application interfaces, responsive websites, dashboards, landing pages, and practical digital systems.",
            companyP2: "The company focuses on clear structure, polished visual presentation, responsive layouts, and user experiences that feel premium without becoming complicated.",
            companyP3: "Every interface is shaped around real use: navigation clarity, readable content, useful screens, balanced components, and layouts that adapt gracefully across devices.",
            companyP4: "Karamix Labs is currently founder-led, focused on building a strong design and development foundation for modern digital interfaces.",
            servicesEyebrow: "Services",
            servicesTitle: "Modern Interfaces for Apps, Web, and Business Tools",
            servicesIntro: "Focused services for companies and creators who need polished screens, responsive web experiences, dashboards, portals, and structured user flows.",
            service1Title: "Mobile App Interfaces",
            service1Text: "Designing clear mobile-first screens for app ideas, customer flows, account areas, and practical product experiences.",
            service2Title: "Web Interface Design",
            service2Text: "Creating polished web interfaces with strong hierarchy, readable layouts, clean components, and responsive behavior.",
            service3Title: "Responsive Landing Pages",
            service3Text: "Building premium landing pages and brand websites that communicate clearly across mobile, tablet, and desktop screens.",
            service4Title: "Business Dashboards",
            service4Text: "Designing dashboard interfaces for metrics, status views, tasks, reports, and business activity overview.",
            service5Title: "Admin & Client Portals",
            service5Text: "Structuring admin areas and client portals with organized navigation, useful screens, and clear action states.",
            service6Title: "UI/UX Structure",
            service6Text: "Planning interface structure, page flow, content hierarchy, layout systems, and reusable visual patterns.",
            solutionsEyebrow: "Solutions",
            solutionsTitle: "Focused Digital Interface Solutions",
            solutionsIntro: "Karamix Labs works on practical interface categories that help businesses present, manage, and deliver digital experiences with clarity.",
            solution1Title: "Mobile Application Interfaces",
            solution1Text: "Modern app screens with clear navigation, readable content, strong visual hierarchy, and smooth mobile-first structure.",
            solution2Title: "Web Dashboards",
            solution2Text: "Dashboard layouts for tracking information, reviewing activity, managing records, and scanning business status quickly.",
            solution3Title: "Landing Pages & Brand Websites",
            solution3Text: "Responsive websites that present a company, service, or product with polished visuals and concise content structure.",
            solution4Title: "Client Portals",
            solution4Text: "Client-facing interface structures for accounts, messages, requests, files, progress views, and service touchpoints.",
            solution5Title: "Internal Business Tools",
            solution5Text: "Interface concepts for internal teams that need organized task views, lists, forms, notes, and simple work tracking.",
            solution6Title: "Cross-Platform UI Concepts",
            solution6Text: "Consistent visual systems for experiences that need to feel coherent across mobile screens, web pages, and dashboards.",
            techEyebrow: "Technologies",
            techTitle: "Interface Tools and Design Capabilities",
            techIntro: "Karamix Labs keeps the technical foundation lightweight, fast, and compatible with static publishing while focusing on responsive interface quality.",
            businessImageAlt: "Karamix Labs digital systems console visual",
            previewEyebrow: "Interface Direction",
            previewTitle: "Screens Built for Clarity and Flow",
            previewIntro: "Visual direction for mobile-first layouts, business dashboards, web components, and practical digital interface systems.",
            preview1Title: "Readable Business Views",
            preview1Text: "Dashboard concepts that make information easy to scan, compare, and act on without crowding the screen.",
            preview2Title: "Structured Screen Journeys",
            preview2Text: "Interface flows for moving users through forms, account areas, service steps, and client-facing screens.",
            preview3Title: "Mobile and Web Components",
            preview3Text: "Reusable interface blocks for forms, lists, panels, navigation, dashboards, and responsive product screens.",
            leadershipEyebrow: "Leadership",
            leadershipTitle: "Founder-Led Interface Systems Studio",
            leadershipRole: "Founder & Interface Systems Developer",
            leadershipText: "Karamix Labs was founded by AbdulKarim Haj Yasin to build modern mobile application interfaces, responsive web experiences, dashboards, and practical digital systems with a focus on clarity, usability, and premium visual presentation.",
            contactEyebrow: "Contact",
            contactTitle: "Let’s Build Your Next Digital Interface",
            contactIntro: "Contact Karamix Labs to discuss a mobile app interface, business dashboard, landing page, web platform, or custom digital interface.",
            bestFitTitle: "Best for",
            contactWhatsApp: "Message Karamix Labs",
            contactWhatsAppSmall: "Primary contact channel",
            contactEmailLabel: "Email",
            contactEmailSmall: "Recommended for project briefs and formal discussions",
            contactLinkedIn: "Professional Profile",
            contactLinkedInSmall: "Founder and company networking",
            contactTelegramLabel: "Telegram Channel",
            contactTelegram: "Karamix Labs Updates",
            contactTelegramSmall: "Follow Karamix Labs updates, design showcases, digital systems, and company news.",
            contactWhatsAppButton: "Start on WhatsApp",
            contactTelegramButton: "Open Telegram",
            footerRights: "Karamix Labs. All rights reserved.",
            footerTagline: "Mobile Applications • Web Interfaces • Digital Systems",
            footerFounder: "Founded by AbdulKarim Haj Yasin"
        },
        ar: {
            metaTitle: "Karamix Labs | واجهات تطبيقات ومواقع وأنظمة رقمية احترافية",
            metaDescription: "Karamix Labs شركة رقمية متخصصة في تصميم واجهات تطبيقات الجوال، منصات الويب المتجاوبة، لوحات الأعمال، والأنظمة الرقمية القابلة للتوسع.",
            brandHome: "العودة إلى الصفحة الرئيسية لكاراميكس لابز",
            brandName: "Karamix Labs",
            brandTagline: "تطبيقات جوال • واجهات ويب • أنظمة رقمية",
            languageSwitchLabel: "تبديل اللغة إلى الإنجليزية",
            navHome: "الرئيسية",
            navCompany: "الشركة",
            navServices: "الخدمات",
            navSolutions: "الحلول",
            navTechnologies: "التقنيات",
            navLeadership: "الإدارة",
            navContact: "التواصل",
            heroEyebrow: "تطبيقات جوال • واجهات ويب • أنظمة رقمية",
            heroTitle: "تصميم واجهات تطبيقات ومواقع حديثة",
            heroLead: "تقوم Karamix Labs بتصميم وبناء واجهات تطبيقات جوال حديثة، منصات ويب متجاوبة، لوحات أعمال، وأنظمة رقمية عملية ببنية واضحة، عرض بصري متقن، وتجارب استخدام مركزة.",
            heroPrimary: "ابدأ مشروعك",
            heroSecondary: "عرض الخدمات",
            companyShowcaseLabel: "عرض واجهة مميز من Karamix Labs",
            showcaseLabel: "نظام واجهات مميز",
            companyImageAlt: "معاينة نظام واجهات احترافي من Karamix Labs",
            companyEyebrow: "الشركة",
            companyTitle: "واجهات رقمية واضحة للاستخدام العملي",
            companyP1: "Karamix Labs استوديو حديث يركز على تصميم واجهات تطبيقات الجوال، المواقع المتجاوبة، لوحات التحكم، صفحات العرض، والأنظمة الرقمية العملية.",
            companyP2: "تركز الشركة على البنية الواضحة، العرض البصري المصقول، التخطيطات المتجاوبة، وتجارب الاستخدام التي تبدو احترافية من دون تعقيد زائد.",
            companyP3: "كل واجهة يتم تشكيلها حول الاستخدام الحقيقي: وضوح التنقل، قراءة المحتوى، الشاشات المفيدة، توازن المكونات، وتخطيطات تتكيف بسلاسة مع مختلف الأجهزة.",
            companyP4: "تعمل Karamix Labs بقيادة مؤسسها على بناء أساس قوي للتصميم والتطوير في واجهات رقمية حديثة.",
            servicesEyebrow: "الخدمات",
            servicesTitle: "واجهات حديثة للتطبيقات والويب وأدوات الأعمال",
            servicesIntro: "خدمات مركزة للشركات وأصحاب الأفكار الذين يحتاجون إلى شاشات مصقولة، تجارب ويب متجاوبة، لوحات أعمال، بوابات، ومسارات استخدام منظمة.",
            service1Title: "واجهات تطبيقات الجوال",
            service1Text: "تصميم شاشات واضحة للجوال للأفكار التطبيقية، مسارات العملاء، مناطق الحسابات، وتجارب المنتجات العملية.",
            service2Title: "تصميم واجهات الويب",
            service2Text: "إنشاء واجهات ويب مصقولة بتسلسل بصري قوي، تخطيطات مقروءة، مكونات نظيفة، وسلوك متجاوب.",
            service3Title: "صفحات عرض متجاوبة",
            service3Text: "بناء صفحات عرض ومواقع علامات تجارية احترافية تتواصل بوضوح عبر الجوال والتابلت وسطح المكتب.",
            service4Title: "لوحات أعمال",
            service4Text: "تصميم واجهات لوحات للقياسات، حالات المتابعة، المهام، التقارير، ونظرة عامة على نشاط الأعمال.",
            service5Title: "بوابات إدارة وعملاء",
            service5Text: "تنظيم مناطق الإدارة وبوابات العملاء بتنقل واضح، شاشات مفيدة، وحالات إجراء مباشرة.",
            service6Title: "بنية UI/UX",
            service6Text: "تخطيط بنية الواجهة، مسار الصفحات، تسلسل المحتوى، أنظمة التخطيط، والأنماط البصرية القابلة لإعادة الاستخدام.",
            solutionsEyebrow: "الحلول",
            solutionsTitle: "حلول واجهات رقمية مركزة",
            solutionsIntro: "تعمل Karamix Labs على فئات واجهات عملية تساعد الشركات على العرض والإدارة وتقديم التجارب الرقمية بوضوح.",
            solution1Title: "واجهات تطبيقات الجوال",
            solution1Text: "شاشات تطبيق حديثة بتنقل واضح، محتوى مقروء، تسلسل بصري قوي، وبنية موجهة للجوال.",
            solution2Title: "لوحات ويب",
            solution2Text: "تخطيطات لوحات لتتبع المعلومات، مراجعة النشاط، إدارة السجلات، وقراءة حالة العمل بسرعة.",
            solution3Title: "صفحات عرض ومواقع شركات",
            solution3Text: "مواقع متجاوبة تعرض الشركة أو الخدمة أو المنتج بصور مصقولة وبنية محتوى مختصرة.",
            solution4Title: "بوابات العملاء",
            solution4Text: "بنى واجهات موجهة للعملاء للحسابات، الرسائل، الطلبات، الملفات، حالات التقدم، ونقاط الخدمة.",
            solution5Title: "أدوات أعمال داخلية",
            solution5Text: "مفاهيم واجهات للفرق الداخلية التي تحتاج إلى مهام منظمة، قوائم، نماذج، ملاحظات، وتتبع عمل بسيط.",
            solution6Title: "مفاهيم واجهات متعددة المنصات",
            solution6Text: "أنظمة بصرية متسقة للتجارب التي يجب أن تبدو مترابطة عبر شاشات الجوال وصفحات الويب ولوحات العمل.",
            techEyebrow: "التقنيات",
            techTitle: "أدوات واجهات وقدرات تصميم",
            techIntro: "تحافظ Karamix Labs على أساس تقني خفيف وسريع ومتوافق مع النشر الثابت مع التركيز على جودة الواجهات المتجاوبة.",
            businessImageAlt: "تصور وحدة أنظمة رقمية من Karamix Labs",
            previewEyebrow: "اتجاه الواجهات",
            previewTitle: "شاشات مبنية للوضوح والانسياب",
            previewIntro: "اتجاه بصري لتخطيطات الجوال أولاً، لوحات الأعمال، مكونات الويب، وأنظمة الواجهات الرقمية العملية.",
            preview1Title: "عروض أعمال قابلة للقراءة",
            preview1Text: "مفاهيم لوحات تجعل المعلومات سهلة القراءة والمقارنة واتخاذ القرار من دون ازدحام الشاشة.",
            preview2Title: "رحلات شاشات منظمة",
            preview2Text: "مسارات واجهة تنقل المستخدمين عبر النماذج، مناطق الحساب، خطوات الخدمة، والشاشات الموجهة للعملاء.",
            preview3Title: "مكونات للجوال والويب",
            preview3Text: "كتل واجهات قابلة لإعادة الاستخدام للنماذج، القوائم، اللوحات، التنقل، ولوحات المعلومات والشاشات المتجاوبة.",
            leadershipEyebrow: "الإدارة",
            leadershipTitle: "استوديو أنظمة واجهات بقيادة مؤسسه",
            leadershipRole: "المؤسس ومطور أنظمة الواجهات",
            leadershipText: "أسس AbdulKarim Haj Yasin شركة Karamix Labs لبناء واجهات تطبيقات جوال حديثة، تجارب ويب متجاوبة، لوحات أعمال، وأنظمة رقمية عملية تركز على الوضوح وسهولة الاستخدام والعرض البصري الاحترافي.",
            contactEyebrow: "التواصل",
            contactTitle: "لنقم ببناء واجهتك الرقمية التالية",
            contactIntro: "تواصل مع Karamix Labs لمناقشة واجهة تطبيق جوال، لوحة أعمال، صفحة عرض، منصة ويب، أو واجهة رقمية مخصصة.",
            bestFitTitle: "مناسب لـ",
            contactWhatsApp: "راسل Karamix Labs",
            contactWhatsAppSmall: "قناة التواصل الأساسية",
            contactEmailLabel: "البريد الإلكتروني",
            contactEmailSmall: "مناسب لملخصات المشاريع والمراسلات الرسمية",
            contactLinkedIn: "الملف المهني",
            contactLinkedInSmall: "التواصل المهني الخاص بالشركة والمؤسس",
            contactTelegramLabel: "قناة تيليجرام",
            contactTelegram: "تحديثات Karamix Labs",
            contactTelegramSmall: "تابع تحديثات Karamix Labs، عروض التصميم، الأنظمة الرقمية، وأخبار الشركة.",
            contactWhatsAppButton: "ابدأ عبر واتساب",
            contactTelegramButton: "افتح تيليجرام",
            footerRights: "Karamix Labs. جميع الحقوق محفوظة.",
            footerTagline: "تطبيقات جوال • واجهات ويب • أنظمة رقمية",
            footerFounder: "تأسست بواسطة AbdulKarim Haj Yasin"
        }
    };

    const setMenuState = (isOpen) => {
        if (!navToggle || !navMenu) {
            return;
        }

        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        navMenu.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
    };

    const updateMeta = (dictionary, language) => {
        document.title = dictionary.metaTitle;
        const description = document.querySelector('meta[name="description"]');
        const ogTitle = document.querySelector('meta[property="og:title"]');
        const ogDescription = document.querySelector('meta[property="og:description"]');
        const ogLocale = document.querySelector('meta[property="og:locale"]');
        const twitterTitle = document.querySelector('meta[name="twitter:title"]');
        const twitterDescription = document.querySelector('meta[name="twitter:description"]');

        if (description) description.setAttribute("content", dictionary.metaDescription);
        if (ogTitle) ogTitle.setAttribute("content", dictionary.metaTitle);
        if (ogDescription) ogDescription.setAttribute("content", dictionary.metaDescription);
        if (ogLocale) ogLocale.setAttribute("content", language === "ar" ? "ar_AR" : "en_US");
        if (twitterTitle) twitterTitle.setAttribute("content", dictionary.metaTitle);
        if (twitterDescription) twitterDescription.setAttribute("content", dictionary.metaDescription);
    };

    const applyLanguage = (language) => {
        const dictionary = translations[language] || translations.en;
        const isArabic = language === "ar";

        root.lang = language;
        root.dir = isArabic ? "rtl" : "ltr";
        document.body.dir = root.dir;

        document.querySelectorAll("[data-i18n]").forEach((node) => {
            const key = node.getAttribute("data-i18n");
            if (dictionary[key]) {
                node.textContent = dictionary[key];
            }
        });

        document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
            node.getAttribute("data-i18n-attr").split(",").forEach((pair) => {
                const [attribute, key] = pair.split(":").map((part) => part.trim());
                if (attribute && key && dictionary[key]) {
                    node.setAttribute(attribute, dictionary[key]);
                }
            });
        });

        if (languageCurrent) languageCurrent.textContent = isArabic ? "AR" : "EN";
        if (languageNext) languageNext.textContent = isArabic ? "EN" : "AR";

        updateMeta(dictionary, language);
        storage.set("karamix-language", language);
    };

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            const isOpen = navToggle.getAttribute("aria-expanded") === "true";
            setMenuState(!isOpen);
        });

        navMenu.addEventListener("click", (event) => {
            const link = event.target.closest("a");
            if (link) {
                setMenuState(false);
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
                setMenuState(false);
                navToggle.focus();
            }
        });

        window.addEventListener("resize", () => {
            if (window.matchMedia("(min-width: 64rem)").matches) {
                setMenuState(false);
            }
        });
    }

    if (languageToggle) {
        languageToggle.addEventListener("click", () => {
            applyLanguage(root.lang === "ar" ? "en" : "ar");
        });
    }

    const storedLanguage = storage.get("karamix-language");
    const initialLanguage = storedLanguage === "ar" || storedLanguage === "en" ? storedLanguage : "en";
    applyLanguage(initialLanguage);
})();
