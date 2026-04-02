import { esContent } from "./es";
import { enContent } from "./en";
import type { HomeData } from "~/types";

export type Locale = "es" | "en";

/**
 * Contenido del portfolio organizado por idioma
 */
const content: Record<Locale, HomeData> = {
  es: esContent,
  en: enContent,
};

/**
 * Obtiene el contenido según el idioma especificado
 * @param locale - Idioma ('es' o 'en')
 * @returns Datos del portfolio en el idioma solicitado
 */
export function getContent(locale: Locale = "en"): HomeData {
  return content[locale] || content.en;
}

/**
 * Obtiene todos los proyectos para un idioma
 */
export function getProjects(locale: Locale = "en") {
  return getContent(locale).projects;
}

/**
 * Obtiene un proyecto específico por su documentId
 */
export function getProjectById(documentId: string, locale: Locale = "en") {
  return getContent(locale).projects.find((p) => p.documentId === documentId) || null;
}

/**
 * Obtiene todas las experiencias para un idioma
 */
export function getExperiences(locale: Locale = "en") {
  return getContent(locale).experiences;
}

export { esContent, enContent };
