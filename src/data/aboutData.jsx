const aboutData = {
    title: "À Propos de Moi",
    subtitle: "Découvrez mon parcours, mes passions et l'histoire derrière mon travail",
    image: "/assets/profile.jpg",

    biodata: [
        { label: "Nom", value: "Hizkia Siahaan", icon: "bx bx-id-card" },
        { label: "Date de Naissance", value: "02 Décembre 2004", icon: "bx bx-calendar" },
        { label: "Lieu de Naissance", value: "Medan, Indonésie", icon: "bx bx-map" },
        { label: "Email", value: "siahaanhizkia548@gmail.com", icon: "bx bx-envelope" },
        { label: "Téléphone", value: "+62 895 1014 4492", icon: "bx bx-phone" },
        { label: "Formation", value: "Université Sumatera Utara", icon: "bx bx-book" },
        { label: "Moyenne", value: "3.55 / 4.00", icon: "bx bx-award" },
    ],

    resume: {
        label: "Télécharger mon CV",
        href: null,
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `Je suis un développeur frontend qui crée des interfaces responsives, interactives et épurées. Avec une formation en génie informatique, j'allie sens du design et logique technique.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `Je me concentre sur le design centré utilisateur, la performance et l'accessibilité, évoluant constamment avec les technologies modernes pour offrir des expériences numériques fluides.`,
            icon: "bx-bulb"
        }
    }


};

export default aboutData;
