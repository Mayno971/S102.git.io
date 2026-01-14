const translations = {
    fr: {
        name_title: "Noahn de LACROIX",
        job_title: "Étudiant en informatique",
        intro_subtitle: "À la recherche d'un stage en informatique",
        scroll_message: "⬇ Faites défiler vers le bas ⬇",

        welcome_text:
            "Bienvenue dans mon univers numérique – découvrez mes projets, mes compétences et ma passion pour l’innovation digitale.",

        nav_about: "À propos de moi",
        nav_profile: "Profil professionnel",
        nav_projects: "Mes projets",
        nav_contacts: "Coordonnées personnelles",

        about_title: "À propos de moi",
        about_text:
            "Je m'appelle Noahn de LACROIX, j’ai 19 ans et je suis actuellement étudiant en Bachelor Universitaire de Technologie (BUT) Informatique à l’IUT d’Orsay...",

        profile_title: "Profil professionnel",
        tech_skills: "Compétences Techniques",

        qualities_title: "Qualités personnelles",

        degrees_title: "Mes diplomes obtenues",
        degree_but_title: "BUT Informatique – 2éme année",
        degree_but_desc:
            "Actuellement étudiant en Bachelor Universitaire de Technologie (BUT) Informatique à l'IUT d'Orsay – Université Paris-Saclay.",
        degree_but_current: "Année en cours",

        degree_bac_title: "Bac Général - NSI et Mathématiques",
        degree_bac_desc:
            "Obtenu au Lycée Polyvalent Charles Coeffin - Baie-Mahault (97122) - Guadeloupe, France",
        degree_bac_mention: "Mention Bien -- Promotion 2024",

        languages_title: "Langues parlées",

        interests_title: "Centres d'intérêt",

        projects_title: "Mes Projets Professionels et personnels",

        project_portfolio_title: "🔹 Site Web Portfolio",
        project_portfolio_desc:
            "Création d’un portfolio interactif avec HTML, CSS et JavaScript.",

        project_tasks_title: "🔹 Application de gestion de tâches",
        project_tasks_desc:
            "Outil interactif en React.js avec Firebase pour suivre l’avancement de projets personnels ou académiques.",

        project_park_title: "Site web d'un parc d'attractrion virtuelle",
        project_park_desc:
            "Développement d'un site web sur un parc d'attractrion nomée Ice Peak Park.",

        project_game_title: "Jeu vidéo algorithmique",
        project_game_desc: "Développement d'un jeu vidéo en 2D",

        project_ciup_title:
            "Application pour la Cité Internationale Universitaire de Paris",
        project_ciup_desc:
            "Développement d'une application en Java orienté Objet liée à l'UX/UI et GitHub.",

        project_groups_title:
            "Application de création de groupes de TD et de TP",

        contact_title: "Contactez-moi",
        mail_label: "Mail",
        linkedin_label: "Lien vers mon Linkedin",

        contact_button: "Envoyer",

        footer_rights: "All rights reserved to Noahn de LACROIX",
    },

    en: {
        name_title: "Noahn de LACROIX",
        job_title: "Computer Science Student",
        intro_subtitle: "Looking for an internship in computer science",
        scroll_message: "⬇ Scroll down ⬇",

        welcome_text:
            "Welcome to my digital universe – discover my projects, my skills, and my passion for digital innovation.",

        nav_about: "About me",
        nav_profile: "Professional Profile",
        nav_projects: "My Projects",
        nav_contacts: "Contact information",

        about_title: "About me",
        about_text:
            "My name is Noahn de LACROIX, I am 19 years old and currently studying for a Bachelor's degree in Computer Science (BUT) at IUT d'Orsay part of the Paris-Saclay University.",

        profile_title: "Professional Profile",
        tech_skills: "Technical Skills",

        qualities_title: "Personal qualities",

        degrees_title: "My diplomas",
        degree_but_title: "BUT Computer Science – 2nd year",
        degree_but_desc:
            "Currently studying for a Bachelor's degree in Computer Science (BUT) at IUT d'Orsay – Paris-Saclay University.",
        degree_but_current: "Current year",

        degree_bac_title: "General Baccalaureate - NSI and Mathematics",
        degree_bac_desc:
            "Graduated from Lycée Polyvalent Charles Coeffin - Baie-Mahault (97122) - Guadeloupe, France",
        degree_bac_mention: "Honors -- Class of 2024",

        languages_title: "Spoken languages",

        interests_title: "Hobbies & Interests",

        projects_title: "My Professional and Personal Projects",

        project_portfolio_title: "🔹 Portfolio Website",
        project_portfolio_desc:
            "Creation of an interactive portfolio using HTML, CSS and JavaScript.",

        project_tasks_title: "🔹 Task Management Application",
        project_tasks_desc:
            "Interactive React.js tool with Firebase to track project progress.",

        project_park_title: "Virtual Amusement Park Website",
        project_park_desc:
            "Development of a website for a fictional amusement park called Ice Peak Park.",

        project_game_title: "Algorithmic 2D Game",
        project_game_desc: "Development of a 2D video game.",

        project_ciup_title:
            "Application for the International University Campus of Paris",
        project_ciup_desc:
            "Development of an Object-Oriented Java application with a strong UX/UI component.",

        project_groups_title:
            "Application for creating university study groups",

        contact_title: "Contact me",
        mail_label: "Email",
        linkedin_label: "Link to my LinkedIn",

        contact_button: "Send",

        footer_rights: "All rights reserved to Noahn de LACROIX",
    },
};

/* ============================================================
   🔁 FONCTION DE TRADUCTION
============================================================ */

function translatePage(lang) {
    document.documentElement.lang = lang;

    // Traduction des textes
    document.querySelectorAll("[data-translate]").forEach((el) => {
        const key = el.getAttribute("data-translate");
        if (translations[lang]?.[key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Traduction des placeholders
    document.querySelectorAll("[data-translate-placeholder]").forEach((el) => {
        const key = el.getAttribute("data-translate-placeholder");
        if (translations[lang]?.[key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Sauvegarde de la langue
    localStorage.setItem("preferredLanguage", lang);

    // Mise à jour UI des boutons
    document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
        btn.textContent = lang === "fr" ? "EN" : "FR";
    });
}


/* ============================================================
   🔍 RÉCUPÉRATION DE LA LANGUE VIA L’URL
============================================================ */

function getLangFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    return translations.hasOwnProperty(lang) ? lang : null;
}


/* ============================================================
   🚀 AU CHARGEMENT DE LA PAGE
============================================================ */

document.addEventListener("DOMContentLoaded", () => {
    // Langue prioritaire : URL → localStorage → FR
    const finalLang =
        getLangFromUrl() ||
        localStorage.getItem("preferredLanguage") ||
        "fr";

    translatePage(finalLang);

    // Gestion bouton EN / FR
    document.querySelectorAll(".lang-toggle-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const newLang = document.documentElement.lang === "fr" ? "en" : "fr";
            translatePage(newLang);
        });
    });
});