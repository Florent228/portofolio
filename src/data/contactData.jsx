const contactData = {
    title: "Me Contacter",
    subtitle: "Contactez-moi via formulaire, réseaux sociaux ou plateformes de soutien.",

    tabs: [
        {
            label: "Formulaire",
            value: "form",
            icon: "bx bx-envelope",
        },
        {
            label: "Réseaux",
            value: "social",
            icon: "bx bx-link",
        },
        {
            label: "Me Soutenir",
            value: "support",
            icon: "bx bx-heart",
        },
    ],

    socials: [
        {
            label: "GitHub",
            href: "https://github.com/hizkia178",
            icon: "bx bxl-github",
            description: "Explorez mon code et mes projets",
        },
        {
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/hizkia-siahaan-59b003280/",
            icon: "bx bxl-linkedin-square",
            description: "Connectons-nous professionnellement",
        },
        {
            label: "Instagram",
            href: "#",
            icon: "bx bxl-instagram",
            description: "Mon journal visuel et actualités de vie",
        },
        {
            label: "Twitter",
            href: "#",
            icon: "bx bxl-twitter",
            description: "Réflexions diverses et tweets dev",
        },
    ],

    supportPlatforms: [
        {
            label: "QRIS",
            type: "image",
            imageSrc: "/assets/qris.jpg",
            alt: "Scanner pour soutenir via QRIS",
        }
    ],

};

export default contactData;
