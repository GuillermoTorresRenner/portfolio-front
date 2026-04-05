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

  projects: [
    {
      id: 1,
      documentId: "otaria",
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
          url: "/images/projects/otaria/otaria1.png",
          alternativeText: "Otaria - Vista principal",
        },
        {
          id: 2,
          url: "/images/projects/otaria/otaria2.gif",
          alternativeText: "Otaria - Dashboard",
        },
      ],
    },
    {
      id: 2,
      documentId: "simonv",
      title: "SIMON-V (Sistema de Monitoreo de Voz)",
      exerpt:
        "Sistema dirigido a profesionales de la clínica Santa María para registrar diferentes análisis de problemas de la voz en pacientes del hospital.",
      description: `Simon-v es un sistema usado para tomar muestras de pacientes con problemas comunes originados por esfuerzo vocal, por lo que está dirigidos a personal de *call centers*, *profesores*, locutores* y *cantantes*.

## Funcionalidades

- Multitenant: Cada cliente tiene su propia instancia aislada para gestionar sus datos de pacientes.
- Integracioń con otoscopios y sondas laríngeas.
- Formularios de diagnóstico y seguimiento de pacientes.
- Almacenamiento seguro de datos de pacientes.
- Generación de reportes para profesionales de la salud.
- Notificaciones push.
- Módulo de estadísticas.
- Módulo de análisis de frecuencias fundamentales de la voz.`,
      demo_url: "https://simonv.lanek.cloud/",
      order: 2,
      is_main: true,
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "NestJS" },
        { id: 4, name: "Python" },
        { id: 5, name: "Redis" },
        { id: 6, name: "Postgres" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/simonv/simonv.png",
          alternativeText: "SIMON-V - Vista principal",
        },
        {
          id: 2,
          url: "/images/projects/simonv/simonv.gif",
          alternativeText: "SIMON-V - Dashboard",
        },
      ],
    },
    {
      id: 3,
      documentId: "theus",
      title: "Theus",
      exerpt:
        "Plataforma Multi-tenant para gestión de envíos de contenedores marítimos, con integración a sistemas de terceros para trazabilidad, monitoreo y gestión de documentación aduanera.",
      description: `Theus es una plataforma diseñada para la gestión eficiente de envíos de contenedores marítimos, ofreciendo integración con sistemas de terceros para asegurar la trazabilidad y el manejo adecuado de la documentación.

## Funcionalidades
- Multitenant: Cada cliente tiene su propia instancia aislada para gestionar sus envíos.
- Integración con sistemas de terceros: Conexión con APIs de navieras, aduanas y proveedores logísticos para obtener información en tiempo real sobre el estado de los envíos.
- Gestión de documentación aduanera: Almacenamiento y gestión de toda la documentación necesaria para el proceso aduanero, facilitando su acceso y organización.
- Trazabilidad en tiempo real: Monitoreo del estado de los envíos desde la salida hasta la llegada, con notificaciones automáticas sobre cambios de estado o incidencias.
- Dashboard de gestión: Interfaz intuitiva para la gestión de envíos, visualización de datos y generación de reportes personalizados.`,
      demo_url: "https://theus.lanek.cloud/",
      code_url: "https://github.com/ejemplo/portfolio",
      order: 3,
      is_main: true,
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 5, name: "TailwindCSS" },
        { id: 6, name: "Docker" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/portfolio-hero.png",
          alternativeText: "Portfolio - Vista principal",
        },
      ],
    },
    {
      id: 4,
      documentId: "sibne",
      title: "SIBNE (Sistema de Información del balance nacional de energía)",
      exerpt:
        "Plataforma solicitada por la Subsecretaríade de energía de Chile para la gestión de datos energéticos de empresas del sector público y privado paa calcular los consumos energéticos nacionales",
      description: `Plataforma solicitada por la **Subsecretaríade de energía de Chile** para la gestión de datos energéticos de empresas del sector público y privado paa calcular los consumos energéticos nacionales.

## Funcionalidades
- Multitenant: Cada cliente tiene su propia instancia con diversos roles de accesos para sus equipos de trabajo.
- Integracion con meio de autenticación de **ClaveUnica** para clientes.
- Formularios de ingreso de datos energéticos con validaciones y cálculos automáticos.
- Almacenamiento seguro de datos energéticos.
- Generación de reportes para la subsecretaría de energía.
- Notificaciones push para clientes.
- Módulo de estadísticas y análisis de datos energéticos.
- Módulo de Admin y gestión de contenidos y configuraciones.
- Modulo ETL para migrar datos de sistemas legados a la plataforma.




`,
      demo_url: "https://bne.minenergia.cl/",
      order: 4,
      is_main: true,
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "Nest JS" },
        { id: 6, name: "Python" },
        { id: 7, name: "TailwindCSS" },
        { id: 8, name: "Docker" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/sibne/sibne1.png",
          alternativeText: "Sibne - Vista principal",
        },
      ],
    },
    {
      id: 5,
      documentId: "sectra",
      title: "Sectra",
      exerpt:
        "Sitio web desarrollado en wordpress para SECTRA (Programam de vialidad y transporte) ",
      description: `SEctra es un sitio web gubernamental (Chile) desarrollado en WordPress para el programa de vialidad y transporte, con el objetivo de proporcionar información actualizada sobre proyectos de infraestructura vial, políticas de transporte y servicios relacionados.

## Funcionalidades
- Multitenant: Cada cliente tiene su propia instancia aislada para gestionar sus envíos.
- Integración con sistemas de terceros: Conexión con APIs de navieras, aduanas y proveedores logísticos para obtener información en tiempo real sobre el estado de los envíos.
- Gestión de documentación aduanera: Almacenamiento y gestión de toda la documentación necesaria para el proceso aduanero, facilitando su acceso y organización.
- Trazabilidad en tiempo real: Monitoreo del estado de los envíos desde la salida hasta la llegada, con notificaciones automáticas sobre cambios de estado o incidencias.
- Dashboard de gestión: Interfaz intuitiva para la gestión de envíos, visualización de datos y generación de reportes personalizados.`,
      demo_url: "https://www.sectra.gob.cl/",
      order: 5,
      is_main: false,
      technologies: [
        { id: 1, name: "Wordpress" },
        { id: 2, name: "Elementor" },
        { id: 3, name: "Docker" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/sectra/sectra1.png",
          alternativeText: "Sectra - Vista principal",
        },
        {
          id: 2,
          url: "/images/projects/sectra/sectra1.gif",
          alternativeText: "Sectra - demo",
        },
      ],
    },
    {
      id: 6,
      documentId: "adened",
      title: "Adened",
      exerpt:
        "Plataforma solicitada por el Ministerio de Salud de Chile para el registro y gestión de casos de defunciones por enfermedades respiratorias en Chile.",
      description: `Adened es una plataforma diseñado para el **Ministerio de Salud de Chile** para la gestión eficiente de casos de defunciones por enfermedades respiratorias en Chile, ofreciendo integración con sistemas de terceros para asegurar la trazabilidad y el manejo adecuado de la información.

## Funcionalidades
- MVC: Arquitectura basada en el patrón Modelo-Vista-Controlador.
- Integración con sistemas de terceros: Conexión con APIs de sistemas de salud y bases de datos gubernamentales para obtener información en tiempo real sobre los casos de defunciones.
- RBAC: Sistema de control de acceso basado en roles para gestionar permisos de usuarios.
- Trazabilidad en tiempo real: Monitoreo del estado de los casos desde la notificación hasta la resolución, con notificaciones automáticas sobre cambios de estado o incidencias.
- Dashboard de gestión: Interfaz intuitiva para la gestión de casos, visualización de datos y generación de reportes personalizados.
- Sistema de control de gestión de casos con CRON para notificaciones automáticas a equipos de salud y autoridades sanitarias sobre casos críticos o emergencias.
`,

      demo_url: "https://adened.minsal.cl/",
      order: 6,
      is_main: false,
      technologies: [
        { id: 1, name: "CakePhp" },
        { id: 2, name: "TailwindCSS" },
        { id: 3, name: "Postgres" },
        { id: 4, name: "Docker" },
      ],
      image: [
        {
          id: 4,
          url: "/images/projects/adened/adened1.png",
          alternativeText: "Adened - Vista principal",
        },
      ],
    },
    {
      id: 7,
      documentId: "dgmn",
      title: "DGMN (Dirección general de movilización nacional)",
      exerpt:
        "Sitio y subsitios integrados desarrollados en wordpress para la DGMN (Dirección general de movilización nacional) del Ministerio de Defensa de Chile.",
      description: `Sitio y subsitios integrados desarrollados en wordpress para la DGMN (Dirección general de movilización nacional) del Ministerio de Defensa de Chile.

## Funcionalidades
- Creación de sitio principal con los siguientes subsitios por temática.
  - Subsitio de Leyes de Armas y explosivos.
  - Subsitio de Leyes de Artes Marciales.
  - Subsitio de Leyes de Armas Químicas y Tóxicas.
  - Subsitio de Preliminares.
  - Subsitio de Servicio Militar.


`,
      demo_url: "https://dgmn.cl/",
      // code_url: "https://github.com/ejemplo/portfolio",
      order: 7,
      is_main: false,
      technologies: [
        { id: 1, name: "Wordpress" },
        { id: 2, name: "Elementor" },
        { id: 3, name: "Docker" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/dgmn/dgmn1.png",
          alternativeText: "DGMN - Vista principal",
        },
        {
          id: 2,
          url: "/images/projects/dgmn/dgmn1.gif",
          alternativeText: "DGMN - Vista Principal",
        },
        {
          id: 3,
          url: "/images/projects/dgmn/dgmn2.gif",
          alternativeText: "DGMN -Ley de armas y explosivos",
        },
        {
          id: 4,
          url: "/images/projects/dgmn/dgmn3.gif",
          alternativeText: "DGMN - Leyes de Artes Marciales",
        },
        {
          id: 5,
          url: "/images/projects/dgmn/dgmn4.gif",
          alternativeText: "DGMN - Subsitio de Preliminares",
        },
        {
          id: 6,
          url: "/images/projects/dgmn/dgmn5.gif",
          alternativeText: "DGMN - Subsitio de Servicio Militar",
        },
        {
          id: 7,
          url: "/images/projects/dgmn/dgmn6.gif",
          alternativeText: "DGMN - Vista sexta",
        },
      ],
    },
    {
      id: 8,
      documentId: "lobarnechea-imagenes",
      title: "Lobarnechea en Imágenes",
      exerpt:
        "Sitio web desarrollado para la  Corporación Cultural de Lobarnechea con imágenes históricas de la comuna como parte del proyecto cultural del municipio.",
      description: `Sitio web desarrollado para la **Corporación Cultural de Lobarnechea** con imágenes históricas de la comuna como parte del proyecto cultural del municipio.

## Funcionalidades
- Sitio web con galería de imágenes históricas de la comuna de Lobarnechea.
- creación de backend personalizado para CMS para la gestión de imágenes, categorías y etiquetas.
- RBAC para gestión de usuarios y permisos de edición.
- Sistema ETL para migrar imágenes y datos desde sistemas legados a la nueva plataforma.
- Integración de Sistema de recomendación temática de imágenes basado en etiquetas y categorías para mejorar la experiencia de navegación de los usuarios.

`,
      demo_url: "https://lobarnecheaenimagenes.cl/",
      order: 8,
      is_main: false,
      technologies: [
        { id: 1, name: "React" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "TailwindCSS" },
        { id: 4, name: "NestJS" },
        { id: 5, name: "Docker" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/cclb/cclb1.png",
          alternativeText: "Lobarnechea en Imágenes - Vista principal",
        },
        {
          id: 2,
          url: "/images/projects/cclb/cclb1.gif",
          alternativeText: "Lobarnechea en Imágenes - demo",
        },
      ],
    },
    {
      id: 9,
      documentId: "municipalidad-illapel",
      title: "Municipalidad de Illapel",
      exerpt:
        "Sitio Web de la Municipalidad de Illapel realizado en WordPress.",
      description: `Sitio Web de la Municipalidad de Illapel desarrollado en WordPress, ofreciendo información y servicios en línea para los ciudadanos.

## Funcionalidades
- Gestión de contenido: Administración de noticias, eventos y comunicados oficiales.
- Integración con sistemas municipales: Conexión con bases de datos y servicios internos para mostrar información actualizada.
`,
      demo_url: "https://municipalidadillapel.cl/",
      // code_url: "https://github.com/ejemplo/portfolio",
      order: 9,
      is_main: false,
      technologies: [
        { id: 1, name: "WordPress" },
        { id: 2, name: "PHP" },
        { id: 3, name: "MySQL" },
        { id: 4, name: "HTML" },
        { id: 5, name: "CSS" },
        { id: 6, name: "Docker" },
        { id: 7, name: "Elementor" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/illapel/illapel1.png",
          alternativeText: "Municipalidad de Illapel - Vista principal",
        },
        {
          id: 2,
          url: "/images/projects/illapel/illapel1.gif",
          alternativeText: "Municipalidad de Illapel - demo",
        },
      ],
    },
  ],
};
