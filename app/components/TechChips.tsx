import React from "react";
import type { Technology } from "~/types";

interface TechChipsProps {
  technologies: Technology[];
  showTitle?: boolean;
  title?: string;
  size?: "sm" | "md" | "lg";
  gradientTitle?: string;
  className?: string;
}

const TechChips: React.FC<TechChipsProps> = ({
  technologies,
  showTitle = false,
  title = "Tecnologías",
  size = "sm",
  gradientTitle = "gradient-text-nature",
  className = "",
}) => {
  const sizeClasses = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-5 py-3 text-base",
  };

  const titleSizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-3xl",
  };

  if (!technologies || technologies.length === 0) {
    return null;
  }

  return (
    <div className={`${className}`}>
      {showTitle && (
        <h3
          className={`${titleSizeClasses[size]} font-semibold mb-4 ${gradientTitle}`}
        >
          {title}
        </h3>
      )}
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech: Technology) => (
          <span
            key={tech.id}
            className={`
              ${sizeClasses[size]}
              bg-white/10 backdrop-blur-sm rounded-full border border-white/20 
              hover:border-white/40 hover:bg-white/20 transition-all duration-300
              cursor-default
            `}
          >
            {tech.icon && <span className="mr-2">{tech.icon}</span>}
            {tech.url ? (
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                {tech.name}
              </a>
            ) : (
              tech.name
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechChips;
