import { Link } from "react-router";
import type { Route } from "./+types/home";
import Aside from "~/components/Aside";
import AboutMe from "~/components/AboutMe";
import Experience from "~/components/Experience";
import Projects from "~/components/Projects";
import LanguageSelector from "~/components/LanguageSelector";
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
  const { currentLanguage } = useLanguage();
  const homeData = getHomeData(currentLanguage) as HomeData | undefined;

  return (
    <div className="min-h-screen relative">
      {/* Language Selector - Fixed in top right corner */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageSelector />
      </div>

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
