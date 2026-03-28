import { getContent } from "./api";

export const getProjectData = (locale: string = "en") => {
  const content = getContent(locale as "es" | "en");
  return content.projects || [];
};

export const getSingleProjectData = (
  documentId: string,
  locale: string = "en",
) => {
  const content = getContent(locale as "es" | "en");
  return content.projects?.find((p) => p.documentId === documentId) || null;
};
