export const portfolioData = {
    sectionTitle: {
        title: "Mes Réalisations",
        subtitle: "Quelques projets menés pour des collectivités, l'enseignement supérieur et des entreprises."
    },

    tabs: {
        projects: [
            {
                id: 5,
                img: "/assets/plan.png",
                pillar: "Cartographie",
                title: "Plan interactif d'agglomération",
                subtitle: "Grand Bourg Agglomération",
                summary: "Carte web interactive pour trouver les équipements publics d'un territoire de 140 000 habitants.",
                demo: "https://plan-inter-actif.vercel.app",
                tags: ["Leaflet", "PHP", "PostgreSQL"]
            },
            {
                id: 4,
                img: "/assets/gestions.png",
                pillar: "Outil métier",
                title: "Gestion des demandes du service SIG",
                subtitle: "Grand Bourg Agglomération",
                summary: "Outil interne sur mesure pour suivre les demandes et projets du service SIG.",
                demo: "#",
                tags: ["PHP", "JavaScript", "PostgreSQL"]
            },
            {
                id: 2,
                img: "/assets/project2.png",
                pillar: "Application web",
                title: "Explorateur de parcours ACORDA",
                subtitle: "COMUE de Toulouse",
                summary: "Recherche et cartographie de l'offre de formation de l'Académie de Toulouse.",
                demo: "#",
                tags: ["Node.js", "D3.js", "MySQL"]
            },
            {
                id: 1,
                img: "/assets/project1.png",
                pillar: "Data & IA",
                title: "Générateur de parcours d'orientation",
                subtitle: "Recommandation personnalisée",
                summary: "Des parcours de formation recommandés vers un métier cible, grâce au NLP et au scoring.",
                demo: "#",
                tags: ["Python", "NLP", "Node.js"]
            },
            {
                id: 3,
                img: "/assets/yom.png",
                pillar: "Plateforme",
                title: "YOM",
                subtitle: "Plateforme de mise en relation",
                summary: "Application web et mobile qui connecte clients et prestataires qualifiés.",
                demo: "https://yom-app.com/",
                tags: ["Vue.js", "React Native", "Node.js"]
            },
            {
                id: 6,
                img: "/assets/formaconfiance.jpg",
                pillar: "Site web",
                title: "Formaconfiance",
                subtitle: "Plateforme de sensibilisation",
                summary: "Quiz, guides et articles pour adopter les bons réflexes sur les réseaux sociaux.",
                demo: "https://formaconfiance.vercel.app/",
                tags: ["Vue.js", "Tailwind CSS"]
            }
        ],

        certificates: [
            { id: 1, img: "/assets/epsi.png" },
            { id: 2, img: "/assets/lpsig.jpg" },
        ],

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
