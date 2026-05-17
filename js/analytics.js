(() => {
    const configNode = document.getElementById("analytics-config");
    const sentScrollMilestones = new Set();
    const defaults = {
        measurementId: "G-HW6K6L6RNX",
        trackOutboundLinks: true,
        trackScrollDepth: true,
        scrollMilestones: [25, 50, 75, 90, 100]
    };

    const readConfig = () => {
        try {
            return { ...defaults, ...JSON.parse(configNode ? configNode.textContent : "{}") };
        } catch (error) {
            return defaults;
        }
    };

    const config = readConfig();
    const hasAnalytics = () => typeof window.gtag === "function";

    const trackEvent = (eventName, parameters = {}) => {
        if (!eventName || !hasAnalytics()) {
            return;
        }

        window.gtag("event", eventName, {
            page_location: window.location.href,
            page_title: document.title,
            transport_type: "beacon",
            ...parameters
        });
    };

    const classifyLink = (link) => {
        const href = link.getAttribute("href") || "";
        const url = new URL(link.href, window.location.href);
        const channel = link.dataset.analyticsChannel;

        if (channel) return channel;
        if (href.startsWith("mailto:")) return "email";
        if (url.hostname.includes("wa.me") || url.hostname.includes("whatsapp.com")) return "whatsapp";
        if (url.hostname.includes("t.me") || url.hostname.includes("telegram.me")) return "telegram";
        if (url.hostname !== window.location.hostname) return "outbound";
        return "internal";
    };

    const isOutbound = (link) => {
        const href = link.getAttribute("href") || "";

        if (href.startsWith("mailto:") || href.startsWith("tel:")) {
            return false;
        }

        try {
            return new URL(link.href, window.location.href).hostname !== window.location.hostname;
        } catch (error) {
            return false;
        }
    };

    const getScrollDepth = () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const pageHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight
        );

        if (pageHeight <= viewportHeight) {
            return 100;
        }

        return Math.min(100, Math.round(((scrollTop + viewportHeight) / pageHeight) * 100));
    };

    const trackScrollDepth = () => {
        if (!config.trackScrollDepth) {
            return;
        }

        const depth = getScrollDepth();
        const milestones = Array.isArray(config.scrollMilestones) ? config.scrollMilestones : defaults.scrollMilestones;

        milestones.forEach((milestone) => {
            if (depth >= milestone && !sentScrollMilestones.has(milestone)) {
                sentScrollMilestones.add(milestone);
                trackEvent("scroll_depth", {
                    percent_scrolled: milestone,
                    event_category: "engagement",
                    event_label: `${milestone}%`
                });
            }
        });
    };

    const handleLinkClick = (event) => {
        const link = event.target.closest("a[href]");

        if (!link) {
            return;
        }

        const eventName = link.dataset.analyticsEvent || (isOutbound(link) && config.trackOutboundLinks ? "outbound_link_click" : "");

        if (!eventName) {
            return;
        }

        trackEvent(eventName, {
            link_url: link.href,
            link_text: link.textContent.trim().replace(/\s+/g, " ").slice(0, 120),
            link_domain: new URL(link.href, window.location.href).hostname,
            event_category: eventName === "contact_click" ? "contact" : "navigation",
            event_label: link.dataset.analyticsLabel || link.href,
            contact_channel: classifyLink(link)
        });
    };

    const trackConversion = (conversionName, parameters = {}) => {
        trackEvent(conversionName, {
            event_category: "conversion",
            ...parameters
        });
    };

    window.karamixAnalytics = {
        trackEvent,
        trackConversion,
        updateConsent(consentState = {}) {
            if (hasAnalytics()) {
                window.gtag("consent", "update", consentState);
            }
        }
    };

    document.addEventListener("click", handleLinkClick);
    window.addEventListener("scroll", trackScrollDepth, { passive: true });
    window.addEventListener("load", trackScrollDepth, { once: true });
})();
