import React from "react";
import CardProjects from "./CardProjects";
import { Link } from "react-router";

interface Technology {
  id: number;
  name: string;
  url?: string;
}

interface ProjectImage {
  id: number;
  url: string;
  alternativeText?: string;
  formats?: {
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
    thumbnail?: { url: string };
  };
}

interface ProjectItem {
  id: number;
  documentId: string;
  title: string;
  exerpt: string;
  description: string;
  slug: string;
  code_url?: string;
  demo_url?: string;
  youtube_url?: string;
  order: number;
  is_main: boolean;
  technologies?: Technology[];
  image?: ProjectImage[];
}

interface ProjectsProps {
  projects?: ProjectItem[];
}

const Projects = ({ projects }: ProjectsProps) => {
  // Filtrar solo proyectos principales y ordenarlos
  const mainProjects = (projects || [])
    .filter((project) => project.is_main)
    .sort((a, b) => a.order - b.order);

  const hasMainProjects = mainProjects.length > 0;

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 gradient-text-neon">
          Proyectos Destacados
        </h2>

        {hasMainProjects ? (
          <>
            <div className="space-y-12">
              {mainProjects.map((project, index) => (
                <CardProjects
                  key={project.documentId}
                  project={project}
                  textGradient="gradient-text-neon"
                  timelineGradient="gradient-bg-neon"
                />
              ))}
            </div>

            {/* Link para ver todos los proyectos */}
            <div className="text-center mt-8">
              <Link to="/projects" className="btn-gradient-neon inline-block">
                Ver todos los proyectos
                <svg
                  className="ml-2 h-4 w-4 inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </>
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
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">
                Sin proyectos para mostrar
              </h3>
              <p className="text-gray-500 max-w-md">
                No se encontraron proyectos destacados en este momento.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
