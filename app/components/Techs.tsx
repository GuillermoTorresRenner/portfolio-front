import React from "react";

interface Technology {
  id: number;
  name: string;
  url?: string;
  icon?: string;
}

interface TechsProps {
  technologies: Technology[];
}

const Techs: React.FC<TechsProps> = ({ technologies }) => {
  console.log(technologies);
  return (
    <div className="mt-12">
      <h3 className="text-2xl font-semibold mb-6 gradient-text-nature">
        Tecnologías que domino
      </h3>
      <div className="flex flex-wrap gap-3">
        {technologies?.map((tech: Technology) => (
          <span
            key={tech.id}
            className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            {tech.icon && <span className="mr-2">{tech.icon}</span>}
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Techs;
