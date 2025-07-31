import React, { useEffect, useState } from "react";
import type { Route } from "./+types/projects";
import CardProjects from "~/components/CardProjects";
import { getProjectData } from "~/api/project";
import type { ProjectItem } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Projects - Portfolio Guillermo Torres" },
    { name: "description", content: "Projects I have worked on" },
  ];
}

export default function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>([]);
  const [loading, setLoading] = useState(true);

  const getAllProjects = async () => {
    try {
      const data = await getProjectData();
      setProjects(data || []);
    } catch (error) {
      console.error("Error loading projects:", error);
      setProjects([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">Loading projects...</p>
        </div>
      </div>
    );
  }

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
          <div className="space-y-12 max-w-4xl mx-auto">
            {projects && projects.length > 0 ? (
              projects.map((project: ProjectItem) => (
                <CardProjects
                  key={project.documentId}
                  project={project}
                  textGradient="gradient-text-neon"
                />
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
