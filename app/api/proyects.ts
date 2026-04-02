import { getContent, type Locale } from "./api";

export const getProjectsData = (locale: string = "en") => {
  const content = getContent(locale as Locale);
  return content.projects || [];
};
