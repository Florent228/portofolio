export const portfolioData = {
    sectionTitle: {
        title: "Mon Portfolio",
        subtitle: "Explorez mes œuvres, certifications et les technologies que j'utilise — tout en un seul endroit."
    },

    tabs: {
        projects: [
            {
                id: 1,
                img: "/assets/project.png",
                title: "Application de Suivi Financier",
                subtitle: "Suivez vos finances avec clarté et contrôle.",
                desc: "Money Tracker est une application web moderne qui aide les utilisateurs à surveiller leurs revenus et dépenses sans effort. Dotée d'une interface minimaliste, d'un basculeur de mode sombre et d'un tableau de bord intuitif, elle est conçue pour encourager la sensibilisation financière des utilisateurs quotidiens. Les données peuvent être synchronisées via Supabase ou stockées localement.",
                demo: "#",
                tags: ["React", "Tailwind CSS", "Supabase", "Vite"]
            },
            {
                id: 2,
                img: "/assets/project.png",
                title: "Assistant Chatbot",
                subtitle: "Un chatbot qui évolue à chaque conversation.",
                desc: "Ce chatbot est un assistant basé sur React qui apprend des entrées utilisateur et stocke les connaissances en utilisant un backend simple Express + JSON. Il est conçu pour devenir plus intelligent au fil du temps et simuler un dialogue naturel et humain. Idéal pour l'entraînement IA de base ou les assistants personnalisés.",
                demo: "#",
                tags: ["React", "Express", "Node.js", "JSON"]
            },
            {
                id: 3,
                img: "/assets/project.png",
                title: "Site Web Portfolio Personnel",
                subtitle: "Votre travail mérite une belle vitrine.",
                desc: "Un portfolio personnel élégant et responsive construit avec Vite et Tailwind CSS. Ce site présente des sections de projets catégorisées, des certificats et une pile technologique dynamique. Optimisé pour les expériences de bureau et mobiles, il reflète un branding professionnel avec un code propre.",
                demo: "#",
                tags: ["Vite", "React", "Tailwind CSS", "JavaScript"]
            }
        ],

        certificates: [
            {
                id: 1,
                img: "/assets/cert.jpg"
            },
            {
                id: 2,
                img: "/assets/cert.jpg",
            },
            {
                id: 3,
                img: "/assets/cert.jpg",
            }
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
