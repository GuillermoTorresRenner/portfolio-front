import { Link } from "react-router";
import type { Route } from "./+types/proyectos";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Proyectos - Portfolio Guillermo Torres" },
    { name: "description", content: "Proyectos en los que he trabajado" },
  ];
}

export default function Proyectos() {
  return (
    <div className="min-h-screen relative">
      {/* Contenido con z-index mayor que el efecto Focus */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 gradient-text-primary">
          Mis Proyectos
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Proyecto 1 */}
          <div className="card-gradient">
            <h3 className="text-2xl font-semibold mb-4 gradient-text-ocean">
              Proyecto Web App
            </h3>
            <p className="text-gray-300 mb-4">
              Aplicación web desarrollada con React y Node.js. Incluye
              autenticación, dashboard y API REST.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">
                Node.js
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                MongoDB
              </span>
            </div>
            <button className="w-full py-2 gradient-bg-primary rounded-lg transition-all duration-300">
              Ver Proyecto
            </button>
          </div>

          {/* Proyecto 2 */}
          <div className="card-gradient">
            <h3 className="text-2xl font-semibold mb-4 gradient-text-nature">
              E-commerce Mobile
            </h3>
            <p className="text-gray-300 mb-4">
              Aplicación móvil para e-commerce con React Native. Integración con
              pasarelas de pago.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                React Native
              </span>
              <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">
                Firebase
              </span>
            </div>
            <button className="w-full py-2 gradient-bg-nature rounded-lg transition-all duration-300">
              Ver Proyecto
            </button>
          </div>

          {/* Proyecto 3 */}
          <div className="card-gradient">
            <h3 className="text-2xl font-semibold mb-4 gradient-text-sunset">
              Dashboard Analytics
            </h3>
            <p className="text-gray-300 mb-4">
              Dashboard para análisis de datos con visualizaciones interactivas
              y reportes en tiempo real.
            </p>
            <div className="flex gap-2 mb-4">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                Vue.js
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">
                D3.js
              </span>
            </div>
            <button className="w-full py-2 gradient-bg-sunset rounded-lg transition-all duration-300">
              Ver Proyecto
            </button>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/"
            className="btn-gradient-primary inline-flex items-center"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
