import { Link } from "react-router";
import type { Route } from "../+types/root";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Proyectos" },
    { name: "Proyectos", content: "Proyectos en los que he trabajado" },
  ];
}

export default function Proyectos() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Proyectos</h1>
      <Link to="/">Volver a la página principal</Link>
    </div>
  );
}
