import whyMeData from "../data/whyMeData.jsx";

const WhyMe = () => (
    <section id="why-me" className="pb-20 bg-white dark:bg-gray-800 pt-20" data-aos-duration="1000" data-aos="fade-down">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 text-gray-800 dark:text-white">
                <h2 className="text-4xl sm:text-5xl font-bold mb-2">{whyMeData.title}</h2>
                <p className="text-lg dark:text-gray-400">{whyMeData.subtitle}</p>
            </header>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6" data-aos="fade-up">
                {whyMeData.items.map((item) => (
                    <li
                        key={item.title}
                        className="flex flex-col gap-3 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:-translate-y-1 transition-transform"
                    >
                        <div className="w-12 h-12 flex items-center justify-center rounded-lg shadow-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                            <i className={`${item.icon} text-2xl`} aria-hidden="true" />
                        </div>
                        <h3 className="text-lg font-bold leading-snug text-gray-800 dark:text-white">{item.title}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{item.proof}</p>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default WhyMe;
