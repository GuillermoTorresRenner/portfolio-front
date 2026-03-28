import { useLanguage } from "~/contexts/LanguageContext";

export default function LanguageSelector() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <div className="z-50 rounded-full border border-cyan-400/30 bg-gray-900/80 p-1 backdrop-blur">
      <div className="flex items-center gap-1">
        <button
          type="button"
          onClick={() => setLanguage("es")}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            currentLanguage === "es"
              ? "bg-cyan-400 text-gray-950"
              : "text-gray-300 hover:bg-gray-800"
          }`}
          aria-label="Cambiar idioma a español"
        >
          ES
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            currentLanguage === "en"
              ? "bg-cyan-400 text-gray-950"
              : "text-gray-300 hover:bg-gray-800"
          }`}
          aria-label="Switch language to English"
        >
          EN
        </button>
      </div>
    </div>
  );
}