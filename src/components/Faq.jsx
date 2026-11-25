import faqData from "../data/faqData.jsx";

// Native <details> keeps the accordion accessible and stateless.
const Faq = () => (
    <section id="faq" className="pb-20 bg-white dark:bg-gray-800 pt-20" data-aos-duration="1000" data-aos="fade-down">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="text-center mb-12 text-gray-800 dark:text-white">
                <h2 className="text-4xl sm:text-5xl font-bold mb-2">{faqData.title}</h2>
                <p className="text-lg dark:text-gray-400">{faqData.subtitle}</p>
            </header>

            <div className="flex flex-col gap-4">
                {faqData.items.map((item) => (
                    <details
                        key={item.question}
                        className="group rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg open:shadow-xl transition-shadow"
                    >
                        <summary className="flex items-center justify-between gap-4 p-5 list-none [&::-webkit-details-marker]:hidden font-semibold text-gray-800 dark:text-white">
                            {item.question}
                            <i className="bx bx-chevron-down text-2xl shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                        </summary>
                        <p className="px-5 pb-5 text-sm text-gray-600 dark:text-gray-300">{item.answer}</p>
                    </details>
                ))}
            </div>

            <p className="mt-10 text-center text-gray-800 dark:text-white">
                Une autre question ?{" "}
                <a href="#contact" className="font-semibold underline underline-offset-4 hover:text-blue-600 dark:hover:text-blue-400">
                    Écrivez-moi
                </a>
            </p>
        </div>
    </section>
);

export default Faq;
