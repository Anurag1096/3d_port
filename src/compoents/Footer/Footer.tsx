import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t, i18n } = useTranslation();

  return (
    <footer className="w-full max-w-full overflow-x-hidden border-t mt-16">
      <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left */}
        <p className="text-gray-600 dark:text-gray-400 text-center sm:text-left">
          © {new Date().getFullYear()} {t("footer.name")}
        </p>

        {/* Language switch */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-gray-500 whitespace-nowrap">
            {t("footer.language")}:
          </span>

          {["en", "hi", "fr", "de"].map((lang) => (
            <button
              key={lang}
              onClick={() => i18n.changeLanguage(lang)}
              className={`px-2 py-1 text-sm rounded transition ${
                i18n.language === lang
                  ? "font-semibold underline"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
