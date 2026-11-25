import contactData from "../data/contactData.jsx";
import Tippy from '@tippyjs/react';
import { disabledLinkClass } from "../utils/link.js";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen pb-20 bg-white dark:bg-gray-800 pt-20" data-aos-duration="1000" data-aos="fade-down">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title & Subtitle */}
        <div className="text-center mb-12 text-gray-800" data-aos-delay="600" data-aos="fade-down">
          <h2 className="text-5xl font-bold dark:text-white mb-2">{contactData.title}</h2>
          <p className="text-lg dark:text-gray-400">{contactData.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-aos-delay="600" data-aos="fade-down">
          {/* Left Side: Social Links */}
          <div className="grid gap-4 max-w-xl w-full mx-auto lg:mx-0 h-fit">
            {contactData.socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-7 w-full py-7 border border-white rounded-lg shadow-lg dark:bg-gray-800 text-gray-800 dark:text-white hover:shadow-lg hover:-translate-y-1 transition-all"
                aria-label={item.label}
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 flex items-center justify-center shadow-lg rounded-lg bg-gray-800 text-white dark:bg-white dark:text-gray-800 shrink-0">
                    <i className={`${item.icon} text-xl`} />
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-semibold text-2xl leading-tight">{item.label}</span>
                    <span className="text-sm text-gray-800 dark:text-white leading-snug">
                      {item.description}
                    </span>
                  </div>
                </div>
                <i className="bx bx-chevron-right text-2xl text-gray-800 dark:text-white" />
              </a>
            ))}
          </div>

          {/* Right Side: Contact Form (wired up in a later step) */}
          <div className="rounded-lg py-12 px-7 shadow-lg border h-fit border-white max-w-xl w-full mx-auto lg:mx-0">
            <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-white flex items-center gap-2">
              <i className="bx bx-envelope text-lg" />
              Envoyez-moi un Message
            </h3>
            <form className="grid gap-4">
              <input
                type="text"
                placeholder="Votre Nom"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <input
                type="email"
                placeholder="Votre Email"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
              />
              <textarea
                placeholder="Votre Message"
                className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
                rows="5"
              />
              <Tippy content="Formulaire bientôt disponible — contactez-moi via LinkedIn ou WhatsApp" placement="top">
                <span className="flex">
                  <button
                    type="button"
                    disabled
                    aria-disabled="true"
                    className={`w-full px-4 py-3 bg-gray-300 text-gray-500 dark:bg-gray-600 dark:text-gray-400 rounded-lg font-medium flex items-center justify-center gap-2 ${disabledLinkClass}`}
                  >
                    Envoyer
                    <i className="bx bx-send text-[1.2rem] translate-y-[1px]" />
                  </button>
                </span>
              </Tippy>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
