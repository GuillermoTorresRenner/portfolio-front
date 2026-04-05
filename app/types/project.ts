import type { Social } from "./components";

export interface Technology {
  id: number;
  name: string;
  url?: string;
}

export interface ProjectImage {
  id: number;
  url: string;
  alternativeText?: string;
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  demo_url?: string;
  code_url?: string;
  youtube_url?: string;
  order: number;
  is_main: boolean;
  technologies?: Technology[];
  images?: ProjectImage[];
  image?: any[]; // Para compatibilidad con la API actual
}

export interface ProjectItem {
  id: number;
  documentId: string;
  title: string;
  exerpt: string;
  description: string;
  code_url?: string;
  demo_url?: string;
  youtube_url?: string;
  order: number;
  is_main: boolean;
  technologies?: Technology[];
  image?: any[];
}

export interface ExperienceItem {
  id: number;
  documentId: string;
  position: string;
  company: string;
  start_date: string;
  end_date: string;
  description: string;
  url?: string;
  order: number;
}

export interface HomeData {
  name: string;
  subtitle: string;
  description: string;
  position: string;
  location: string;
  about: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  youtube: string;
  technologies: Technology[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
  socials?: Social[];
}
