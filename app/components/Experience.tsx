const Experience = () => {
  const experiences = [
    {
      company: "Tech Solutions Inc.",
      position: "Senior Full Stack Developer",
      period: "2023 - Presente",
      description:
        "Liderazgo de equipos de desarrollo, arquitectura de aplicaciones web escalables con React y Node.js, implementación de microservicios y optimización de performance.",
      technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    },
    {
      company: "Digital Innovation Lab",
      position: "Full Stack Developer",
      period: "2021 - 2023",
      description:
        "Desarrollo de aplicaciones web modernas, integración de APIs RESTful, implementación de sistemas de autenticación y autorización, colaboración en metodologías ágiles.",
      technologies: [
        "React",
        "Express.js",
        "MongoDB",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      company: "StartUp Ventures",
      position: "Frontend Developer",
      period: "2020 - 2021",
      description:
        "Creación de interfaces de usuario responsivas, optimización de experiencia de usuario, implementación de diseños pixel-perfect y colaboración estrecha con equipos de diseño.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Figma"],
    },
  ];

  return (
    <section id="experiencia" className="min-h-screen flex items-center py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-12 gradient-text-sunset">
          Experiencia Profesional
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="card-gradient relative pl-8">
              {/* Línea de tiempo */}
              <div className="absolute left-0 top-0 h-full w-1 gradient-bg-primary rounded-full" />
              <div className="absolute -left-2 top-6 w-5 h-5 rounded-full gradient-bg-primary border-4 border-gray-900" />

              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold gradient-text-primary">
                    {exp.position}
                  </h3>
                  <h4 className="text-xl text-gray-300 font-medium">
                    {exp.company}
                  </h4>
                  <p className="text-sm text-gray-400 font-medium">
                    {exp.period}
                  </p>
                </div>

                <p className="text-gray-300 leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
