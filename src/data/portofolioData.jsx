export const portfolioData = {
    sectionTitle: {
        title: "Mes Réalisations",
        subtitle: "Des projets réels pour des collectivités, l'enseignement supérieur et des entreprises : le problème, ce que j'ai construit, le résultat."
    },

    caseLabels: {
        problem: "Le problème",
        solution: "La solution",
        result: "Le résultat",
    },

    tabs: {
        // Ordered by commercial relevance: mapping and business tools first (strategy §6.3).
        projects: [
            {
                id: 5,
                img: "/assets/plan.png",
                pillar: "Cartographie",
                title: "Plan interactif d'agglomération",
                subtitle: "Grand Bourg Agglomération · territoire de 140 000 habitants",
                problem: "Les habitants devaient pouvoir trouver facilement les équipements publics du territoire.",
                solution: "Une carte web interactive : recherche, filtres, géolocalisation, fiches contextuelles et calcul d'itinéraire.",
                result: "Une plateforme en ligne, accessible à tous, depuis un ordinateur ou un téléphone.",
                demo: "https://plan-inter-actif.vercel.app",
                tags: ["Leaflet", "PHP", "JavaScript", "PostgreSQL", "Tailwind CSS"]
            },
            {
                id: 4,
                img: "/assets/gestions.png",
                pillar: "Outil métier",
                title: "Logiciel de gestion des demandes du service SIG",
                subtitle: "Grand Bourg Agglomération · service SIG",
                problem: "Les demandes et projets du service SIG arrivaient par des canaux dispersés, difficiles à suivre.",
                solution: "Un outil de gestion interne sur mesure : saisie, affectation, suivi d'avancement et historique des demandes.",
                result: "Un suivi centralisé : chaque demande est tracée, de sa réception à son traitement.",
                demo: "#",
                tags: ["PHP", "JavaScript", "PostgreSQL", "Tailwind CSS"]
            },
            {
                id: 2,
                img: "/assets/project2.png",
                pillar: "Application web",
                title: "Explorateur de parcours académiques ACORDA",
                subtitle: "COMUE de Toulouse · programme national d'environ 6 M€",
                problem: "Lycéens et étudiants peinaient à visualiser et comparer l'offre de formation de l'Académie de Toulouse.",
                solution: "Une application de recherche et de cartographie : filtres par niveau, filière et lieu, fiches établissement et parcours.",
                result: "Un outil intégré au programme ACORDA pour améliorer l'orientation et l'insertion professionnelle.",
                demo: "#",
                tags: ["Node.js", "Express", "D3.js", "MySQL", "Tailwind CSS"]
            },
            {
                id: 1,
                img: "/assets/project1.png",
                pillar: "Data & IA",
                title: "Générateur de parcours d'orientation",
                subtitle: "Recommander des formations vers un métier cible",
                problem: "Passer d'un profil d'élève (bac, compétences, contraintes) à un métier visé, sans se perdre dans l'offre de formation.",
                solution: "Un moteur de recommandation basé sur les données éducatives, avec des briques NLP et un scoring des parcours.",
                result: "Des parcours personnalisés, accompagnés d'une explication de chaque recommandation.",
                demo: "#",
                tags: ["Python", "NLP", "Node.js", "API REST", "MySQL"]
            },
            {
                id: 3,
                img: "/assets/yom.png",
                pillar: "MVP / plateforme",
                title: "YOM, plateforme de mise en relation",
                subtitle: "Trouver le bon prestataire, au bon moment",
                problem: "Les clients cherchent un professionnel qualifié, les prestataires manquent de visibilité.",
                solution: "Une plateforme web et mobile : profils publics de prestataires, recherche par domaine, mise en relation.",
                result: "Une plateforme en production, sur le web et sur mobile.",
                demo: "https://yom-app.com/",
                tags: ["Vue.js", "React Native", "Node.js", "API REST", "MySQL"]
            },
            {
                id: 6,
                img: "/assets/formaconfiance.jpg",
                pillar: "Site & contenu",
                title: "Plateforme de sensibilisation aux réseaux sociaux",
                subtitle: "Comprendre les risques pour mieux se protéger",
                problem: "Rendre accessibles et engageants les bons réflexes face aux dangers des réseaux sociaux.",
                solution: "Une plateforme éducative : quiz pédagogiques, guides pratiques et articles explicatifs.",
                result: "Une plateforme en ligne, pensée pour être simple à prendre en main.",
                demo: "https://formaconfiance.vercel.app/",
                tags: ["Vue.js", "JavaScript", "Tailwind CSS"]
            }
        ],

        certificates: [
            { id: 1, img: "/assets/epsi.png" },
            { id: 2, img: "/assets/lpsig.jpg" },
        ],

        // Only technologies already used in real projects (strategy §10.5).
        techStacks: [
            {
                title: "Développement web & mobile",
                items: [
                    { icon: "bx bxl-react", label: "React", color: "#61DAFB" },
                    { icon: "bx bxl-vuejs", label: "Vue.js", color: "#42B883" },
                    { icon: "bx bxl-nodejs", label: "Node.js", color: "#3C873A" },
                    { icon: "bx bx-server", label: "Express", color: "#9CA3AF" },
                    { icon: "bx bx-layer", label: "Laravel", color: "#FF2D20" },
                    { icon: "bx bxl-javascript", label: "JavaScript", color: "#F7DF1E" },
                    { icon: "bx bxl-typescript", label: "TypeScript", color: "#3178C6" },
                    { icon: "bx bxl-tailwind-css", label: "Tailwind CSS", color: "#38BDF8" },
                ]
            },
            {
                title: "Données & cartographie",
                items: [
                    { icon: "bx bxl-postgresql", label: "PostgreSQL", color: "#4169E1" },
                    { icon: "bx bx-world", label: "PostGIS", color: "#5A8FCB" },
                    { icon: "bx bx-data", label: "MySQL", color: "#4479A1" },
                    { icon: "bx bx-map-alt", label: "Leaflet", color: "#199900" },
                ]
            },
            {
                title: "Data science & IA",
                items: [
                    { icon: "bx bxl-python", label: "Python", color: "#3776AB" },
                    { icon: "bx bx-table", label: "pandas", color: "#E70488" },
                    { icon: "bx bx-line-chart", label: "scikit-learn", color: "#F7931E" },
                    { icon: "bx bx-text", label: "spaCy", color: "#09A3D5" },
                    { icon: "bx bx-chip", label: "TensorFlow", color: "#FF6F00" },
                ]
            },
            {
                title: "Outils & déploiement",
                items: [
                    { icon: "bx bxl-docker", label: "Docker", color: "#2496ED" },
                    { icon: "bx bxl-git", label: "Git", color: "#F05032" },
                ]
            }
        ]
    }
};
