export const portfolioData = {
    sectionTitle: {
        title: "Mon Portfolio",
        subtitle: "Explorez mes œuvres, certifications et les technologies que j'utilise — tout en un seul endroit."
    },

    tabs: {
        projects: [
            {
                id: 1,
                img: "/assets/project1.png",
                title: "Générateur de parcours d’orientation scolaire",
                subtitle: "Recommander des parcours de formation vers un métier cible.",
                desc: "Outil d’orientation qui génère des chemins de formation possibles à partir du profil de l’élève (bac, compétences, contraintes) et du métier visé. Utilisation de données éducatives, d’algorithmes d’alignement et de briques IA (NLP, scoring) pour proposer des parcours personnalisés et expliquer les recommandations.",                demo: "#",
                tags: ["API REST", "NodeJs", "Tailwindcss", "Python", "NLP", "MySQl"]
            },
            {
                id: 2,
                img: "/assets/project2.png",
                title: "Explorateur de parcours académiques – Projet ACORDA",
                subtitle: "Aider les élèves à visualiser et comparer les formations de l’Académie de Toulouse.",
                desc: "Application web de cartographie et de recherche permettant aux lycéens et étudiants de visualiser les offres de formation de l’Académie de Toulouse. Filtres par niveau, filière et localisation, vues détaillées par établissement et parcours d’études. Projet intégré au programme ACORDA (6 M€) pour améliorer l’orientation scolaire et l’insertion professionnelle.",
                demo: "#",
                tags: ["NodeJs", "Express", "D3js", "Tailwindcss", "MySQl"]
            },
            {
                id: 3,
                img: "/assets/yom.png",
                title: "Yom la plateforme pour trouver les meilleurs prestataires dans tous les domaines.",
                subtitle: "Trouvez le bon pro, au bon moment, sans perdre de temps.",
                desc: "YOM-App est une plateforme de mise en relation  entre clients et prestataires qualifiés dans divers domaines : ingénierie, informatique, bâtiment, services et bien plus. Elle permet aux clients de trouver rapidement le bon professionnel et aux prestataires de gagner en visibilité grâce à un profil public.",
                demo: "https://yom-app.com/",
                tags: ["VueJs","Tailwind CSS", "API REST", "NodeJs", "React Native", "MySQL"]
            },
            {
                id: 4,
                img: "/assets/gestions.png",
                title: "Logiciel de gestion des demandes de services",
                subtitle: "Gère efficacement les demandes de services pour l'agglomération de Bourg-en-Bresse.",
                desc: "Ce logiciel de gestion gère les demandes et projets du service SIG, optimisant le suivi et le traitement des requêtes pour l'agglomération de Bourg-en-Bresse.",
                demo: "#",
                tags: ["PHP", "JavaScript", "Tailwind CSS", "PostgreSQL"]
            },
            {
                id: 5,
                img: "/assets/plan.png",
                title: "Plateforme web de géolocalisation interactive",
                subtitle: "Système d'information géographique pour l'agglomération de Bourg-en-Bresse.",
                desc: "Plateforme web de visualisation cartographique interactive permettant de rechercher, filtrer et localiser des équipements sur une carte dynamique, incluant géolocalisation, affichage contextuel et calcul d’itinéraire.",
                demo: "https://plan-inter-actif.vercel.app",
                tags: ["PHP", "JavaScript", "Leaflet Js", "Tailwind CSS", "PostgreSQL"]
            },
            {
                id: 6,
                img: "/assets/formaconfiance.jpg",
                title: "Plateforme de Sensibilisation",
                subtitle: "Comprendre les risques pour mieux se protéger.",
                desc: "Une plateforme éducative interactive dédiée à la sensibilisation aux dangers des réseaux sociaux. Elle propose des quiz pédagogiques, des guides pratiques et des articles explicatifs pour aider les utilisateurs à identifier les risques, adopter de bons comportements numériques et développer un esprit critique. Pensée pour être accessible et engageante",
                demo: "https://formaconfiance.vercel.app/",
                tags: ["VueJs", "Tailwind CSS", "JavaScript"]
            }
        ],

        certificates: [
            {
                id: 1,
                img: "/assets/epsi.png"
            },
            {
                id: 2,
                img: "/assets/lpsig.jpg",
            },
            // {
            //     id: 3,
            //     img: "/assets/cert.jpg",
            // }
        ],

        techStacks: [
            {
                id: 1,
                icon: "bx bxl-react",
                label: "React",
                color: "#61DAFB"
            },
            {
                id: 2,
                icon: "bx bxl-tailwind-css",
                label: "Tailwind CSS",
                color: "#38BDF8"
            },
            {
                id: 3,
                icon: "bx bxl-nodejs",
                label: "Node.js",
                color: "#3C873A"
            },
            {
                id: 4,
                icon: "bx bxl-javascript",
                label: "JavaScript",
                color: "#F7DF1E"
            },
            {
                id: 5,
                icon: "bx bxl-typescript",
                label: "TypeScript",
                color: "#3178C6"
            },
            {
                id: 6,
                icon: "bx bxl-git",
                label: "Git",
                color: "#F05032"
            }
        ]
    }
};
