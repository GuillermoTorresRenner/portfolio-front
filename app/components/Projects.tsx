import { Link } from "react-router";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma completa de comercio electrónico con gestión de inventario, procesamiento de pagos y panel de administración.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      gradient: "gradient-text-primary",
      buttonGradient: "btn-gradient-primary",
    },
    {
      title: "Task Management App",
      description:
        "Aplicación de gestión de tareas con colaboración en tiempo real, notificaciones push y sincronización en la nube.",
      technologies: ["Next.js", "Socket.io", "MongoDB", "Prisma"],
      gradient: "gradient-text-nature",
      buttonGradient: "btn-gradient-nature",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Dashboard de análisis con visualizaciones interactivas, reportes automatizados y integración con múltiples fuentes de datos.",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      gradient: "gradient-text-sunset",
      buttonGradient: "btn-gradient-sunset",
    },
  ];

  return (
    <section id="proyectos" className="min-h-screen flex items-center py-20">
      <div className="max-w-5xl">
        <h2 className="text-4xl font-bold mb-12 gradient-text-fire">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} className="card-gradient group">
              <h3 className={`text-2xl font-semibold mb-4 ${project.gradient}`}>
                {project.title}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all duration-300 ${project.buttonGradient}`}
                >
                  Ver Demo
                </button>
                <button className="py-2 px-4 border border-white/20 rounded-lg text-sm hover:border-white/40 hover:bg-white/5 transition-all duration-300">
                  Código
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/proyectos"
            className="btn-gradient-cosmic inline-flex items-center"
          >
            Ver todos los proyectos →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
