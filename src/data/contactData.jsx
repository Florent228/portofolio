import profileData from "./profileData.jsx";

const contactData = {
    title: "Me Contacter",
    subtitle: "Un projet, une question, un diagnostic ? Je vous réponds moi-même.",

    socials: [
        {
            label: "LinkedIn",
            href: profileData.links.linkedin,
            icon: "bx bxl-linkedin-square",
            description: "Échangeons sur votre projet",
        },
        {
            label: "WhatsApp",
            href: profileData.links.whatsapp,
            icon: "bx bxl-whatsapp",
            description: profileData.phone,
        },
        {
            label: "GitHub",
            href: profileData.links.github,
            icon: "bx bxl-github",
            description: "Explorez mon code",
        },
    ],
};

export default contactData;
