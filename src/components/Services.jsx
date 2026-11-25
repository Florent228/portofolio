import servicesData from "../data/servicesData.jsx";

const iconBoxClass = "w-12 h-12 flex items-center justify-center rounded-lg shadow-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0";

function PillarCard({ pillar }) {
    return (
        <article className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg hover:-translate-y-1 transition-transform">
            <div className="flex items-center justify-between mb-4">
                <div className={iconBoxClass}>
                    <i className={`${pillar.icon} text-2xl`} aria-hidden="true" />
                </div>
                <span className="text-4xl font-bold text-gray-200 dark:text-gray-600 select-none">{pillar.number}</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{pillar.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">{pillar.promise}</p>

            <ul className="flex flex-col divide-y divide-gray-200 dark:divide-gray-700">
                {pillar.offers.map((offer) => (
                    <li key={offer.name} className="py-3">
                        <div className="flex items-baseline justify-between gap-3">
                            <span className="font-semibold text-gray-800 dark:text-white">{offer.name}</span>
                            <span className="text-sm font-bold text-gray-800 dark:text-white whitespace-nowrap">{offer.price}</span>
                        </div>
                        <div className="flex items-baseline justify-between gap-3 mt-1">
                            <span className="text-xs text-gray-600 dark:text-gray-400">{offer.detail}</span>
                            <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">{offer.delay}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
}

const Services = () => {
    const { sectionTitle, pillars, diagnostic, dataAi, mapping, legalNote } = servicesData;

    return (
        <section id="services" className="pb-20 bg-white dark:bg-gray-800 pt-20 overflow-hidden" data-aos-duration="1000" data-aos="fade-down">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <header className="text-center mb-12 text-gray-800 dark:text-white">
                    <h2 className="text-5xl font-bold mb-2">{sectionTitle.title}</h2>
                    <p className="text-lg max-w-3xl mx-auto dark:text-gray-400">{sectionTitle.subtitle}</p>
                </header>

                {/* Three pillars */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos-delay="300" data-aos="fade-up">
                    {pillars.map((pillar) => (
                        <PillarCard key={pillar.id} pillar={pillar} />
                    ))}
                </div>

                {/* Entry offer */}
                <div className="mt-12 rounded-xl p-8 sm:p-10 shadow-2xl bg-gray-800 text-white dark:bg-white dark:text-gray-800 flex flex-col lg:flex-row lg:items-center gap-6" data-aos="fade-up">
                    <div className="flex-1">
                        <p className="text-xs uppercase tracking-widest font-semibold opacity-70 mb-2">{diagnostic.eyebrow}</p>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-3">{diagnostic.title}</h3>
                        <p className="text-sm sm:text-base opacity-90 max-w-3xl">{diagnostic.text}</p>
                    </div>
                    <a
                        href={diagnostic.cta.href}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold bg-white text-gray-800 dark:bg-gray-800 dark:text-white shadow-lg hover:-translate-y-1 transition-all whitespace-nowrap"
                    >
                        <i className="bx bx-calendar-check" aria-hidden="true" />
                        {diagnostic.cta.label}
                    </a>
                </div>

                {/* Data & AI bricks + mapping specialty */}
                <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2" data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">{dataAi.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{dataAi.subtitle}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {dataAi.items.map((item) => (
                                <div key={item.title} className="flex gap-4 p-5 rounded-xl border border-gray-200 dark:border-gray-700 shadow">
                                    <div className={iconBoxClass}>
                                        <i className={`${item.icon} text-xl`} aria-hidden="true" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 dark:text-white">{item.title}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="flex flex-col p-6 rounded-xl border-2 border-gray-800 dark:border-white shadow-lg" data-aos="fade-left">
                        <div className={`${iconBoxClass} mb-4`}>
                            <i className={`${mapping.icon} text-2xl`} aria-hidden="true" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{mapping.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{mapping.text}</p>
                    </aside>
                </div>

                <p className="mt-10 text-center text-xs text-gray-500 dark:text-gray-400">{legalNote}</p>
            </div>
        </section>
    );
};

export default Services;
