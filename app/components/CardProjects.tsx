import RichText from "./RichText";
import TechChips from "./TechChips";

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

interface CardProjectsProps {
  project: ProjectItem;
  textGradient: string;
  timelineGradient: string;
}

const CardProjects = ({
  project,
  textGradient,
  timelineGradient,
}: CardProjectsProps) => {
  const handleCardClick = () => {
    if (project.demo_url) {
      window.open(project.demo_url, "_blank", "noopener,noreferrer");
    }
  };

  // Obtener la mejor imagen disponible
  const getImageUrl = (image: ProjectImage) => {
    const baseUrl = "http://localhost:1337";
    if (image.formats?.medium) return baseUrl + image.formats.medium.url;
    if (image.formats?.small) return baseUrl + image.formats.small.url;
    if (image.formats?.large) return baseUrl + image.formats.large.url;
    return baseUrl + image.url;
  };

  return (
    <div
      className={`card-gradient relative pl-8 transition-all duration-300 hover:scale-[1.02] ${
        project.demo_url ? "cursor-pointer hover:shadow-xl" : ""
      }`}
      onClick={handleCardClick}
    >
      {/* Línea de tiempo con gradiente dinámico */}
      <div
        className={`absolute left-0 top-0 h-full w-1 ${timelineGradient} rounded-full`}
      />
      <div
        className={`absolute -left-2 top-6 w-5 h-5 rounded-full ${timelineGradient} border-4 border-gray-900`}
      />

      <div className="space-y-4">
        {/* Imagen del proyecto si existe */}
        {project.image && project.image.length > 0 && (
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={getImageUrl(project.image[0])}
              alt={project.image[0].alternativeText || project.title}
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        )}

        <div>
          <h3 className={`text-2xl font-bold ${textGradient}`}>
            {project.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-300 mt-2 leading-relaxed">{project.exerpt}</p>

          {/* Fechas o metadata adicional */}
          <div className="flex items-center space-x-4 mt-3">
            {project.code_url && (
              <a
                href={project.code_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                📋 Código
              </a>
            )}
            {project.demo_url && (
              <a
                href={project.demo_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                🚀 Demo
              </a>
            )}
            {project.youtube_url && (
              <a
                href={project.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                📹 Video
              </a>
            )}
          </div>
        </div>

        {/* Descripción completa en Markdown */}
        <div className="text-gray-300 leading-relaxed">
          <RichText content={project.description} />
        </div>

        {/* Mostrar tecnologías si las hay */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="pt-2">
            <TechChips
              technologies={project.technologies}
              size="sm"
              className="mt-2"
            />
          </div>
        )}

        {/* Indicador visual si tiene URL */}
        {project.demo_url && (
          <div className="flex items-center justify-end pt-2">
            <span className="text-xs text-gray-500 gradient-text-neon">
              Click para ver demo →
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProjects;
