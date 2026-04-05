import type { HomeData } from "~/types";

/**
 * Portfolio content in English
 */
export const enContent: HomeData = {
  //******************************************** Personal information *****************************************************************
  name: "Guillermo Torres Renner",
  subtitle: "Full Stack Developer | DevOps | Architect",
  description:
    "Always developing and growing. Focused on building scalable and efficient systems.",
  position: "Full Stack Developer | DevOps | Architect",
  location: "Temuco, Chile",
  email: "contacto@guillermotorresdev.com",
  phone: "+56 9 8765 4321",
  linkedin: "https://www.linkedin.com/in/guillermotorres-fullstackdeveloper/",
  github: "https://github.com/GuillermoTorresRenner",
  youtube: "https://www.youtube.com/@guillermo_torres_dev",

  //******************************************** About me *****************************************************************

  about: `I'm Guillermo Torres, a fullstack developer, self-taught maker and digital explorer. I combine programming, electronics and creativity to design technological solutions that solve real problems. I work with technologies such as NestJS, Vue/Quasar, AI, Docker and ESP32, n8n, integrating software and hardware for projects ranging from access control systems to management platforms for municipalities, clinics and companies.

Beyond writing code, I design circuits, manage deployments with CI/CD, organize my ideas in Obsidian and explore emerging technologies with a DevOps mindset. I'm passionate about automating processes, optimizing workflows and building tools that empower people and their projects.

From Temuco, Chile, I develop solutions for local and international clients, with a human, technical and aesthetic approach. My work is an extension of how I engage with the world: precise, creative and deeply connected to purpose.`,

  //******************************************** Technologies *****************************************************************

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

  //******************************************** Experience *****************************************************************
  experiences: [
    {
      id: 1,
      documentId: "exp-001",
      position: "Senior Full Stack Developer | DevOps | Architect",
      company: "Lanek",
      start_date: "October 2025",
      end_date: "Present",
      description: `
- Implemented VPS usage for medium and small projects, optimizing AWS usage by reducing costs by 80% and improving scalability.
- Developed automatic backup and database migration systems from AWS and GCP to VPS, ensuring data integrity and availability.
- Designed IaC systems with Ansible for consistent and repeatable deployments, reducing deployment time by 50% and minimizing human errors.
- Implemented CI/CD pipelines with Github Actions, automating tests and deployments, resulting in a 30% improvement in the delivery speed of new features.
- Developed monitoring and alerting solutions for applications deployed on VPS, improving proactive problem detection and reducing incident response time.
- Developed various systems and platforms for clients across different sectors, building custom solutions for diverse clients.
- Participated in the sales department submitting bids to various systems in the **Public Procurement Market**`,

      url: "https://www.lanek.cl/",
      order: 1,
    },
    {
      id: 2,
      documentId: "exp-002",
      position: "FullStack Developer | DevOps",
      company: "TChile",
      start_date: "October 2024",
      end_date: "October 2025",
      description: `
- Application development for public sector clients from various state entities, including municipalities, clinics and companies.
- Implemented process automation solutions with n8n, integrating internal and external systems to improve operational efficiency.
- Designed WordPress websites for public sector clients, creating intuitive interfaces tailored to their specific needs.
- Implemented dedicated DevOps servers to integrate CI/CD workflows, monitoring and application management with all available open source tools, reducing costs and improving deployment efficiency.
- Created secure development practice manuals in line with **CSIRT** requirements for public sector clients, ensuring data protection and application security.
- Participated in the sales department submitting bids to various systems in the **Public Procurement Market**`,
      url: "https://www.tchile.cl/",
      order: 2,
    },
    {
      id: 3,
      documentId: "exp-003",
      position: "Systems Administrator | Backend Developer",
      company: "White Lion Technology",
      start_date: "October 2018",
      end_date: "July 2024",
      description: `
- Administered, maintained and installed the 2Personnel system in various **CODELCO** mines, ensuring the operation of casino management, food service billing and personnel access control.
- Installed **AVIGILION** cameras for access control in various **CODELCO** mines, integrating the system with the access control software to improve security and efficiency in personnel management.
- Developed various backends and adapters to connect our software with third-party systems, improving interoperability and the functionality of our solutions.
- Developed access control systems for small clients using **ESP32** microcontrollers, integrating hardware and software to create customized access control solutions.`,
      url: "https://www.whiteliontechnology.com/es/",
      order: 3,
    },
    {
      id: 4,
      documentId: "exp-004",
      position: "Senior Oenologist | Full Stack Developer",
      company: "Compañía Pisquera de Chile (CCU)",
      start_date: "January 2012",
      end_date: "July 2024",
      description: `I developed my first career as an Oenologist in charge of the fermentation of pisco wines for distillation.
       
**In this job I discovered my fascination for building management systems, automation and continuous quality improvement based on BI.**

- Developed tank volume management and wine and alcohol racking systems.
- Created a still stoppage alarm system for distillation, enabling real-time notifications to management and the maintenance department to reduce downtime and improve production efficiency.
- Created BI dashboards to monitor wine production and quality, facilitating data-driven decision making.
- Created a system to generate labels for dispatching analyte samples to external laboratories, integrating the system with the quality management software to improve the efficiency and traceability of the process.`,
      url: "https://cpch.cl/",
      order: 4,
    },
  ],

  //******************************************** Projects *****************************************************************

  projects: [
    {
      id: 1,
      documentId: "otaria",
      title: "Otaria",
      exerpt:
        "Platform for carbon footprint calculation and documentation to obtain sustainability certifications.",
      description: `**Otaria** is a *multi-tenant* subscription platform that enables clients to associate business entities with their CO2 emission sources linked to an extensive database of Emission Factors, in order to record and trace greenhouse gas emissions as the basis for drafting environmental continuous improvement plans and generating the necessary documentation to obtain sustainability certifications.

## Key Features

- Multitenant: Each client has their own isolated instance to manage their emissions data.
- Emission factor database: Extensive database with emission factors for different activities and sectors.
- Automatic carbon footprint calculation: The platform automatically calculates the carbon footprint based on data entered by the client.
- Report generation: Generates detailed reports to help clients understand their environmental impact and plan improvement actions.
- Certification documentation: Provides the necessary documentation for clients to obtain internationally recognized sustainability certifications.`,
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
          alternativeText: "Otaria - Main view",
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
      title: "SIMON-V (Voice Monitoring System)",
      exerpt:
        "System aimed at professionals at Clínica Santa María to record different analyses of voice problems in hospital patients.",
      description: `Simon-v is a system used to take samples from patients with common problems caused by vocal strain, aimed at *call center* staff, *teachers*, *broadcasters* and *singers*.

## Features

- Multitenant: Each client has their own isolated instance to manage their patient data.
- Integration with otoscopes and laryngeal probes.
- Diagnostic and patient follow-up forms.
- Secure storage of patient data.
- Report generation for healthcare professionals.
- Push notifications.
- Statistics module.
- Fundamental voice frequency analysis module.`,
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
          alternativeText: "SIMON-V - Main view",
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
        "Multi-tenant platform for maritime container shipment management, with third-party system integration for traceability, monitoring and customs documentation management.",
      description: `Theus is a platform designed for the efficient management of maritime container shipments, offering integration with third-party systems to ensure traceability and proper documentation handling.

## Features
- Multitenant: Each client has their own isolated instance to manage their shipments.
- Third-party system integration: Connection with shipping company, customs and logistics provider APIs to obtain real-time information on shipment status.
- Customs documentation management: Storage and management of all documentation required for the customs process, facilitating access and organization.
- Real-time traceability: Monitoring of shipment status from departure to arrival, with automatic notifications on status changes or incidents.
- Management dashboard: Intuitive interface for shipment management, data visualization and custom report generation.`,
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
          alternativeText: "Portfolio - Main view",
        },
      ],
    },
    {
      id: 4,
      documentId: "sibne",
      title: "SIBNE (National Energy Balance Information System)",
      exerpt:
        "Platform requested by the Chilean Undersecretary of Energy for the management of energy data from public and private sector companies to calculate national energy consumption.",
      description: `Platform requested by the **Chilean Undersecretary of Energy** for the management of energy data from public and private sector companies to calculate national energy consumption.

## Features
- Multitenant: Each client has their own instance with various access roles for their work teams.
- Integration with **ClaveUnica** authentication system for clients.
- Energy data entry forms with validations and automatic calculations.
- Secure storage of energy data.
- Report generation for the Undersecretary of Energy.
- Push notifications for clients.
- Statistics and energy data analysis module.
- Admin and content and configuration management module.
- ETL module to migrate data from legacy systems to the platform.




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
          alternativeText: "Sibne - Main view",
        },
      ],
    },
    {
      id: 5,
      documentId: "sectra",
      title: "Sectra",
      exerpt:
        "Website developed in WordPress for SECTRA (Road and Transport Program)",
      description: `Sectra is a Chilean government website developed in WordPress for the road and transport program, with the aim of providing up-to-date information on road infrastructure projects, transport policies and related services.

## Features
- Multitenant: Each client has their own isolated instance to manage their shipments.
- Third-party system integration: Connection with shipping company, customs and logistics provider APIs to obtain real-time information on shipment status.
- Customs documentation management: Storage and management of all documentation required for the customs process, facilitating access and organization.
- Real-time traceability: Monitoring of shipment status from departure to arrival, with automatic notifications on status changes or incidents.
- Management dashboard: Intuitive interface for shipment management, data visualization and custom report generation.`,
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
          alternativeText: "Sectra - Main view",
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
        "Platform requested by the Chilean Ministry of Health for the registration and management of death cases due to respiratory diseases in Chile.",
      description: `Adened is a platform designed for the **Chilean Ministry of Health** for the efficient management of death cases due to respiratory diseases in Chile, offering integration with third-party systems to ensure traceability and proper information handling.

## Features
- MVC: Architecture based on the Model-View-Controller pattern.
- Third-party system integration: Connection with health system APIs and government databases to obtain real-time information on death cases.
- RBAC: Role-based access control system to manage user permissions.
- Real-time traceability: Monitoring of case status from notification to resolution, with automatic notifications on status changes or incidents.
- Management dashboard: Intuitive interface for case management, data visualization and custom report generation.
- Case management control system with CRON for automatic notifications to health teams and health authorities about critical cases or emergencies.
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
          alternativeText: "Adened - Main view",
        },
      ],
    },
    {
      id: 7,
      documentId: "dgmn",
      title: "DGMN (National Mobilization Directorate)",
      exerpt:
        "Integrated site and subsites developed in WordPress for the DGMN (National Mobilization Directorate) of the Chilean Ministry of Defense.",
      description: `Integrated site and subsites developed in WordPress for the DGMN (National Mobilization Directorate) of the Chilean Ministry of Defense.

## Features
- Creation of main site with the following subsites by topic.
  - Weapons and Explosives Laws subsite.
  - Martial Arts Laws subsite.
  - Chemical and Toxic Weapons Laws subsite.
  - Preliminaries subsite.
  - Military Service subsite.


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
          alternativeText: "DGMN - Main view",
        },
        {
          id: 2,
          url: "/images/projects/dgmn/dgmn1.gif",
          alternativeText: "DGMN - Main view",
        },
        {
          id: 3,
          url: "/images/projects/dgmn/dgmn2.gif",
          alternativeText: "DGMN - Weapons and Explosives Law",
        },
        {
          id: 4,
          url: "/images/projects/dgmn/dgmn3.gif",
          alternativeText: "DGMN - Martial Arts Laws",
        },
        {
          id: 5,
          url: "/images/projects/dgmn/dgmn4.gif",
          alternativeText: "DGMN - Preliminaries subsite",
        },
        {
          id: 6,
          url: "/images/projects/dgmn/dgmn5.gif",
          alternativeText: "DGMN - Military Service subsite",
        },
        {
          id: 7,
          url: "/images/projects/dgmn/dgmn6.gif",
          alternativeText: "DGMN - Sixth view",
        },
      ],
    },
    {
      id: 8,
      documentId: "lobarnechea-imagenes",
      title: "Lobarnechea in Images",
      exerpt:
        "Website developed for the Lobarnechea Cultural Corporation with historical images of the municipality as part of the municipal cultural project.",
      description: `Website developed for the **Lobarnechea Cultural Corporation** with historical images of the municipality as part of the municipal cultural project.

## Features
- Website with gallery of historical images from the Lobarnechea municipality.
- Creation of custom backend CMS for managing images, categories and tags.
- RBAC for user management and editing permissions.
- ETL system to migrate images and data from legacy systems to the new platform.
- Integration of thematic image recommendation system based on tags and categories to improve user browsing experience.

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
          alternativeText: "Lobarnechea in Images - Main view",
        },
        {
          id: 2,
          url: "/images/projects/cclb/cclb1.gif",
          alternativeText: "Lobarnechea in Images - demo",
        },
      ],
    },
    {
      id: 9,
      documentId: "municipalidad-illapel",
      title: "Municipality of Illapel",
      exerpt:
        "Website for the Municipality of Illapel built in WordPress.",
      description: `Website for the Municipality of Illapel developed in WordPress, offering information and online services for citizens.

## Features
- Content management: Administration of news, events and official communications.
- Integration with municipal systems: Connection with internal databases and services to display up-to-date information.
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
          alternativeText: "Municipality of Illapel - Main view",
        },
        {
          id: 2,
          url: "/images/projects/illapel/illapel1.gif",
          alternativeText: "Municipality of Illapel - demo",
        },
      ],
    },
  ],
};
