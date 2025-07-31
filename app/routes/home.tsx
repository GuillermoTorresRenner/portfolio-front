import { Link } from "react-router";
import type { Route } from "./+types/home";
import Aside from "~/components/Aside";
import AboutMe from "~/components/AboutMe";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import { useEffect, useState } from "react";
import { getHomeData } from "~/api/home";
import Techs from "~/components/Techs";

// Interfaces definidas fuera del componente
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
}

interface HomeData {
  name: string;
  subtitle: string;
  description: string;
  about: string;
  technologies: Technology[];
  experiences?: ExperienceItem[];
}

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
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  const getAllData = async () => {
    const data = await getHomeData();
    console.log(data);
    setHomeData(data);
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Aside fijo en la izquierda */}
      <Aside
        name={homeData?.name}
        subtitle={homeData?.subtitle}
        description={homeData?.description}
      />

      {/* Contenido principal con margen para el aside */}
      <main className="ml-[40%] relative z-10">
        <div className="container mx-auto px-8">
          {/* Sección Sobre mí */}
          <AboutMe
            about={homeData?.about}
            technologies={homeData?.technologies}
          />
          <Techs technologies={homeData?.technologies ?? []} />

          {/* Sección Experiencia */}
          <Experience experiences={homeData?.experiences} />

          {/* Sección Proyectos */}
          <Projects />
        </div>
      </main>
    </div>
  );
}
