import React, { useEffect, useState } from "react";
import type { Route } from "./+types/project.$id";
import { useParams, Link } from "react-router";
import { getSingleProjectData } from "~/api/project";
import RichText from "~/components/RichText";
import TechChips from "~/components/TechChips";
import LanguageSelector from "~/components/LanguageSelector";
import { HiArrowLeft, HiExternalLink, HiCode, HiPlay } from "react-icons/hi";
import type { Project, ProjectImage } from "~/types";
import { useLanguage } from "~/contexts/LanguageContext";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Project Details - Portfolio Guillermo Torres" },
    { name: "description", content: "Detailed view of a project" },
  ];
}

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { currentLanguage, setLanguage, getAPILocale } = useLanguage();

  const loadProject = async () => {
    if (!params.id) {
      setError(
        currentLanguage === "es"
          ? "ID del proyecto no encontrado"
          : "Project ID not found"
      );
      setLoading(false);
      return;
    }

    setLoading(true);
    try {
      const data = await getSingleProjectData(params.id, getAPILocale());
      if (!data) {
        setError(
          currentLanguage === "es"
            ? "Proyecto no encontrado"
            : "Project not found"
        );
      } else {
        setProject(data);
        console.log(data);
      }
    } catch (err) {
      console.error("Error loading project:", err);
      setError(
        currentLanguage === "es"
          ? "Error al cargar el proyecto"
          : "Failed to load project"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProject();
  }, [params.id, currentLanguage]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <p className="text-xl text-gray-300">
            {currentLanguage === "es"
              ? "Cargando proyecto..."
              : "Loading project..."}
          </p>
        </div>
      </div>
    );
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        {/* Language Selector */}
        <div className="fixed top-6 right-6 z-50">
          <LanguageSelector />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-red-400">
            {currentLanguage === "es"
              ? "Proyecto No Encontrado"
              : "Project Not Found"}
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            {error ||
              (currentLanguage === "es"
                ? "El proyecto solicitado no pudo ser encontrado."
                : "The requested project could not be found.")}
          </p>
          <Link to="/projects" className="btn-gradient-neon">
            {currentLanguage === "es"
              ? "← Volver a Proyectos"
              : "← Back to Projects"}
          </Link>
        </div>
      </div>
    );
  }

  // Función para obtener la URL de la imagen
  const getImageUrl = (image: any) => {
    const baseUrl = "http://localhost:1337";

    // Priorizar formatos disponibles: large > medium > small > original
    if (image.formats?.large?.url) {
      return `${baseUrl}${image.formats.large.url}`;
    } else if (image.formats?.medium?.url) {
      return `${baseUrl}${image.formats.medium.url}`;
    } else if (image.formats?.small?.url) {
      return `${baseUrl}${image.formats.small.url}`;
    } else {
      return `${baseUrl}${image.url}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Language Selector */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Navegación hacia atrás */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <HiArrowLeft className="w-5 h-5 mr-2" />
              {currentLanguage === "es" ? "Volver al Home" : "Back to Home"}
            </Link>
          </div>

          {/* Hero Section con imagen principal */}
          <div className="mb-16">
            {/* Título del proyecto */}
            <div className="text-center mb-8">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 gradient-text-neon">
                {project.title}
              </h1>
            </div>

            {/* Imagen principal destacada */}
            {project.image && project.image.length > 0 && (
              <div className="relative mb-8">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src={getImageUrl(project.image[0])}
                    alt={
                      project.image[0].alternativeText ||
                      `${project.title} - Principal`
                    }
                    className="w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />

                  {/* Badge decorativo */}
                  <div className="absolute top-6 left-6">
                    <div className="bg-cyan-400/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-400/30">
                      <span className="text-cyan-300 text-sm font-medium">
                        {currentLanguage === "es"
                          ? "Proyecto Destacado"
                          : "Featured Project"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sección de contenido principal */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Descripción del proyecto */}
            <div className="lg:col-span-2">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                <h2 className="text-2xl font-bold mb-6 gradient-text-neon">
                  {currentLanguage === "es"
                    ? "Acerca del Proyecto"
                    : "About the Project"}
                </h2>
                <div className="prose prose-invert prose-cyan max-w-none prose-lg">
                  <RichText content={project.description} />
                </div>
              </div>

              {/* Imagen destacada del proyecto */}
              {project.image && project.image.length > 1 && (
                <div className="mt-8">
                  <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
                    <h3 className="text-xl font-bold mb-4 gradient-text-neon">
                      {currentLanguage === "es"
                        ? "Captura del Proyecto"
                        : "Project Screenshot"}
                    </h3>
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={getImageUrl(project.image[1])}
                        alt={
                          project.image[1].alternativeText ||
                          `${project.title} - Captura destacada`
                        }
                        className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar con información adicional */}
            <div className="space-y-6">
              {/* Imagen asiada del proyecto */}
              {project.image && project.image.length > 2 && (
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
                  <h3 className="text-xl font-bold mb-4 gradient-text-neon">
                    {currentLanguage === "es"
                      ? "Vista Adicional"
                      : "Additional View"}
                  </h3>
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={getImageUrl(project.image[2])}
                      alt={
                        project.image[2].alternativeText ||
                        `${project.title} - Vista adicional`
                      }
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                  </div>
                </div>
              )}

              {/* Tecnologías utilizadas */}
              {project.technologies && project.technologies.length > 0 && (
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
                  <h3 className="text-xl font-bold mb-4 gradient-text-neon">
                    {currentLanguage === "es"
                      ? "Stack Tecnológico"
                      : "Tech Stack"}
                  </h3>
                  <TechChips
                    technologies={project.technologies}
                    size="md"
                    showTitle={false}
                  />
                </div>
              )}

              {/* Sección de Enlaces */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50">
                <h3 className="text-xl font-bold mb-4 gradient-text-neon">
                  {currentLanguage === "es" ? "Enlaces" : "Links"}
                </h3>
                <div className="flex flex-col gap-3">
                  {project.demo_url && (
                    <a
                      href={project.demo_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/30 transition-all duration-300">
                        <HiExternalLink className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-cyan-300 transition-colors duration-300 font-medium">
                        {currentLanguage === "es" ? "Sitio Web" : "Website"}
                      </span>
                    </a>
                  )}

                  {project.code_url && (
                    <a
                      href={project.code_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-purple-500/30 transition-all duration-300">
                        <HiCode className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-purple-300 transition-colors duration-300 font-medium">
                        {currentLanguage === "es" ? "Código" : "Code"}
                      </span>
                    </a>
                  )}

                  {project.youtube_url && (
                    <a
                      href={project.youtube_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 p-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:shadow-red-500/30 transition-all duration-300">
                        <HiPlay className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-red-300 transition-colors duration-300 font-medium">
                        YouTube
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Galería de imágenes adicionales */}
          {project.image && project.image.length > 3 && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center gradient-text-neon">
                {currentLanguage === "es"
                  ? "Galería del Proyecto"
                  : "Project Gallery"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.image.slice(3).map((image: any, index: number) => (
                  <div
                    key={image.id}
                    className="relative group overflow-hidden rounded-xl"
                  >
                    <img
                      src={getImageUrl(image)}
                      alt={
                        image.alternativeText ||
                        `${project.title} - Image ${index + 4}`
                      }
                      className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Navegación hacia otros proyectos */}
          <div className="text-center">
            <Link
              to="/projects"
              className="btn-gradient-neon inline-block text-lg px-8 py-3"
            >
              {currentLanguage === "es"
                ? "Ver todos los proyectos"
                : "View all projects"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
