import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Language = "en" | "es";

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  getAPILocale: () => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  // Cargar idioma desde localStorage al inicializar
  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      "portfolio-language"
    ) as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Función para cambiar idioma
  const setLanguage = (newLanguage: Language) => {
    setCurrentLanguage(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  };

  // Función para obtener el locale para la API de Strapi
  const getAPILocale = () => {
    return currentLanguage === "es" ? "es" : "en";
  };

  const value = {
    currentLanguage,
    setLanguage,
    getAPILocale,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
