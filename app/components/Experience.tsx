import React from "react";
import CardExperience from "./CardExperience";
import type { ExperienceItem } from "~/types";

interface ExperienceProps {
  experiences?: ExperienceItem[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  // Verificar si hay datos de la API
  const hasApiData = experiences && experiences.length > 0;

  return (
    <section id="experiencia" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 gradient-text-sunset">
          Experiencia Profesional
        </h2>

        {hasApiData ? (
          <div className="space-y-12">
            {experiences
              .sort((a, b) => a.order - b.order)
              .map((exp, index) => {
                return (
                  <CardExperience
                    key={exp.documentId}
                    experience={exp}
                    textGradient="gradient-text-sunset"
                    timelineGradient="gradient-bg-sunset"
                  />
                );
              })}
          </div>
        ) : (
          <div className="flex items-center justify-center min-h-[300px]">
            <div className="text-center">
              <div className="mb-4">
                <svg
                  className="mx-auto h-16 w-16 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Sin datos para mostrar
              </h3>
              <p className="text-gray-500 max-w-md">
                No se encontró información de experiencia profesional en este
                momento.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
