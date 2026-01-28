
    document.addEventListener('DOMContentLoaded', function() {

    /* ----------------------------------------------------
       NAVBAR + MENU MOBILE
    ---------------------------------------------------- */
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('nav-toggle');
    const navMobile = document.getElementById('nav-mobile');
    const navLinks = document.querySelectorAll('.nav-link, .nav-mobile-link');
    

    // Effet de scroll sur la navbar
    window.addEventListener('scroll', function() {
        navbar.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Ouverture/fermeture du menu mobile
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMobile.classList.toggle('active');

            const hamburgers = navToggle.querySelectorAll('.hamburger');
            const menuOpen = navMobile.classList.contains('active');

            hamburgers.forEach((bar, i) => {
                if (menuOpen) {
                    if (i === 0) bar.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    if (i === 1) bar.style.opacity = '0';
                    if (i === 2) bar.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                } else {
                    bar.style.transform = 'none';
                    bar.style.opacity = '1';
                }
            });
        });
    }

    // Fermer le menu mobile au clic
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMobile.classList.remove('active');

            const hamburgers = navToggle.querySelectorAll('.hamburger');
            hamburgers.forEach(bar => {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            });
        });
    });

    // Scroll fluide
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId.startsWith("#")) return;

            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const top = targetSection.offsetTop - 80;
                window.scrollTo({ top, behavior: 'smooth' });
            }
        });
    });


    /* ----------------------------------------------------
       INTRO SCREEN (disparition au scroll)
    ---------------------------------------------------- */
    
    const intro = document.getElementById('intro-screen');

    function hideIntroOnScroll() {
        intro.classList.add('hidden');
        window.removeEventListener('scroll', hideIntroOnScroll);
    }

    if (intro) {
        window.addEventListener('scroll', hideIntroOnScroll);
    }


    /* ----------------------------------------------------
       ANIMATION – RÉVÉLATIONS AU SCROLL
    ---------------------------------------------------- */
    const sections = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        sections.forEach(section => {
            const top = section.getBoundingClientRect().top;
            if (top < window.innerHeight * 0.85) {
                section.classList.add("visible");
            }
        });
    }

    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll);


    /* ----------------------------------------------------
       NOM FLOTTANT À GAUCHE
    ---------------------------------------------------- */
    const floatingName = document.getElementById("floating-name");

    if (floatingName) {

        window.addEventListener("scroll", function () {
            floatingName.classList.toggle("visible", window.scrollY > 100);
        });

        floatingName.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setTimeout(() => location.reload(), 300);
        });
    }


    /* ----------------------------------------------------
       MODE JOUR / NUIT
    ---------------------------------------------------- */
    const toggleButton = document.getElementById("toggle-button");
    const body = document.body;

    function updateToggleIcon() {
        toggleButton.textContent = body.classList.contains("night-mode") ? "🌙" : "🌞";
    }

    // Restauration depuis localStorage
    if (localStorage.getItem("theme") === "night") {
        body.classList.add("night-mode");
    }

    if (toggleButton) {
        updateToggleIcon();

        toggleButton.addEventListener("click", () => {
            body.classList.toggle("night-mode");
            const isNight = body.classList.contains("night-mode");
            localStorage.setItem("theme", isNight ? "night" : "day");
            updateToggleIcon();
        });
    }

});
