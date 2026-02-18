import { useEffect, useState } from "react";
import { useLanguage } from "~/contexts/LanguageContext";

interface NavBarProps {
  activeSection?: string;
}

const NavBar = ({ activeSection = "sobre-mi" }: NavBarProps) => {
  const { currentLanguage } = useLanguage();
  const [currentSection, setCurrentSection] = useState(activeSection);

  const navItems = [
    {
      id: "sobre-mi",
      label: currentLanguage === "es" ? "Sobre mí" : "About me",
      href: "#sobre-mi",
    },
    {
      id: "experiencia",
      label: currentLanguage === "es" ? "Experiencia" : "Experience",
      href: "#experiencia",
    },
    {
      id: "proyectos",
      label: currentLanguage === "es" ? "Proyectos" : "Projects",
      href: "#proyectos",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Mejor offset para detección

      let current = navItems[0].id;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          // Detectar si estamos en la sección actual
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            current = navItems[index].id;
          }
        }
      });

      // Si estamos cerca del final de la página, activar la última sección
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        current = navItems[navItems.length - 1].id;
      }

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentLanguage]);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="mt-6 lg:mt-12">
      {/* Navegación vertical para desktop */}
      <div className="hidden lg:block">
        <ul className="space-y-6">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNavClick(item.href)}
                className={`
                  group flex items-center w-full text-left transition-all duration-300
                  ${
                    currentSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                {/* Línea indicadora */}
                <div
                  className={`
                  h-px mr-4 transition-all duration-500 ease-out
                  ${
                    currentSection === item.id
                      ? "w-12 gradient-bg-neon"
                      : "w-6 bg-gray-600 group-hover:w-8 group-hover:bg-gray-400"
                  }
                `}
                />

                {/* Texto del enlace */}
                <span
                  className={`
                  text-sm font-medium tracking-wider uppercase transition-all duration-300
                  ${
                    currentSection === item.id
                      ? "gradient-text-neon-vertical transform translate-x-2"
                      : "group-hover:transform group-hover:translate-x-1"
                  }
                `}
                >
                  {item.label}
                </span>
              </button>

              {/* Efecto de partícula cuando está activo */}
              {currentSection === item.id && (
                <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 rounded-full gradient-bg-neon animate-pulse" />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Línea vertical de progreso */}
        <div className="absolute -left-8 top-0 h-full w-px bg-gradient-to-b from-transparent via-gray-600 to-transparent">
          <div
            className="w-full gradient-bg-neon transition-all duration-700 ease-out"
            style={{
              height: `${((navItems.findIndex((item) => item.id === currentSection) + 1) / navItems.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* Navegación horizontal para móvil y tablet */}
      <div className="lg:hidden">
        <ul className="flex justify-center space-x-6 overflow-x-auto pb-2">
          {navItems.map((item) => (
            <li key={item.id} className="relative flex-shrink-0">
              <button
                onClick={() => handleNavClick(item.href)}
                className={`
                  group flex flex-col items-center transition-all duration-300 px-2 py-2
                  ${
                    currentSection === item.id
                      ? "text-white"
                      : "text-gray-400 hover:text-gray-200"
                  }
                `}
              >
                {/* Indicador superior para móvil */}
                <div
                  className={`
                  w-full h-0.5 mb-2 transition-all duration-500 ease-out
                  ${
                    currentSection === item.id
                      ? "gradient-bg-neon"
                      : "bg-gray-600 group-hover:bg-gray-400"
                  }
                `}
                />

                {/* Texto del enlace */}
                <span
                  className={`
                  text-xs font-medium tracking-wider uppercase transition-all duration-300 whitespace-nowrap
                  ${
                    currentSection === item.id
                      ? "gradient-text-neon-vertical"
                      : ""
                  }
                `}
                >
                  {item.label}
                </span>

                {/* Punto indicador cuando está activo */}
                {currentSection === item.id && (
                  <div className="mt-1">
                    <div className="w-1.5 h-1.5 rounded-full gradient-bg-neon animate-pulse" />
                  </div>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
