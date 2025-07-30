import { Link } from "react-router";
import type { Route } from "./+types/home";
import Aside from "~/components/Aside";
import AboutMe from "~/components/AboutMe";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Guillermo Torres Renner" },
    {
      name: "description",
      content: "Desarrollador Full Stack especializado en React y Node.js",
    },
  ];
}

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Aside fijo en la izquierda */}
      <Aside />

      {/* Contenido principal con margen para el aside */}
      <main className="ml-[40%] relative z-10">
        <div className="container mx-auto px-8">
          {/* Sección Sobre mí */}
          <AboutMe />

          {/* Sección Experiencia */}
          <Experience />

          {/* Sección Proyectos */}
          <Projects />
        </div>
      </main>
    </div>
  );
}
