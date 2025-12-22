import { useState, useEffect } from "react";
import { portfolioData } from "../data/portofolioData.jsx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [selectedImage, setSelectedImage] = useState(null);
    const [isZoomed, setIsZoomed] = useState(false);

    // Fonction pour fermer la lightbox
    const closeLightbox = () => {
        setIsZoomed(false);
        setSelectedImage(null);
    };

    // Fonction pour toggler le zoom
    const toggleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    // Gestion de la touche Échap pour fermer la lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && selectedImage) {
                closeLightbox();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        
        // Empêcher le scroll du body quand la lightbox est ouverte
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);

    return (
        <>
            {/* Lightbox moderne pour visualiser les images en grand */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm animate-fadeIn"
                    onClick={closeLightbox}
                    style={{
                        animation: 'fadeIn 0.3s ease-out'
                    }}
                >
                    {/* Barre d'outils en haut */}
                    <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-6 bg-gradient-to-b from-black/50 to-transparent z-20">
                        <div className="text-white flex items-center gap-3">
                            <i className="bx bx-image text-2xl"></i>
                            <span className="text-lg font-medium hidden sm:block">{selectedImage.alt}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            {/* Bouton Zoom */}
                            <Tippy content={isZoomed ? "Dézoomer" : "Zoomer"} placement="bottom">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleZoom();
                                    }}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all hover:scale-110"
                                    aria-label="Zoom"
                                >
                                    <i className={`bx ${isZoomed ? 'bx-zoom-out' : 'bx-zoom-in'} text-2xl`}></i>
                                </button>
                            </Tippy>
                            {/* Bouton Fermer */}
                            <Tippy content="Fermer (Échap)" placement="bottom">
                                <button
                                    onClick={closeLightbox}
                                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500/80 text-white backdrop-blur-md transition-all hover:scale-110"
                                    aria-label="Fermer"
                                >
                                    <i className="bx bx-x text-3xl"></i>
                                </button>
                            </Tippy>
                        </div>
                    </div>

                    {/* Conteneur centré de l'image */}
                    <div className="absolute inset-0 flex items-center justify-center pt-24 pb-20 px-8">
                        <div 
                            className={`relative transition-all duration-300 ${isZoomed ? 'scale-160 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleZoom();
                            }}
                            style={{
                                animation: 'zoomIn 0.3s ease-out'
                            }}
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="max-w-[80vw] max-h-[70vh] object-contain rounded-xl shadow-2xl"
                                style={{ imageRendering: '-webkit-optimize-contrast' }}
                            />
                        </div>
                    </div>

                    {/* Indication en bas */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white/70 text-xs sm:text-sm flex items-center gap-2 bg-black/30 backdrop-blur-md px-4 py-2 rounded-full">
                        <i className="bx bx-info-circle"></i>
                        <span className="hidden sm:inline">Cliquez sur l'image pour zoomer • Échap ou clic extérieur pour fermer</span>
                        <span className="sm:hidden">Cliquez pour zoomer • Échap pour fermer</span>
                    </div>
                </div>
            )}

            <section
                id="portofolio"
                className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20"
                data-aos-duration="1000"
                data-aos="fade-down"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title & Subtitle */}
                <div
                    className="text-center mb-12 text-gray-800"
                    data-aos-delay="600"
                    data-aos="fade-down"
                >
                    <h2 className="text-5xl font-bold dark:text-white mb-2">
                        {portfolioData.sectionTitle.title}
                    </h2>
                    <p className="text-lg dark:text-gray-400">
                        {portfolioData.sectionTitle.subtitle}
                    </p>
                </div>

                {/* Tabs Menu */}
                <div
                    className="flex justify-center mb-8 gap-4 flex-wrap"
                    data-aos-delay="600"
                    data-aos="fade-down"
                >
                    {[
                        { value: "projects", label: "Projets", icon: "bx bx-briefcase" },
                        // { value: "certificates", label: "Certificats", icon: "bx bx-award" },
                        { value: "tech", label: "Technologies", icon: "bx bx-code-alt" },
                    ].map((tab) => (
                        <button
                            key={tab.value}
                            onClick={() => setActiveTab(tab.value)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-lg shadow-lg text-sm font-medium transition-all ${activeTab === tab.value
                                    ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800"
                                    : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-white"
                                }`}
                        >
                            <i className={tab.icon}></i>
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tabs Content */}
                <div>
                    {/* Projects Tab */}
                    {activeTab === "projects" && (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-aos-delay="600"
                            data-aos="fade-down"
                        >
                            {portfolioData.tabs.projects.map((project) => (
                                <div
                                    key={project.id}
                                    className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform"
                                >
                                    <div className="relative group overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={project.img}
                                            alt={project.title}
                                            className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                                            style={{ imageRendering: '-webkit-optimize-contrast' }}
                                            loading="lazy"
                                        />
                                        {/* Overlay au hover */}
                                        <div 
                                            className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                                            onClick={() => setSelectedImage({ src: project.img, alt: project.title })}
                                        >
                                            <div className="text-white flex flex-col items-center gap-2">
                                                <i className="bx bx-search-alt text-5xl"></i>
                                                <span className="text-sm font-medium">Voir en grand</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                        {project.subtitle}
                                    </p>
                                    <p className="text-sm text-gray-800 dark:text-white mb-4">
                                        {project.desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full text-gray-800 dark:text-white"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <Tippy content="Voir la Démo" placement="top">
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex justify-center w-full items-center gap-2 px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-lg font-medium transition-all hover:-translate-y-1"
                                        >
                                            <span className="flex items-center gap-1">
                                                <span>Démo</span>
                                                <i className="bx bx-link-external"></i>
                                            </span>
                                        </a>
                                    </Tippy>

                                </div>
                            ))}
                        </div>
                    )}

                    {/* Certificates Tab */}
                    {activeTab === "certificates" && (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-aos-delay="600"
                            data-aos="fade-down"
                        >
                            {portfolioData.tabs.certificates.map((certificate) => (
                                <div
                                    key={certificate.id}
                                    className="bg-white dark:bg-gray-800 border border-white rounded-lg shadow-lg hover:-translate-y-1 transition-transform overflow-hidden group relative"
                                >
                                    <img
                                        src={certificate.img}
                                        alt={`Certificat ${certificate.id}`}
                                        className="w-full h-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                                        loading="lazy"
                                    />
                                    {/* Overlay au hover */}
                                    <div 
                                        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer rounded-lg"
                                        onClick={() => setSelectedImage({ src: certificate.img, alt: `Certificat ${certificate.id}` })}
                                    >
                                        <div className="text-white flex flex-col items-center gap-2">
                                            <i className="bx bx-search-alt text-5xl"></i>
                                            <span className="text-sm font-medium">Voir en détail</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Tech Stack Tab */}
                    {activeTab === "tech" && (
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                            data-aos-delay="600"
                            data-aos="fade-down"
                        >
                            {portfolioData.tabs.techStacks.map((tech) => (
                                <div
                                    key={tech.id}
                                    className="bg-white dark:bg-gray-800 border border-white rounded-lg p-6 shadow-lg hover:-translate-y-1 transition-transform flex flex-col items-center justify-center gap-4"
                                >
                                    <i
                                        className={`${tech.icon}  text-6xl`}
                                        style={{ color: tech.color }}
                                    ></i>
                                    <span className="text-lg font-medium text-gray-800 dark:text-white">
                                        {tech.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
        </>
    );
};

export default Portfolio;