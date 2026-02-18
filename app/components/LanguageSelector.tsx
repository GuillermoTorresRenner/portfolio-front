import React from "react";
import { useLanguage } from "~/contexts/LanguageContext";

const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage } = useLanguage();

  const handleLanguageChange = (language: "en" | "es") => {
    setLanguage(language);
  };

  return (
    <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden">
      <button
        onClick={() => handleLanguageChange("en")}
        className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
          currentLanguage === "en"
            ? "bg-cyan-400 text-gray-900"
            : "text-gray-300 hover:text-white hover:bg-white/10"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange("es")}
        className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
          currentLanguage === "es"
            ? "bg-cyan-400 text-gray-900"
            : "text-gray-300 hover:text-white hover:bg-white/10"
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSelector;
