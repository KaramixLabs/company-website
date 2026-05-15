(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("#primary-menu");
    const year = document.querySelector("#year");

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }

    if (!navToggle || !navMenu) {
        return;
    }

    const setMenuState = (isOpen) => {
        navToggle.setAttribute("aria-expanded", String(isOpen));
        navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        navMenu.classList.toggle("is-open", isOpen);
        document.body.classList.toggle("nav-open", isOpen);
    };

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
})();
