import { Link } from "react-router";
import TechChips from "./TechChips";
import type { ProjectItem } from "~/types";

interface CardProjectsProps {
  project: ProjectItem;
  textGradient: string;
  timelineGradient?: string;
}

const CardProjects = ({ project, textGradient }: CardProjectsProps) => {
  return (
    <div className="mb-16">
      {/* Timeline dot and line */}
      <div className="flex items-start">
        <div className="flex flex-col items-center mr-8">
          <div className="w-4 h-4 rounded-full gradient-bg-neon shadow-lg shadow-cyan-500/30"></div>
          <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
        </div>

        {/* Card content */}
        <div className="flex-1">
          <Link to={`/project/${project.documentId}`} className="block group">
            <div className="card-gradient p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/20">
              {/* Project header */}
              <div className="mb-6">
                <h3
                  className={`text-3xl font-bold mb-4 ${textGradient} group-hover:brightness-110 transition-all duration-300`}
                >
                  {project.title}
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  {project.exerpt}
                </p>
              </div>

              {/* Technologies */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="mb-6">
                  <TechChips
                    technologies={project.technologies}
                    size="md"
                    showTitle={false}
                  />
                </div>
              )}

              {/* Action buttons / Links preview */}
              <div className="flex items-center justify-between">
                <div className="flex gap-4 text-sm text-gray-400">
                  {project.demo_url && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      Demo disponible
                    </span>
                  )}
                  {project.code_url && (
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Código fuente
                    </span>
                  )}
                </div>

                {/* Click indicator */}
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <span className="text-sm mr-2">Ver detalles</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProjects;
