import React from "react";
import NavBar from "./NavBar";
import Socials from "./Socials";
import type { AsideProps } from "~/types";

const Aside = ({ name, subtitle, description, socials }: AsideProps) => {
  return (
    <aside className="w-full lg:w-full h-auto lg:h-screen p-4 sm:p-6 lg:p-0">
      <div className="text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 gradient-text-primary">
          {name}
        </h1>
        <h2 className="text-gray-300 text-xl sm:text-2xl lg:text-3xl gradient-text-ocean mb-6 lg:mb-8">
          {subtitle}
        </h2>
        <p className="text-gray-400 mb-6 lg:mb-8 text-sm sm:text-base max-w-2xl mx-auto lg:mx-0">
          {description}
        </p>
      </div>

      {/* NavBar - Oculto en móvil/tablet, visible en desktop */}
      <div className="hidden lg:block">
        <NavBar />
        <Socials socials={socials || []} />
      </div>

      {/* NavBar móvil - Horizontal en la parte inferior en móvil/tablet */}
      <div className="lg:hidden mt-6">
        <NavBar />
        <Socials socials={socials || []} />
      </div>
    </aside>
  );
};

export default Aside;
