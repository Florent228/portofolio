const aboutData = {
    title: "À propos de moi",
    subtitle: "Découvrez mon parcours, mes passions",
    image: "/assets/profile.png?v=2",

    biodata: [
        { label: "Nom", value: "Florent ATCHEAKOU", icon: "bx bx-id-card" },
        // { label: "Date de Naissance", value: "02 Décembre 2004", icon: "bx bx-calendar" },
        // { label: "Lieu de Naissance", value: "Medan, Indonésie", icon: "bx bx-map" },
        { label: "Email", value: "atcheakouf@gmail.com", icon: "bx bx-envelope" },
        { label: "Tel", value: "+33 6 36 22 17 70", icon: "bx bx-phone" },
        { label: "BAC +5", value: "Expert en Informatique & Systèmes d’Information", icon: "bx bx-book" },
        { label: "Moyenne", value: "15.16 / 20", icon: "bx bx-award" },
    ],

    resume: {
        label: "Télécharger mon CV",
        href: "/assets/cv_FlorentAtcheakou_2025.pdf",
        icon: "bx bx-download",
    },

    aboutNarrative: {
        whoAmI: {
            text: `Diplômé d’un Bac+5 en Informatique & Systèmes d’Information, d’une Licence SIG et d’un Bachelor informatique, je transforme la complexité en solutions simples et utiles.`,
            icon: "bx-info-circle"
        },
        approach: {
            text: `J’allie développement full stack, analyse de données et machine learning pour créer des solutions modernes, robustes et réellement intelligentes.`,
            icon: "bx-bulb"
        }
    }


};

export default aboutData;
