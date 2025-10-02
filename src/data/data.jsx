export const navbarItem = [
    {
        "page": "Accueil",
        "link": "about",
        "title": { "fr": "À propos", "en": "About" }
    },
    {
         "page": "Accueil",
        "link": "skills",
        "title": { "fr": "Compétences", "en": "Skills" }
    },
    {
         "page": "Accueil",
        "link": "projects",
        "title": { "fr": "Projets", "en": "Projects" }
    },
    {
         "page": "Accueil",
        "link": "formation",
        "title": { "fr": "Formation", "en": "Education" }
    },
    {
        "page": "Services",
        "link": "services",
        "title": { "fr": "Services", "en": "Services" }
    },
    {
        "page": "Services",
        "link": "contact",
        "title": { "fr": "Contact", "en": "Contact" }
    }
];

export const aboutData = {
  "description": {
    "fr": "Après 11 ans en affaires réglementaires, où j'ai acquis de la rigueur et une expérience en gestion de projets, je me suis reconvertie dans le développement web via la formation Intégrateur Web OpenClassRooms. J'ai réalisé de nombreux projets en HTML, CSS, JavaScript, Sass, PHP et React, dont le site d'un autoentrepreneur, et plusieurs applications personnelles mettant en pratique l'accessibilité, le responsive design et les bonnes pratiques front-end.",
    "en": "Currently retraining in web development for the past two years, I discovered a late but strong passion for creating ergonomic and accessible web interfaces. <br /> After 11 years in regulatory affairs, where I gained rigor and project management experience, I transitioned into web development through the OpenClassRooms Front-End Integration program. I have completed numerous projects in HTML, CSS, JavaScript, Sass, PHP, and React, including a professional website for a freelancer, as well as several personal applications applying accessibility, responsive design, and front-end best practices."
  },
  "opening": {
    "fr": "Mon approche combine rigueur et créativité : je m'assure que chaque projet soit performant, maintenable et agréable à utiliser pour chaque utilisateur. Je cherche aujourd'hui à rejoindre une équipe front-end dynamique pour créer des solutions web innovantes tout en continuant à développer mes compétences techniques et UX.",
    "en": "My approach combines rigor and creativity: I make sure every project is high-performing, maintainable, and enjoyable for every user. I am now looking to join a dynamic front-end team to build innovative web solutions while continuing to strengthen my technical and UX skills."
  }
};

export const skillsData = [
    {
        "title": "Javascript",
        "logo": "/assets/Icone/Javascript.webp"
    },
    {
        "title": "CSS",
        "logo": "/assets/Icone/CSS.webp"
    },
    {
        "title": "React",
        "logo": "/assets/Icone/React.webp"
    },
    {
        "title": "Github",
        "logo": "/assets/Icone/Github.webp"
    },
    {
        "title": "Redux",
        "logo": "/assets/Icone/Redux.webp"
    },
    {
        "title": "HTML",
        "logo": "/assets/Icone/HTML.webp"
    },
    {
        "title": "SASS",
        "logo": "/assets/Icone/Sass.webp"
    },
    {
        "title": "Vue.JS",
        "logo": "/assets/Icone/VueJS.webp"
    },
    {
        "title": "Agile",
        "logo": "/assets/Icone/Agile.webp"
    }
]

export const projectsData = [
  {
    "id": "1",
    "title": { "fr": "ArgentBank - Application bancaire", "en": "ArgentBank - Banking App" },
    "image": "/assets/Image/ArgentBank.webp",
    "description": {
      "fr": "Argent Bank est une nouvelle banque en ligne qui veut mettre en place un nouveau système d'authentification des utilisateurs grâce à une application web React et à l'implémentation de Redux pour le state management. Création de l'application web complète et responsive avec React.",
      "en": "Argent Bank is a new online bank aiming to implement a new user authentication system via a React web application and Redux for state management. Complete and responsive web application created with React."
    },
    "tags": {
      "fr": ["React", "React-Router", "Redux", "CSS", "Swagger"],
      "en": ["React", "React-Router", "Redux", "CSS", "Swagger"]
    },
    "github": "https://github.com/JoelleTP/OCR_Projet10_ArgentBank-Frontend"
  },
  {
    "id": "2",
    "title": { "fr": "Kasa", "en": "Kasa" },
    "image": "/assets/Image/Kasa.webp",
    "description": {
      "fr": "Création d'une application web de location immobilière avec React et React Router en suivant les maquettes Figma.",
      "en": "Creation of a real estate rental web application using React and React Router following Figma designs."
    },
    "tags": {
      "fr": ["React", "React-Router", "SASS"],
      "en": ["React", "React-Router", "SASS"]
    },
    "github": "https://github.com/JoelleTP/OCR_Projet7_Kasa",
    "website": "https://ocr-projet7-kasa-1t5hbrer7-joelle-thomas-pfliegers-projects.vercel.app"
  },
  {
    "id": "3",
    "title": { "fr": "Digi-Plume", "en": "Digi-Plume" },
    "image": "/assets/Image/Digi-plume.webp",
    "description": {
      "fr": "Création d'un site interne responsive avec un formulaire de contact pour un auto-entrepreneur écrivain public.",
      "en": "Creation of a responsive internal website with a contact form for a freelance public writer."
    },
    "tags": {
      "fr": ["HTML", "CSS", "JavaScript", "PHP"],
      "en": ["HTML", "CSS", "JavaScript", "PHP"]
    },
    "website": "https://digi-plume.fr"
  },
  {
    "id": "4",
    "title": { "fr": "Portfolio Sophie-Bluel", "en": "Sophie-Bluel Portfolio" },
    "image": "/assets/Image/sophie-bluel.webp",
    "description": {
      "fr": "Création du site portfolio d'une architecte d'intérieur : page de présentation des travaux, page de connexion de l'administrateur du site, modale permettant d'ajouter ou de supprimer de nouveaux travaux.",
      "en": "Creation of an interior architect's portfolio website: work showcase page, admin login page, modal for adding or deleting new projects."
    },
    "tags": {
      "fr": ["JavaScript", "Appel API", "Node.js"],
      "en": ["JavaScript", "API Calls", "Node.js"]
    },
    "github": "https://github.com/JoelleTP/OCR_Projet6_sophie-bluel"
  },
  {
    "id": "5",
    "title": { "fr": "Ohmyfood", "en": "Ohmyfood" },
    "image": "/assets/Image/ohmyfood.webp",
    "description": {
      "fr": "Création d'un site “mobile first” qui répertorie 4 menus de restaurants gastronomiques disponible à partir d'une page d'accueil. Mise en place des animations du site.",
      "en": "Creation of a mobile-first website listing 4 gourmet restaurant menus accessible from a homepage. Implementation of site animations."
    },
    "tags": {
      "fr": ["HTML", "SASS"],
      "en": ["HTML", "SASS"]
    },
    "github": "https://github.com/JoelleTP/OCR_Project4_ohmyfood",
    "website": "https://joelletp.github.io/OCR_Project4_ohmyfood/"
  },
  {
    "id": "6",
    "title": { "fr": "724events", "en": "724events" },
    "image": "/assets/Image/724events.webp",
    "description": {
      "fr": "Débuggage et finalisation du site d'une agence événementiel, rédaction d'un cahier de recette et réalisation de tests unitaires et fonctionnels.",
      "en": "Debugging and finalization of an event agency's website, writing a test plan, and performing unit and functional testing."
    },
    "tags": {
      "fr": ["React", "Jest", "Yarn", "Node.js"],
      "en": ["React", "Jest", "Yarn", "Node.js"]
    },
    "github": "https://github.com/JoelleTP/OCR_Projet9_724events",
    "website": "https://724events-git-main-joelle-thomas-pfliegers-projects.vercel.app"
  },
  {
    "id": "7",
    "title": { "fr": "Qwenta", "en": "Qwenta" },
    "image": "/assets/Image/Qwenta_notion.webp",
    "description": {
      "fr": "Planification du développement du site Menu Maker de Qwenta, site permettant aux restaurateurs d'afficher et de mettre en page leurs menus facilement, en quelques clics. Mise en place des spécifications techniques, de la veille technologique et du tableau Kanban.",
      "en": "Planning the development of Qwenta's Menu Maker site, allowing restaurant owners to display and format their menus easily in a few clicks. Implementation of technical specifications, tech watch, and Kanban board."
    },
    "tags": {
      "fr": ["Notion", "Gestion de projets / Agile", "Veille technologique"],
      "en": ["Notion", "Project Management / Agile", "Tech Watch"]
    }
  },
  {
    "id": "8",
    "title": { "fr": "Booki", "en": "Booki" },
    "image": "/assets/Image/Booki.webp",
    "description": {
      "fr": "Création de la page d'accueil d'une agence de voyage avec HTML et CSS.",
      "en": "Creation of a travel agency homepage using HTML and CSS."
    },
    "tags": {
      "fr": ["HTML", "CSS", "Figma"],
      "en": ["HTML", "CSS", "Figma"]
    },
    "github": "",
    "website": ""
  },
  {
    "id": "9",
    "title": { "fr": "Nina Carducci", "en": "Nina Carducci" },
    "image": "/assets/Image/NinaCarducci.webp",
    "description": {
      "fr": "Ce projet concerne le portfolio en ligne de Nina Carducci, une photographe basée à Bordeaux. Le site initial a été amélioré pour assurer une meilleure accessibilité, des performances optimisées et un bon référencement SEO.",
      "en": "This project concerns Nina Carducci's online portfolio, a photographer based in Bordeaux. The initial site was improved to ensure better accessibility, optimized performance, and good SEO."
    },
    "tags": {
      "fr": ["SEO", "Accessibilité", "HTML", "CSS"],
      "en": ["SEO", "Accessibility", "HTML", "CSS"]
    },
    "github": "https://github.com/JoelleTP/OCR_Projet8_ninacarducci",
    "website": "https://joelletp.github.io/OCR_Projet8_ninacarducci"
  }
];

export const formationData = [
  {
    "year": "2025",
    "title": { 
      "fr": "Formation Intégrateur web Openclassrooms", 
      "en": "OpenClassrooms Web Integrator Training" 
    },
    "description": { 
      "fr": "Certification professionnelle Développeur Informatique RNCP de niveau 5 (bac +2). Réalisation de 12 projets professionnalisants. Maîtrise de HTML, CSS, SASS, JavaScript, React & Redux, les appels API, Visual Studio Code, le responsive design, Git & GitHub.", 
      "en": "Professional certification in Computer Development (RNCP Level 5, equivalent to a 2-year post-secondary degree). Completed 12 professional projects. Proficient in HTML, CSS, SASS, JavaScript, React & Redux, API calls, Visual Studio Code, responsive design, Git & GitHub." 
    }
  },
  {
    "year": "2024",
    "title": { 
      "fr": "Reconversion développeur web", 
      "en": "Transition to Web Development" 
    },
    "description": { 
      "fr": "Autoformation pendant 1 an, création d'un site web pour un auto-entrepreneur, utilisation de html/css, javascript et php", 
      "en": "Self-taught over 1 year, created a website for a freelance client using HTML/CSS, JavaScript and PHP" 
    }
  },
  {
    "year": "↕",
    "title": { 
      "fr": "Gestion de projets en entreprise", 
      "en": "Project Management in a Company" 
    },
    "description": { 
      "fr": "11 années d'expérience en entreprise en tant que chargée d'affaires réglementaires, travail en équipe, gestion des changements, gestion des spécifications avec les clients, gestion de projets", 
      "en": "11 years of professional experience as a Regulatory Affairs Manager: teamwork, change management, client specifications, project management" 
    }
  },
  {
    "year": "2012",
    "title": { 
      "fr": "Formation d'ingénieur biomédical, ISIFC, Besançon", 
      "en": "Biomedical Engineering Training, ISIFC, Besançon" 
    },
    "description": { 
      "fr": "Obtention du diplôme d'ingénieur après 3 ans de formation. Apprentissage des langages de programmation (C++ et Java), html et CSS, développement d'un puissance 4 et d'un programme pour un stimulateur musculaire", 
      "en": "Earning of an engineering degree after 3 years of study. Learning of programming languages (C++ and Java), HTML and CSS, and developing of a Connect Four game and a program for a muscle stimulator." 
    }
  }
];

export const mesServicesData = [
  {
    "picture": "/assets/Image/Creation.webp",
    "alt": { 
      "fr": "symbole de créativité", 
      "en": "creativity symbol" 
    },
    "title": { 
      "fr": "Création de site web", 
      "en": "Website Creation" 
    },
    "description": { 
      "fr": "Création d'un site web de A à Z et discussion avec le client pour la mise en place du design", 
      "en": "Creation of a website from start to finish, including discussions with the client to implement the design" 
    }
  },
  {
    "picture": "/assets/Image/SEO.webp",
    "alt": { 
      "fr": "symbole de SEO", 
      "en": "SEO symbol" 
    },
    "title": { 
      "fr": "Accessibilité / SEO / Eco-conception", 
      "en": "Accessibility / SEO / Eco-design" 
    },
    "description": { 
      "fr": "Amélioration de l'accessibilité d'un site web existant pour les personnes handicapées ou amélioration de la visibilité du site sur le réseau", 
      "en": "Improvement of an existing website’s accessibility for people with disabilities or enhancement of the site's visibility online" 
    }
  },
  {
    "picture": "/assets/Image/Debogage.webp",
    "alt": { 
      "fr": "symbole de réparation", 
      "en": "repair symbol" 
    },
    "title": { 
      "fr": "Débogage de site web", 
      "en": "Website Debugging" 
    },
    "description": { 
      "fr": "Revue / reprise d'un site web existant pour réparer les bugs", 
      "en": "Review / overhaul of an existing website to fix bugs" 
    }
  }
];

