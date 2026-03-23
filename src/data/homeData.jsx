const homeData = {
  title: "Florent ATCHEAKOU",
  typingTexts: [
    "Expert en Informatique & Systèmes d'Information",
    "Développeur Full Stack",
    "Data Analyst & Machine Learning",
    "Intelligence Artificielle",
  ],
  description: "Ingénieur en informatique, je conçois des applications web et mobiles, j’exploite les données grâce à des approches data et Machine Learning. Je conçois l’architecture des systèmes d’information alignés sur les besoins métiers.",

  img: "/assets/profile.png?v=2",
  buttons: [
    {
      label: "Découvrir mes Projets",
      href: "#portofolio",
      type: "primary",
    },
    {
      label: "Télécharger mon CV",
      href: "/assets/cv_FlorentAtcheakou_2025.pdf",
      type: "secondary",
    },
  ],
  floatingIcons: [
    { icon: "bx bxl-python", color: "#e34c26", label: "Python" },
    { icon: "bx bxl-react", color: "#e34c26", label: "React" },
    { icon: "bx bxl-nodejs", color: "#e34c26", label: "Node.js" },
    { icon: "bx bxl-vuejs", color: "#264de4", label: "Vue.js" },
  ],
  socialMedia: [
    {
      platform: "GitHub",
      icon: "bx bxl-github",
        href: "https://github.com/Florent228"
      },
    {
      platform: "LinkedIn",
      icon: "bx bxl-linkedin-square",
      href: "https://www.linkedin.com/in/florent-atcheakou-606b4b280/" 
    },
    {
      platform: "WhatsApp",
      icon: "bx bxl-whatsapp",
      href: "https://wa.me/33636221770" 
    }
  ],

  stats: [
    {
      label: "d'expérience",
      value: "+3 Années",
      icon: "bx bx-briefcase",
    },
    // {
    //   label: "Langage Principal",
    //   value: "JavaScript",
    //   icon: "bx bxl-javascript",
    // },
    {
      label: "réalisés",
      value: "+10 Projets",
      icon: "bx bx-code-alt",
    },
    {
      label: "Moyenne",
      value: "3.55 / 4.00",
      icon: "bx bx-award",
    },
  ],
};

export default homeData;
