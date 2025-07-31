import RichText from "./RichText";
import TechChips from "./TechChips";

interface Technology {
  id: number;
  name: string;
  url?: string;
  icon?: string;
}

interface ExperienceItem {
  id: number;
  documentId: string;
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  url?: string;
  slug: string;
  order: number;
  technologies?: Technology[];
}

interface CardExperienceProps {
  experience: ExperienceItem;
  textGradient: string;
  timelineGradient: string;
}

const CardExperience = ({
  experience,
  textGradient,
  timelineGradient,
}: CardExperienceProps) => {
  const handleCardClick = () => {
    if (experience.url) {
      window.open(experience.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`card-gradient relative pl-8 transition-all duration-300 hover:scale-[1.02] ${
        experience.url ? "cursor-pointer hover:shadow-xl" : ""
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
        <div>
          <h3 className={`text-2xl font-bold ${textGradient}`}>
            {experience.position}
          </h3>
          <h4 className="text-xl text-gray-300 font-medium">
            {experience.url ? (
              <a
                href={experience.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-300 gradient-text-neon"
                onClick={(e) => e.stopPropagation()}
              >
                {experience.company}
              </a>
            ) : (
              experience.company
            )}
          </h4>
          <p className="text-sm text-gray-400 font-medium">
            {experience.start_date} - {experience.end_date}
          </p>
        </div>

        {/* Usar RichText para descripción en Markdown */}
        <div className="text-gray-300 leading-relaxed">
          <RichText content={experience.description} />
        </div>

        {/* Mostrar tecnologías si las hay */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="pt-2">
            <TechChips
              technologies={experience.technologies}
              size="sm"
              className="mt-2"
            />
          </div>
        )}

        {/* Indicador visual si tiene URL */}
        {experience.url && (
          <div className="flex items-center justify-end pt-2">
            <span className="text-xs text-gray-500 gradient-text-neon">
              Click para visitar →
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardExperience;
