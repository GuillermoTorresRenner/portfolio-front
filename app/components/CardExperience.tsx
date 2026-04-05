import RichText from "./RichText";
import TechChips from "./TechChips";

interface Technology {
  id: number;
  name: string;
  url?: string;
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
    <div className="mb-16 w-full">
      <div className="flex items-start">
        {/* Timeline dot and line, igual que CardProjects pero con gradiente dinámico */}
        <div className="flex flex-col items-center mr-8">
          <div className={`w-4 h-4 rounded-full ${timelineGradient} shadow-lg shadow-cyan-500/30`}></div>
          <div className="w-0.5 h-24 bg-gradient-to-b from-cyan-500/50 to-transparent"></div>
        </div>

        {/* Card content */}
        <div className="flex-1">
          <div
            className={`card-gradient p-8 rounded-xl transition-all duration-300 hover:scale-[1.02] ${
              experience.url ? "cursor-pointer hover:shadow-lg hover:shadow-cyan-500/20" : ""
            } w-full`}
            onClick={handleCardClick}
          >
            {/* Header */}
            <div className="mb-6">
              <h3 className={`text-3xl font-bold mb-4 ${textGradient} group-hover:brightness-110 transition-all duration-300`}>
                {experience.position}
              </h3>
              <h4 className="text-xl text-gray-300 font-medium">
                {experience.url ? (
                  <a
                    href={experience.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors duration-300 gradient-text-sunset"
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

            {/* Descripción */}
            <div className="text-gray-300 leading-relaxed mb-6">
              <RichText content={experience.description} />
            </div>

            {/* Tecnologías */}
            {experience.technologies && experience.technologies.length > 0 && (
              <div className="mb-6">
                <TechChips
                  technologies={experience.technologies}
                  size="md"
                  showTitle={false}
                />
              </div>
            )}

            {/* Acción/Link */}
            <div className="flex items-center justify-between">
              <div />
              {experience.url && (
                <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                  <span className="text-sm mr-2">Click para visitar</span>
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardExperience;
