import { getContent } from "./api";

export const getProjectsData = (locale: string = "en") => {
  const content = getContent(locale as "es" | "en");
  return content.projects || [];
};
