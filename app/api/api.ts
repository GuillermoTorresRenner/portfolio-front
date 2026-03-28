import content from "../../content.json";
import type { HomeData, Project } from "~/types";

type Locale = "es" | "en";

const data = content as {
  home: Record<Locale, HomeData & { projects: Project[] }>;
};

export function getContent(locale: Locale = "en") {
  return data.home[locale] || data.home.en;
}
