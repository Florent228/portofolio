import { useState } from "react";
import { articlesData } from "../data/articlesData.jsx";

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

const categoryColors = {
    React: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-300" },
    Backend: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-300" },
    CSS: { bg: "bg-purple-100 dark:bg-purple-900/30", text: "text-purple-700 dark:text-purple-300" },
    IA: { bg: "bg-amber-100 dark:bg-amber-900/30", text: "text-amber-700 dark:text-amber-300" },
    DevOps: { bg: "bg-cyan-100 dark:bg-cyan-900/30", text: "text-cyan-700 dark:text-cyan-300" },
    Frontend: { bg: "bg-emerald-100 dark:bg-emerald-900/30", text: "text-emerald-700 dark:text-emerald-300" },
    "Sécurité": { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-300" },
};

const Articles = () => {
    const categories = ["Tous", ...new Set(articlesData.articles.map((a) => a.category))];
    const [activeCategory, setActiveCategory] = useState("Tous");

    const filteredArticles =
        activeCategory === "Tous"
            ? articlesData.articles
            : articlesData.articles.filter((a) => a.category === activeCategory);

    return (
        <section
            id="articles"
            className="min-h-screen pb-20 bg-gray-50 dark:bg-gray-900 pt-20"
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
                        {articlesData.sectionTitle.title}
                    </h2>
                    <p className="text-lg dark:text-gray-400">
                        {articlesData.sectionTitle.subtitle}
                    </p>
                </div>

                {/* Category Filter */}
                <div
                    className="flex justify-center mb-10 gap-3 flex-wrap"
                    data-aos-delay="600"
                    data-aos="fade-down"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                                activeCategory === cat
                                    ? "bg-gray-800 text-white dark:bg-white dark:text-gray-800 shadow-lg"
                                    : "bg-white text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 hover:shadow-md"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Articles Grid */}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    data-aos-delay="600"
                    data-aos="fade-up"
                >
                    {filteredArticles.map((article) => {
                        const colors = categoryColors[article.category] || {
                            bg: "bg-gray-100 dark:bg-gray-700",
                            text: "text-gray-700 dark:text-gray-300",
                        };

                        return (
                            <a
                                key={article.id}
                                href={article.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                            >
                                {/* Category Badge + Date */}
                                <div className="flex items-center justify-between mb-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}
                                    >
                                        {article.category}
                                    </span>
                                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <i className="bx bx-calendar"></i>
                                        {formatDate(article.date)}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors line-clamp-2">
                                    {article.title}
                                </h3>

                                {/* Summary */}
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1 line-clamp-3">
                                    {article.summary}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {article.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded-full text-gray-600 dark:text-gray-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Footer: Read Time + Arrow */}
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                        <i className="bx bx-time-five"></i>
                                        {article.readTime} de lecture
                                    </span>
                                    <span className="text-sm font-medium text-gray-800 dark:text-white flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Lire
                                        <i className="bx bx-right-arrow-alt text-lg"></i>
                                    </span>
                                </div>
                            </a>
                        );
                    })}
                </div>

                {/* Empty State */}
                {filteredArticles.length === 0 && (
                    <div className="text-center py-16 text-gray-500 dark:text-gray-400">
                        <i className="bx bx-search-alt text-5xl mb-4 block"></i>
                        <p className="text-lg">Aucun article dans cette catégorie pour le moment.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Articles;
