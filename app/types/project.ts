export interface Technology {
  id: number;
  name: string;
  url?: string;
  icon?: string;
}

export interface ProjectImage {
  id: number;
  url: string;
  alternativeText?: string;
  formats?: {
    small?: { url: string };
    medium?: { url: string };
    large?: { url: string };
    thumbnail?: { url: string };
  };
}

export interface Project {
  id: number;
  documentId: string;
  title: string;
  description: string;
  slug: string;
  demo_url?: string;
  code_url?: string;
  youtube_url?: string;
  order: number;
  is_main: boolean;
  technologies?: Technology[];
  images?: ProjectImage[];
}

export interface ProjectItem {
  id: number;
  documentId: string;
  title: string;
  exerpt: string;
  description: string;
  slug: string;
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
  slug: string;
  order: number;
}

export interface HomeData {
  name: string;
  subtitle: string;
  description: string;
  about: string;
  position: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  technologies: Technology[];
  projects: ProjectItem[];
  experiences: ExperienceItem[];
}
