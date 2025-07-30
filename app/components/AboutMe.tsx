import RichText from "./RichText";

interface Technology {
  id: number;
  name: string;
  url?: string;
  icon?: string;
}

interface AboutMeProps {
  about?: string;
  technologies?: Technology[];
}

const AboutMe = ({ about, technologies }: AboutMeProps) => {
  return (
    <section id="sobre-mi" className="flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 gradient-text-cosmic">
          Sobre mí
        </h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          {about ? (
            <RichText content={about} />
          ) : (
            <div className="space-y-6">
              <p>Contenido no encontrado</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
