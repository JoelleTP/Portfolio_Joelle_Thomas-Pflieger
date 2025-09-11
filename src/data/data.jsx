export const navbarItem = [
        {
            "page": "Accueil",
            "link":"about", 
            "title" : "À propos"
        },
        {   "page": "Accueil",
            "link":"skills", 
            "title" : "Compétences"
        },
        {
            "page": "Accueil",
            "link":"projects", 
            "title" : "Projets"
        },
        {
            "page": "Accueil",
            "link":"formation", 
            "title" : "Formation"
        },
        {
            "page": "services",
            "link":"services", 
            "title" : "Services"
        },
        {   "page": "services",
            "link":"contact", 
            "title" : "Contact"
        }
    ]

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
        "id" : "1",
        "title": "ArgentBank - Application bancaire",
        "image": "/assets/Image/ArgentBank.webp",
        "description": "Argent Bank est une nouvelle banque en ligne qui veut mettre en place un nouveau système d'authentification des utilisateurs grâce à une application web React et à l'implémentation de Redux pour le state management. Création de l'application web complète et responsive avec React",
        "tags": [
			"React",
            "React-Router",
			"Redux",
			"CSS", 
            "Swagger"
		],
        "github": "https://github.com/JoelleTP/OCR_Projet10_ArgentBank-Frontend"
    },
    {
        "id" : "2",
        "title": "Kasa",
        "image": "/assets/Image/Kasa.webp",
        "description": "Création d'une application web de location immobilière avec React et React Router en suivant les maquettes Figma",
        "tags": [
			"React",
			"React-Router",
			"SASS"
		],
        "github": "https://github.com/JoelleTP/OCR_Projet7_Kasa",
        "website": "https://ocr-projet7-kasa-1t5hbrer7-joelle-thomas-pfliegers-projects.vercel.app"
    },
    {
        "id" : "3",
        "title": "Digi-Plume",
        "image": "/assets/Image/Digi-plume.webp",
        "description": "Création d'un site interne responsive avec un formulaire de contact pour un auto-entrepreneur écrivain public",
        "tags": [
			"HTML",
			"CSS",
			"JavaScript", 
            "PHP"
		],
        "website": "https://digi-plume.fr"
    },
    {
        "id" : "4",
        "title": "Portfolio Sophie-Bluel",
        "image": "/assets/Image/sophie-bluel.webp",
        "description": "Création du site portfolio d'une architecte d'intérieur : page de présentation des travaux, page de connexion de l'administrateur du site, modale permettant d'ajouter ou de supprimer de nouveaux travaux",
        "tags": [
			"JavaScript",
			"Appel API", 
            "Node.js"
		],
        "github": "https://github.com/JoelleTP/OCR_Projet6_sophie-bluel"
    },
    {
        "id" : "5",
        "title": "Ohmyfood",
        "image": "/assets/Image/ohmyfood.webp",
        "description": "Création d'un site “mobile first” qui répertorie 4 menus de restaurants gastronomiques disponible à partir d'une page d'accueil. Mise en place des animations du site",
        "tags": [
			"HTML",
			"SASS"
		],
        "github": "https://github.com/JoelleTP/OCR_Project4_ohmyfood",
        "website": "https://joelletp.github.io/OCR_Project4_ohmyfood/"
    },
    {
        "id" : "6",
        "title": "724events",
        "image": "/assets/Image/724events.webp",
        "description": "Débuggage et finalisation du site d'une agence événementiel, rédaction d'un cahier de recette et réaliation de tests unitaires et fonctionnels",
        "tags": [
			"React",
            "Jest", 
            "Yarn",
            "Node.js"
		],
        "github": "https://github.com/JoelleTP/OCR_Projet9_724events",
        "website": "https://724events-git-main-joelle-thomas-pfliegers-projects.vercel.app"
    },
    {
        "id" : "7",
        "title": "Qwenta",
        "image": "/assets/Image/Qwenta_notion.webp",
        "description": "Planification du développement du site Menu Maker de Qwenta, site permettant aux restaurateurs d'afficher et de mettre en page leurs menus facilement, en quelques clics. Mise en place des spécifications techniques, de la veille technologique et du tableau Kanban",
        "tags": [
			"Notion",
			"Gestion de projets / Agile", 
            "Veille technologique"
		]
    },
    {
        "id" : "8",
        "title": "Booki",
        "image": "/assets/Image/Booki.webp",
        "description": "Création de la page d'accueil d'une agence de voyage avec HTML et CSS",
        "tags": [
			"HTML",
			"CSS", 
            "Figma"
		],
        "github": "",
        "website": ""
    },
    {
        "id" : "9",
        "title": "Nina Carducci",
        "image": "/assets/Image/NinaCarducci.webp",
        "description": "Ce projet concerne le portfolio en ligne de Nina Carducci, une photographe basée à Bordeaux. Le site initial a été amélioré pour assurer une meilleure accessibilité, des performances optimisées et un bon référencement SEO.",
        "tags": [
			"SEO",
			"Accessibilité",
			"HTML",
            "CSS"
		],
        "github": "https://github.com/JoelleTP/OCR_Projet8_ninacarducci",
        "website": "https://joelletp.github.io/OCR_Projet8_ninacarducci"
    }
]

export const formationData = [
    {
       "year" : "2025",
       "title" : "Formation Intégrateur web Openclassrooms",
       "description" : "Certification professionnelle Développeur Informatique" 
    },
    {
       "year" : "2024",
       "title" : "Reconversion développeur web",
       "description" : "Autoformation pendant 1 an, création d'un site web pour un auto-entrepreneur, utilisation de html/css, javascript et php" 
    },
    {
       "year" : "↕",
       "title" : "Gestion de projets en entreprise",
       "description" : "12 années d'expérience en entreprise en tant que chargée d'affaires réglementaires, travail en équipe, gestion des changements, gestion des spécifications avec les clients, gestion de projets" 
    },
    {
       "year" : "2012",
       "title" : "Formation ingénieur biomédical",
       "description" : "Langages de programmation (C++ et Java), html et CSS, développement d'un programme pour un stimulateur" 
    }
]

export const mesServicesData = [
    {
        "picture" : "/assets/Image/Creation.webp",
        "alt" : "symbole de créativité",
        "title" : "Création de site web",
        "description" : "Création d'un site web de A à Z et discussion avec le client pour la mise en place du design"
    },
    {
        "picture" : "/assets/Image/SEO.webp",
        "alt" : "symbole de SEO",
        "title" : "Accessibilité / SEO / Eco-conception",
        "description" : "Amélioration de l'accessibilité d'un site web existant pour les personnes handicapées ou amélioration de la visibilité du site sur le réseau"
    },
    {
        "picture" : "/assets/Image/Debogage.webp",
        "alt" : "symbole de réparation",
        "title" : "Débogage de site web",
        "description" : "Revue / reprise d'un site web existant pour réparer les bugs"
    }
]

