import profileData from "./profileData.jsx";

const aboutData = {
    title: "À propos",
    subtitle: "Mon parcours et ma façon de travailler",
    image: "/assets/profile.png?v=2",
    infoTitle: "En bref",

    biodata: [
        { label: "Nom", value: profileData.name, icon: "bx bx-id-card" },
        { label: "Entreprise", value: `${profileData.brand} (micro-entreprise)`, icon: "bx bx-buildings" },
        { label: "Basé à", value: `${profileData.city}, Occitanie`, icon: "bx bx-map" },
        { label: "Email", value: profileData.email, icon: "bx bx-envelope" },
        { label: "Tél.", value: profileData.phone, icon: "bx bx-phone" },
        { label: "Formation", value: "Bac+5 Expert en Informatique & SI · Licence SIG", icon: "bx bx-book" },
    ],

    resume: {
        label: "Télécharger mon CV",
        href: profileData.resume,
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `Fondateur d'${profileData.brand}, je suis développeur full stack et consultant SI à ${profileData.city}. Diplômé d'un Bac+5 Expert en Informatique & Systèmes d'Information, d'une Licence SIG et formé à la data science, j'ai plus de 3 ans d'expérience dans des structures publiques et privées.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `Je comprends votre métier avant de coder. Je construis des outils simples à utiliser et, quand vos données peuvent travailler pour vous, j'y intègre de la data et de l'IA : tableaux de bord, automatisations, recommandations. Vous restez propriétaire du code et autonome.`,
            icon: "bx-bulb"
        }
    }
};

export default aboutData;
