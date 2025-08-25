import { Link } from "react-router";
import type { Route } from "./+types/home";
import Aside from "~/components/Aside";
import AboutMe from "~/components/AboutMe";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import LanguageSelector from "~/components/LanguageSelector";
import { useEffect, useState } from "react";
import { getHomeData } from "~/api/home";
import Techs from "~/components/Techs";
import type { HomeData } from "~/types";
import { useLanguage } from "~/contexts/LanguageContext";

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
  const [isLoading, setIsLoading] = useState(true);
  const { currentLanguage, setLanguage, getAPILocale } = useLanguage();

  const getAllData = async () => {
    setIsLoading(true);
    try {
      const data = await getHomeData(getAPILocale());
      setHomeData(data);
    } catch (error) {
      console.error("Error loading data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Cargar datos cuando cambie el idioma
  useEffect(() => {
    getAllData();
  }, [currentLanguage]);

  return (
    <div className="min-h-screen relative">
      {/* Language Selector - Posición fija en esquina superior derecha */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="fixed inset-0 bg-gray-950/80 backdrop-blur-sm z-40 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300">
              {currentLanguage === "es" ? "Cargando..." : "Loading..."}
            </p>
          </div>
        </div>
      )}

      {/* Aside - Responsivo: arriba en móvil/tablet, lateral en desktop */}
      <div className="lg:fixed lg:top-20 lg:left-20 lg:w-2/6 lg:h-screen w-full">
        <Aside
          name={homeData?.name}
          subtitle={homeData?.subtitle}
          description={homeData?.description}
          socials={homeData?.socials}
        />
      </div>

      {/* Contenido principal - Responsivo: sin margen en móvil/tablet, con margen en desktop */}
      <main className="lg:ml-[40%] relative z-10 mt-8 lg:mt-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Sección Sobre mí */}
          <AboutMe
            about={homeData?.about}
            technologies={homeData?.technologies}
          />
          <Techs technologies={homeData?.technologies ?? []} />

          {/* Sección Experiencia */}
          <Experience experiences={homeData?.experiences} />

          {/* Sección Proyectos */}
          <Projects projects={homeData?.projects} />
        </div>
      </main>
    </div>
  );
}
