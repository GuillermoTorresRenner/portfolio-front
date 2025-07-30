import { useEffect, useState } from "react";

interface NavBarProps {
  activeSection?: string;
}

const NavBar = ({ activeSection = "sobre-mi" }: NavBarProps) => {
  const [currentSection, setCurrentSection] = useState(activeSection);

  const navItems = [
    { id: "sobre-mi", label: "Sobre mí", href: "#sobre-mi" },
    { id: "experiencia", label: "Experiencia", href: "#experiencia" },
    { id: "proyectos", label: "Proyectos", href: "#proyectos" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100; // Offset para mejor detección

      let current = navItems[0].id;

      sections.forEach((section, index) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            current = navItems[index].id;
          }
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Ejecutar una vez al montar

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav className="mt-12">
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
    </nav>
  );
};

export default NavBar;
