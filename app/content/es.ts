import type { HomeData } from "~/types";

/**
 * Contenido del portfolio en Español
 */

export const esContent: HomeData = {
  //******************************************** Información personal *****************************************************************
  name: "Guillermo Torres Renner",
  subtitle: "Desarrollador Full Stack | Devops | Arquitecto",
  description:
    "Siempre desarrollando y desarrollándome. Enfocado en la creación de sistemas escalables y eficientes.",
  position: "Desarrollador Full Stack | DevOps | Arquitecto",
  location: "Temuco, Chile",
  email: "contacto@guillermotorresdev.com",
  phone: "+56 9 8765 4321",
  linkedin: "https://www.linkedin.com/in/guillermotorres-fullstackdeveloper/",
  github: "https://github.com/GuillermoTorresRenner",
  youtube: "https://www.youtube.com/@guillermo_torres_dev",

  //******************************************** Sobre mí *****************************************************************

  about: `Soy Guillermo Torres, desarrollador fullstack, maker autodidacta y explorador digital. Combino programación, electrónica y creatividad para diseñar soluciones tecnológicas que resuelvan problemas reales. Trabajo con tecnologías como NestJS, Vue/Quasar, IA, Docker y ESP32, n8n, integrando software y hardware para proyectos que van desde sistemas de control de acceso hasta plataformas de gestión para municipios, clínicas o empresas.

Además de escribir código, diseño circuitos, gestiono despliegues con CI/CD, organizo mis ideas en Obsidian y exploro tecnologías emergentes con mentalidad DevOps. Me apasiona automatizar procesos, optimizar flujos y construir herramientas que empoderen a las personas y sus proyectos.

Desde Temuco, Chile, desarrollo soluciones para clientes locales e internacionales, con enfoque humano, técnico y estético. Mi trabajo es una extensión de mi forma de estar en el mundo: precisa, creativa y profundamente conectada con el propósito.`,

  //******************************************** Tecnologías *****************************************************************

  technologies: [
    { id: 1, name: "TypeScript", url: "https://www.typescriptlang.org" },
    { id: 2, name: "Python", url: "https://python.org" },
    { id: 3, name: "Java", url: "https://www.java.com" },
    { id: 4, name: "React", url: "https://reactjs.org" },
    { id: 5, name: "Next.js", url: "https://nextjs.org" },
    { id: 6, name: "Express.js", url: "https://expressjs.com" },
    { id: 7, name: "TailwindCSS", url: "https://tailwindcss.com" },
    { id: 8, name: "Docker", url: "https://docker.com" },
    { id: 9, name: "PostgreSQL", url: "https://postgresql.org" },
    {
      id: 10,
      name: "Github Actions",
      url: "https://github.com/features/actions",
    },
    { id: 11, name: "Ansible", url: "https://www.ansible.com" },
    { id: 12, name: "MongoDB", url: "https://www.mongodb.com" },
    {
      id: 13,
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
    },
    { id: 14, name: "WordPress", url: "https://wordpress.org" },
    { id: 15, name: "Vue", url: "https://vuejs.org" },
    { id: 16, name: "Quasar", url: "https://quasar.dev" },
    { id: 17, name: "Jenkins", url: "https://www.jenkins.io" },
    { id: 18, name: "NestJS", url: "https://nestjs.com" },
    { id: 19, name: "n8n", url: "https://n8n.io" },
    { id: 20, name: "node-red", url: "https://nodered.org" },
    { id: 21, name: "Arduino", url: "https://www.arduino.cc" },
  ],

  //******************************************** Experiencia *****************************************************************
  experiences: [
    {
      id: 1,
      documentId: "exp-001",
      position: "Desarrollador Full Stack Senior | DevOps | Arquitecto",
      company: "Lanek",
      start_date: "Octubre 2025",
      end_date: "Presente",
      description: `
- Implementé el uso de VPS para proyectos medianos y pequeños, optimizando el uso de AWS reduciendo costos en un 80% y mejorando la escalabilidad.
- Desarrolle sistemas automáticos de respaldos y migreaciones de bases de datos desde AWS y GCP a VPS, asegurando la integridad y disponibilidad de los datos.
- Diseñé sistemas IaC con Ansible para despliegues consistentes y repetibles, reduciendo el tiempo de despliegue en un 50% y minimizando errores humanos.
- Implementé pipelines de CI/CD con Github Actions, automatizando pruebas y despliegues, lo que resultó en una mejora del 30% en la velocidad de entrega de nuevas funcionalidades.
- Desarrollé soluciones de monitoreo y alertas para aplicaciones desplegadas en VPS, mejorando la detección proactiva de problemas y reduciendo el tiempo de respuesta ante incidentes.
- Desarrollé diversos sistemas y plataformas para clientes de distintos sectores, construyendo soluciones a medida para diversos clientes.
- Participé en el departamento de ventas realizando postulaciones a diversos sistemas en el **Mercado Publico**`,

      url: "https://www.lanek.cl/",
      order: 1,
    },
    {
      id: 2,
      documentId: "exp-002",
      position: "Desarrollador FullStack | DevOps",
      company: "TChile",
      start_date: "Octubre 2024",
      end_date: "Octubre 2025",
      description: `
- Desarrollos de aplicaciones para clientes del sector público de diversas entidades estatales, incluyendo municipios, clínicas y empresas.
- Implementé soluciones de automatización de procesos con n8n, integrando sistemas internos y externos para mejorar la eficiencia operativa.
- Diseñé sitios Web con WordPress para clientes del sector público, creando interfaces intuitivas y adaptadas a sus necesidades específicas.
- Implementé servidores dedicados de Devops para integrar flujos de CI/CD, monitoreo y gestión de aplicaciones con todas herramientas open source disponibles, reduciendo costos y mejorando la eficiencia de los despliegues.
- Creé manuales de prácticas seguras de desarrollo acorde a las exigencias de **CSIRT** para clientes del sector público, asegurando la protección de datos y la seguridad de las aplicaciones.
- Participé en el departamento de ventas realizando postulaciones a diversos sistemas en el **Mercado Publico**`,
      url: "https://www.tchile.cl/",
      order: 2,
    },
    {
      id: 3,
      documentId: "exp-003",
      position: "Administrador de sistemas | Desarrollador Backend",
      company: "White Lion Technology",
      start_date: "Octubre 2018",
      end_date: "Julio 2024",
      description: `
- Administré, mantuve e instalé el sistema 2Personnel en diversas minas de **CODELCO**, asegurando el funcionamiento de la administración de casinos , la facturación de servicios de alimentación y el control de acceso de personal.
- Instalé cámaras **AVIGILION** para control de acceso en diversas minas de **CODELCO**, integrando el sistema con el software de control de acceso para mejorar la seguridad y eficiencia en la gestión de personal.
- Desarrollé diversos backends y adaptadores para conectar nuestros softwares con sistemas de terceros, mejorando la interoperabilidad y la funcionalidad de nuestras soluciones.
- Desarrollé sistemas d econtrol de accesos para pequeños clientes con microcontroladores **ESP32**, integrando hardware y software para crear soluciones personalizadas de control de acceso.`,
      url: "https://www.whiteliontechnology.com/es/",
      order: 3,
    },
    {
      id: 4,
      documentId: "exp-004",
      position: "Enólogo senior | Desarrollador Full Stack",
      company: "Compañía Pisquera de Chile (CCU)",
      start_date: "Enero 2012",
      end_date: "Julio 2024",
      description: `Desarrollé mi primera carrera de Enólogo encargado de la fermentación de vinos pisqueros para destilacion.
       
**En este trabajo descubrí mi fascinación por la construción de sistemas de gestión, automatización y mejora continua de la calidad basados en BI.**

- Desarrollé sistemas de gestión de volúmenes de Cubas y trasiegos de vinos y alcoholes.
- Creé un sistema de alarma de detenciones de alambiques en destilación, permitiendo notificar en tiempo reala la gerencia y departamento de mantención para reducir tiempos de detención y mejorar la eficiencia de la producción.
- Creé dashboards de BI para monitorear la producción y calidad de los vinos, facilitando la toma de decisiones basada en datos.
- Creé un sistema para generar etiquetas par despacho de muestras de analitos a laboratorios externos, integrando el sistema con el software de gestión de calidad para mejorar la eficiencia y trazabilidad del proceso.`,
      url: "https://cpch.cl/",
      order: 4,
    },
  ],

  //******************************************** Proyectos*****************************************************************
  /**
   
   * Sectra
   * Municipalidad Illapel
   * Subsecretaría de energía
   * Lobarnechea en imágenes
   * DGMN
   * Adened
   * 
   * Otaria
   * Simón V
   * Theus
   */
  projects: [
    {
      id: 1,
      documentId: "proj-001",
      title: "Otaria",
      exerpt:
        "Plataforma para calgulo de huellas de carbono y documentación para obtener certificaciones de sostenibilidad.",
      description: `**Otaria** es una plataforma de subscripciones *multi-tenant* que brinda la posibilidad a los clientes de poder entidades de negocio con sus fuentes de emisión de CO2 asociado a una extensa base de datos de Factores emisión con objeto de registrar y trazar las emisiones de gases de efecto invernadero como base de elaboración de planes ambientales de mejora continua generando documentacion necesaria para obtener certificaciones de sostenibilidad.

## Características principales

- Multitenant: Cada cliente tiene su propia instancia aislada para gestionar sus datos de emisiones.
- Base de datos de factores de emisión: Amplia base de datos con factores de emisión para diferentes actividades y sectores.
- Cálculo automático de huella de carbono: La plataforma calcula automáticamente la huella de carbono basada en los datos ingresados por el cliente.
- Generación de reportes: Genera reportes detallados para ayudar a los clientes a entender su impacto ambiental y planificar acciones de mejora.
- Documentación para certificaciones: Proporciona la documentación necesaria para que los clientes puedan obtener certificaciones de sostenibilidad reconocidas internacionalmente.`,
      slug: "otaria",
      demo_url: "https://huellacarbono.otaria.io/",
      order: 1,
      is_main: true,
      technologies: [
        { id: 1, name: "Quasar" },
        { id: 2, name: "Expres" },
        { id: 3, name: "PostgreSQL" },
        { id: 4, name: "Docker" },
        { id: 5, name: "Redis" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/otaria1.png",
          alternativeText: "Otaria - Vista principal",
          formats: {
            thumbnail: { url: "/images/projects/otaria1-thumb.png" },
            small: { url: "/images/projects/otaria1.png" },
          },
        },
        {
          id: 2,
          url: "/images/projects/otaria2.gif",
          alternativeText: "Otaria - Dashboard",
          formats: {
            thumbnail: {
              url: "/images/projects/otaria2.gif",
            },
          },
        },
      ],
    },
    {
      id: 2,
      documentId: "proj-002",
      title: "Task Manager App",
      exerpt:
        "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones.",
      description: `Aplicación de gestión de tareas construida con **React** y **TypeScript**.

## Funcionalidades

- Tableros tipo Kanban
- Colaboración en tiempo real
- Notificaciones push
- Reportes de productividad
- Integración con calendario`,
      slug: "task-manager",
      code_url: "https://github.com/ejemplo/task-manager",
      demo_url: "https://tasks-demo.ejemplo.com",
      youtube_url: "https://youtube.com/watch?v=ejemplo",
      order: 2,
      is_main: true,
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 5, name: "TailwindCSS" },
      ],
      image: [
        {
          id: 3,
          url: "/images/projects/taskmanager-hero.png",
          alternativeText: "Task Manager - Vista principal",
          formats: {
            thumbnail: { url: "/images/projects/taskmanager-hero-thumb.png" },
          },
        },
      ],
    },
    {
      id: 3,
      documentId: "proj-003",
      title: "Portfolio Personal",
      exerpt:
        "Sitio web portfolio desarrollado con React Router v7 y TailwindCSS.",
      description: `Mi portfolio personal, construido con las últimas tecnologías web.

## Stack

- **React Router v7** con SSR
- **TailwindCSS** para estilos
- **Docker** para despliegue
- **GitHub Actions** para CI/CD`,
      slug: "portfolio",
      code_url: "https://github.com/ejemplo/portfolio",
      order: 3,
      is_main: false,
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 5, name: "TailwindCSS" },
        { id: 6, name: "Docker" },
      ],
      image: [
        {
          id: 4,
          url: "/images/projects/portfolio-hero.png",
          alternativeText: "Portfolio - Vista principal",
        },
      ],
    },
  ],
};
