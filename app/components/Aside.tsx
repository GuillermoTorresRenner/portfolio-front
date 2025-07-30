import React from "react";
import NavBar from "./NavBar";

interface AsideProps {
  name: string | undefined;
  subtitle: string | undefined;
  description: string | undefined;
}

const Aside: React.FC<AsideProps> = ({ name, subtitle, description }) => {
  return (
    <aside className="fixed top-20 left-20 w-2/6 h-screen">
      <h1 className="text-5xl font-bold mb-6 gradient-text-primary">{name}</h1>
      <h2 className="text-gray-300 text-3xl gradient-text-ocean mb-8">
        {subtitle}
      </h2>
      <p className="text-gray-400 mb-8">{description}</p>

      <NavBar />
    </aside>
  );
};

export default Aside;
