import React from "react";
import RichText from "./RichText";
import type { Technology } from "~/types";
import { useLanguage } from "~/contexts/LanguageContext";

interface AboutMeProps {
  about?: string;
  technologies?: Technology[];
}

const AboutMe = ({ about, technologies }: AboutMeProps) => {
  const { currentLanguage } = useLanguage();

  return (
    <section id="sobre-mi" className="flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 gradient-text-cosmic">
          {currentLanguage === "es" ? "Sobre mí" : "About me"}
        </h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          {about ? (
            <RichText content={about} />
          ) : (
            <div className="space-y-6">
              <p>
                {currentLanguage === "es"
                  ? "Contenido no encontrado"
                  : "Content not found"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
