import profileData from "./profileData.jsx";

const footerData = {
    brand: {
        name: profileData.brand,
        icon: "bx bx-code-alt",
        description: `${profileData.name} · ${profileData.shortBio}`,
    },

    navigationIcon: "bx bx-navigation",
    socialsIcon: "bx bx-share-alt",

    navigation: [
        { label: "Accueil", href: "#home" },
        { label: "Services", href: "#services" },
        { label: "Réalisations", href: "#portofolio" },
        { label: "À propos", href: "#about" },
        { label: "Contact", href: "#contact" },
    ],

    legalLinks: [
        { label: "Mentions légales", href: "#legal" },
        { label: "Politique de confidentialité", href: "#privacy" },
    ],

    socials: [
        { label: "LinkedIn", icon: "bx bxl-linkedin-square", href: profileData.links.linkedin },
        { label: "WhatsApp", icon: "bx bxl-whatsapp", href: profileData.links.whatsapp },
        { label: "GitHub", icon: "bx bxl-github", href: profileData.links.github },
    ],

    formSubscription: {
        title: "S'abonner à la Newsletter",
        description: "Conseils pratiques et nouvelles réalisations, une fois par mois.",
        placeholder: "Entrez votre email",
        buttonText: "S'abonner",
    },

    copyright: `© ${new Date().getFullYear()} ${profileData.brand} · ${profileData.name}, EI. Tous droits réservés.`,
};

export default footerData;
