import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio Guillermo torres Renner" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Index de mi página</h1>
      <Link to="/proyectos">Ver Proyectos</Link>
    </div>
  );
}
