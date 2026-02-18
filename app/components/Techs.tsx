import React from "react";
import TechChips from "./TechChips";
import type { Technology } from "~/types";
import { useLanguage } from "~/contexts/LanguageContext";

interface TechsProps {
  technologies: Technology[];
}

const Techs: React.FC<TechsProps> = ({ technologies }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="mt-12">
      <TechChips
        technologies={technologies}
        showTitle={true}
        title={
          currentLanguage === "es"
            ? "Tecnologías que domino"
            : "Technologies I work with "
        }
        size="md"
        gradientTitle="gradient-text-nature"
      />
    </div>
  );
};

export default Techs;
