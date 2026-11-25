import servicesData from "../data/servicesData.jsx";

const iconBoxClass = "w-12 h-12 flex items-center justify-center rounded-lg shadow-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0";

function HighlightCard({ item }) {
    return (
        <div className="flex gap-4 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg">
            <div className={iconBoxClass}>
                <i className={`${item.icon} text-2xl`} aria-hidden="true" />
            </div>
            <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
            </div>
        </div>
    );
}

const Services = () => {
    const { sectionTitle, pillars, dataAi, mapping, cta } = servicesData;

    return (
        <section id="services" className="pb-20 bg-white dark:bg-gray-800 pt-20 overflow-hidden" data-aos-duration="1000" data-aos="fade-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 text-gray-800 dark:text-white">
                    <h2 className="text-5xl font-bold mb-2">{sectionTitle.title}</h2>
                    <p className="text-lg max-w-2xl mx-auto dark:text-gray-400">{sectionTitle.subtitle}</p>
                </header>

                {/* Three pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8" data-aos-delay="300" data-aos="fade-up">
                    {pillars.map((pillar) => (
                        <article
                            key={pillar.id}
                            className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-transform"
                        >
                            <div className={`${iconBoxClass} mb-4`}>
                                <i className={`${pillar.icon} text-2xl`} aria-hidden="true" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{pillar.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-5">{pillar.text}</p>
                            <ul className="flex flex-wrap gap-2 mt-auto">
                                {pillar.keywords.map((keyword) => (
                                    <li key={keyword} className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-white">
                                        {keyword}
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                {/* Differentiators */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
                    <HighlightCard item={dataAi} />
                    <HighlightCard item={mapping} />
                </div>

                {/* Call to action */}
                <div className="mt-12 rounded-xl p-8 sm:p-10 shadow-2xl bg-gray-800 text-white dark:bg-white dark:text-gray-800 flex flex-col md:flex-row md:items-center gap-6" data-aos="fade-up">
                    <div className="flex-1">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">{cta.title}</h3>
                        <p className="opacity-90">{cta.text}</p>
                    </div>
                    <a
                        href={cta.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-lg hover:-translate-y-1 transition-all whitespace-nowrap"
                    >
                        <i className="bx bx-message-square-dots" aria-hidden="true" />
                        {cta.label}
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
