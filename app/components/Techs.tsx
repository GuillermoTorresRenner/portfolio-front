import React from "react";
import TechChips from "./TechChips";
import type { Technology } from "~/types";

interface TechsProps {
  technologies: Technology[];
}

const Techs: React.FC<TechsProps> = ({ technologies }) => {
  console.log(technologies);
  return (
    <div className="mt-12">
      <TechChips
        technologies={technologies}
        showTitle={true}
        title="Tecnologías que domino"
        size="md"
        gradientTitle="gradient-text-nature"
      />
    </div>
  );
};

export default Techs;
