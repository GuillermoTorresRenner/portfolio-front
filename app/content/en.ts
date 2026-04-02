import type { HomeData } from "~/types";

/**
 * Portfolio content in English
 */
export const enContent: HomeData = {
  // Personal information
  name: "Guillermo Torres",
  subtitle: "Full Stack Developer",
  description:
    "Passionate about creating modern and scalable web solutions with the best technologies on the market.",
  position: "Full Stack Developer",
  location: "Santiago, Chile",
  email: "contact@example.com",
  phone: "+56 9 1234 5678",
  linkedin: "https://linkedin.com/in/example",
  github: "https://github.com/example",

  // About me (supports Markdown)
  about: `I'm a **Full Stack Developer** with experience in designing and developing modern web applications.

I specialize in technologies like **React**, **Node.js**, **TypeScript**, and **Python**, and I'm passionate about creating solutions that solve real problems.

I'm always looking to learn new tools and improve my skills to deliver high-quality products.`,

  // Technologies
  technologies: [
    { id: 1, name: "React", url: "https://reactjs.org" },
    { id: 2, name: "TypeScript", url: "https://www.typescriptlang.org" },
    { id: 3, name: "Node.js", url: "https://nodejs.org" },
    { id: 4, name: "Python", url: "https://python.org" },
    { id: 5, name: "TailwindCSS", url: "https://tailwindcss.com" },
    { id: 6, name: "Docker", url: "https://docker.com" },
    { id: 7, name: "PostgreSQL", url: "https://postgresql.org" },
    { id: 8, name: "Git", url: "https://git-scm.com" },
    { id: 9, name: "Ansible", url: "https://www.ansible.com" },
    { id: 10, name: "MongoDB", url: "https://www.mongodb.com" },
    {
      id: 11,
      name: "Spring Boot",
      url: "https://spring.io/projects/spring-boot",
    },
    { id: 12, name: "WordPress", url: "https://wordpress.org" },
    { id: 13, name: "Vue", url: "https://vuejs.org" },
    { id: 14, name: "Quasar", url: "https://quasar.dev" },
    { id: 15, name: "Jenkins", url: "https://www.jenkins.io" },
    { id: 16, name: "NestJS", url: "https://nestjs.com" },
    { id: 17, name: "n8n", url: "https://n8n.io" },
  ],

  // Work experience
  experiences: [
    {
      id: 1,
      documentId: "exp-001",
      position: "Senior Full Stack Developer",
      company: "Tech Company",
      start_date: "2023-01",
      end_date: "Present",
      description: `Development of web applications with **React** and **Node.js**.

- Design and implementation of REST APIs
- Cloud services integration (AWS)
- Junior developer mentoring`,
      url: "https://example.com",
      slug: "tech-company",
      order: 1,
    },
    {
      id: 2,
      documentId: "exp-002",
      position: "Frontend Developer",
      company: "Digital Startup",
      start_date: "2021-06",
      end_date: "2022-12",
      description: `Development of modern and responsive user interfaces.

- Migration of legacy application to **React**
- Design system implementation
- 40% performance improvement`,
      url: "https://example2.com",
      slug: "digital-startup",
      order: 2,
    },
  ],

  // Projects
  projects: [
    {
      id: 1,
      documentId: "proj-001",
      title: "E-Commerce Platform",
      exerpt:
        "Complete e-commerce platform with shopping cart, payments, and admin panel.",
      description: `A modern e-commerce platform built with **React** and **Node.js**.

## Key Features

- Product catalog with filtering and search
- Shopping cart with persistence
- Payment gateway integration
- Admin panel for product management
- Responsive and accessible design`,
      slug: "e-commerce-platform",
      code_url: "https://github.com/example/ecommerce",
      demo_url: "https://ecommerce-demo.example.com",
      order: 1,
      is_main: true,
      technologies: [
        { id: 1, name: "React" },
        { id: 3, name: "Node.js" },
        { id: 7, name: "PostgreSQL" },
        { id: 6, name: "Docker" },
      ],
      image: [
        {
          id: 1,
          url: "/images/projects/ecommerce-hero.png",
          alternativeText: "E-Commerce Platform - Main view",
          formats: {
            thumbnail: { url: "/images/projects/ecommerce-hero-thumb.png" },
            small: { url: "/images/projects/ecommerce-hero-small.png" },
          },
        },
        {
          id: 2,
          url: "/images/projects/ecommerce-dashboard.png",
          alternativeText: "E-Commerce Platform - Dashboard",
          formats: {
            thumbnail: {
              url: "/images/projects/ecommerce-dashboard-thumb.png",
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
        "Task management application with real-time collaboration and notifications.",
      description: `Task management application built with **React** and **TypeScript**.

## Features

- Kanban-style boards
- Real-time collaboration
- Push notifications
- Productivity reports
- Calendar integration`,
      slug: "task-manager",
      code_url: "https://github.com/example/task-manager",
      demo_url: "https://tasks-demo.example.com",
      youtube_url: "https://youtube.com/watch?v=example",
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
          alternativeText: "Task Manager - Main view",
          formats: {
            thumbnail: { url: "/images/projects/taskmanager-hero-thumb.png" },
          },
        },
      ],
    },
    {
      id: 3,
      documentId: "proj-003",
      title: "Personal Portfolio",
      exerpt: "Portfolio website built with React Router v7 and TailwindCSS.",
      description: `My personal portfolio, built with the latest web technologies.

## Stack

- **React Router v7** with SSR
- **TailwindCSS** for styling
- **Docker** for deployment
- **GitHub Actions** for CI/CD`,
      slug: "portfolio",
      code_url: "https://github.com/example/portfolio",
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
          alternativeText: "Portfolio - Main view",
        },
      ],
    },
  ],

  // Social networks
  socials: [
    { id: 1, name: "GitHub", url: "https://github.com/example" },
    { id: 2, name: "LinkedIn", url: "https://linkedin.com/in/example" },
    { id: 3, name: "Email", url: "mailto:contact@example.com" },
    { id: 4, name: "YouTube", url: "https://youtube.com/@example" },
  ],
};
