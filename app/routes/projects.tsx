import React from "react";
import type { Route } from "./+types/projects";
import { useLoaderData } from "react-router";
import CardProjects from "~/components/CardProjects";
import { getProjectsData } from "~/api/proyects";

interface Technology {
  id: number;
  name: string;
  url?: string;
}

interface Project {
  id: number;
  documentId: string;
  title: string;
  exerpt: string;
  description: string;
  slug: string;
  demo_url?: string;
  code_url?: string;
  order: number;
  is_main: boolean;
  technologies: Technology[];
  images?: any[];
}

export async function loader({}: Route.LoaderArgs) {
  const projects = await getProjectsData();
  return { projects };
}

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Portfolio Guillermo Torres" },
    { name: "description", content: "Projects I have worked on" },
  ];
}

export default function Proyectos() {
  const { projects } = useLoaderData<typeof loader>();

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text-neon">
              All Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A complete collection of my development projects, from web
              applications to enterprise solutions.
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-16">
            {projects && projects.length > 0 ? (
              projects.map((project: Project) => (
                <div key={project.documentId} className="max-w-4xl mx-auto">
                  <CardProjects
                    project={project}
                    textGradient="gradient-text-neon"
                    timelineGradient="gradient-bg-neon"
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-gray-400">
                  No projects available at the moment.
                </p>
              </div>
            )}
          </div>

          {/* Navigation back */}
          <div className="text-center mt-16">
            <a href="/#projects" className="btn-gradient-neon inline-block">
              ← Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
