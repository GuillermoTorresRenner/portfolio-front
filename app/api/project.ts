import { getContent, type Locale } from "./api";

export const getProjectData = (locale: string = "en") => {
  const content = getContent(locale as Locale);
  return content.projects || [];
};

export const getSingleProjectData = (
  documentId: string,
  locale: string = "en",
) => {
  const content = getContent(locale as Locale);
  return content.projects.find((p) => p.documentId === documentId) || null;
};
