// Offers and prices come from the AKAF Solutions commercial strategy (business plan, year 1).
const servicesData = {
    sectionTitle: {
        title: "Mes Services",
        subtitle: "Trois façons de travailler ensemble, du premier conseil à la maintenance. Prix indicatifs « à partir de », chaque projet fait l'objet d'un devis écrit.",
    },

    pillars: [
        {
            id: "dev",
            number: "01",
            icon: "bx bx-code-block",
            title: "Développement sur mesure",
            promise: "Un site, une application ou un logiciel métier qui fonctionne et que vous savez utiliser.",
            offers: [
                { name: "Site Essentiel", detail: "Site vitrine 5 à 10 pages, responsive, formulaire, SEO de base", price: "dès 1 200 €", delay: "2 à 3 sem." },
                { name: "Site Sur-mesure", detail: "Espace client, prise de rendez-vous, catalogue, back-office", price: "dès 1 800 €", delay: "3 à 5 sem." },
                { name: "Outil métier", detail: "Gestion clients, devis, stock, interventions : la fin des fichiers Excel", price: "dès 2 400 €", delay: "4 à 8 sem." },
                { name: "MVP / plateforme", detail: "Application web ou mobile, mise en relation, paiement en ligne", price: "dès 6 000 €", delay: "2 à 4 mois" },
                { name: "Renfort technique", detail: "Backend, frontend, API, en marque blanche pour agences", price: "300 € / jour", delay: "selon mission" },
            ],
        },
        {
            id: "consulting",
            number: "02",
            icon: "bx bx-bulb",
            title: "Conseil & accompagnement SI",
            promise: "Une décision éclairée avant d'investir : besoin clarifié, budget chiffré, bon choix de solution.",
            offers: [
                { name: "Diagnostic numérique", detail: "Entretien + analyse : 3 pistes priorisées et chiffrées", price: "300 €", delay: "1 sem." },
                { name: "Cahier des charges", detail: "Ateliers, rédaction du besoin, aide à la consultation", price: "dès 900 €", delay: "2 à 3 sem." },
                { name: "Audit applicatif", detail: "Sécurité, performance, dette technique, recommandations", price: "dès 600 €", delay: "1 à 2 sem." },
                { name: "Choix d'une solution", detail: "Logiciel du marché ou sur mesure : comparaison argumentée", price: "300 € / jour", delay: "selon besoin" },
            ],
        },
        {
            id: "maintenance",
            number: "03",
            icon: "bx bx-shield-quarter",
            title: "Maintenance & évolution",
            promise: "La tranquillité : votre site ou application est surveillé, sauvegardé et corrigé.",
            offers: [
                { name: "Sérénité Site", detail: "Mises à jour, sauvegardes, surveillance, 1 h de modifications", price: "dès 150 € / mois", delay: "12 mois" },
                { name: "Sérénité Application", detail: "Correctifs, sécurité, support e-mail, évolutions incluses", price: "dès 300 € / mois", delay: "12 mois" },
                { name: "Reprise d'existant", detail: "Votre prestataire a disparu ? Je reprends, sécurise et documente", price: "audit + formule", delay: "—" },
            ],
        },
    ],

    diagnostic: {
        eyebrow: "Le point de départ idéal",
        title: "Diagnostic numérique : 300 € HT, déduits si un projet suit",
        text: "En une semaine, vous savez quoi faire, dans quel ordre et pour quel budget, avant d'engager quoi que ce soit. Un entretien, une analyse de vos outils actuels, et trois pistes concrètes, priorisées et chiffrées.",
        cta: { label: "Réserver un diagnostic", href: "#contact" },
    },

    dataAi: {
        title: "Data & IA, intégrées à vos outils",
        subtitle: "Formé à la data science, j'ajoute ces briques quand elles vous font gagner du temps, jamais pour le principe.",
        items: [
            { icon: "bx bx-bar-chart-square", title: "Tableaux de bord", text: "Pilotez votre activité à partir de vos propres données, sans ressaisie." },
            { icon: "bx bx-git-branch", title: "Automatisations", text: "Formulaire, CRM, devis : l'information n'est saisie qu'une seule fois." },
            { icon: "bx bx-search-alt-2", title: "Recherche intelligente", text: "Un assistant basé sur l'IA pour retrouver l'information dans un espace client." },
            { icon: "bx bx-brain", title: "Recommandation & scoring", text: "Proposer le bon choix à chaque utilisateur, avec des résultats expliqués." },
        ],
    },

    mapping: {
        icon: "bx bx-map-alt",
        title: "Spécialité cartographie (SIG)",
        text: "Licence SIG et deux expériences en collectivité : applications cartographiques, cartes interactives d'équipements, gestion de patrimoine géolocalisé (réseaux, voirie, cimetières). Pour collectivités, bureaux d'études, géomètres et entreprises de travaux.",
    },

    legalNote: "Prix HT. TVA non applicable, art. 293 B du CGI. Acompte à la signature, deux allers-retours de corrections inclus, vous restez propriétaire du code et du nom de domaine.",
};

export default servicesData;
