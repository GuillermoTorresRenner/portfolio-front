import React from "react";
import NavBar from "./NavBar";

const Aside = () => {
  return (
    <aside className="fixed top-20 left-20 w-2/6 h-screen">
      <h1 className="text-5xl font-bold mb-6 gradient-text-primary">
        Guillermo Torres Renner
      </h1>
      <h2 className="text-gray-300 text-3xl gradient-text-ocean mb-8">
        Desarrollador Full Stack apasionado por crear experiencias web
      </h2>

      <NavBar />
    </aside>
  );
};

export default Aside;
