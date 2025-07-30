const AboutMe = () => {
  return (
    <section id="sobre-mi" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 gradient-text-cosmic">
          Sobre mí
        </h2>
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Soy un desarrollador Full Stack apasionado por crear experiencias
            web excepcionales que combinan diseño elegante con funcionalidad
            robusta. Mi enfoque se centra en construir aplicaciones escalables y
            eficientes utilizando las últimas tecnologías.
          </p>
          <p>
            Con experiencia en React, Node.js, TypeScript y bases de datos
            modernas, me especializo en transformar ideas complejas en
            soluciones digitales intuitivas. Cada proyecto es una oportunidad
            para innovar y superar las expectativas del usuario.
          </p>
          <p>
            Mi objetivo es crear código limpio, mantenible y que genere un
            impacto real en los usuarios finales. Siempre estoy explorando
            nuevas tecnologías y metodologías para mantenerme a la vanguardia
            del desarrollo web.
          </p>
        </div>

        {/* Tecnologías */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 gradient-text-nature">
            Tecnologías que domino
          </h3>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "Next.js",
              "PostgreSQL",
              "MongoDB",
              "Tailwind CSS",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
