import profileData from "./profileData.jsx";

const homeData = {
  badge: `${profileData.brand} · Développeur indépendant à ${profileData.city}`,
  title: profileData.name,
  typingTexts: [
    "Développeur Full Stack",
    "Conseil en systèmes d'information",
    "Logiciels métier & cartographie",
    "Data & IA appliquées à vos outils",
  ],
  description: profileData.positioning,

  img: "/assets/profile.png?v=2",
  buttons: [
    {
      label: "Demander un diagnostic",
      href: "#contact",
      type: "primary",
      icon: "bx bx-search-alt-2",
    },
    {
      label: "Voir mes réalisations",
      href: "#portofolio",
      type: "secondary",
      icon: "bx bx-briefcase",
    },
  ],
  floatingIcons: [
    { icon: "bx bxl-python", label: "Python" },
    { icon: "bx bxl-react", label: "React" },
    { icon: "bx bxl-nodejs", label: "Node.js" },
    { icon: "bx bxl-vuejs", label: "Vue.js" },
  ],
  socialMedia: [
    { platform: "GitHub", icon: "bx bxl-github", href: profileData.links.github },
    { platform: "LinkedIn", icon: "bx bxl-linkedin-square", href: profileData.links.linkedin },
    { platform: "WhatsApp", icon: "bx bxl-whatsapp", href: profileData.links.whatsapp },
  ],

  statsTitle: "En quelques chiffres :",
  stats: [
    {
      value: "+3 ans",
      label: "d'expérience public & privé",
      icon: "bx bx-briefcase",
    },
    {
      value: "140 000 hab.",
      label: "carto d'agglomération",
      icon: "bx bx-map-alt",
    },
    {
      value: "6 M€",
      label: "programme ACORDA",
      icon: "bx bx-rocket",
    },
  ],
};

export default homeData;
