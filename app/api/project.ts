import { api } from "./api";

export const getProjectData = async (locale: string = "en") => {
  try {
    const res = await api.get(`/projects?populate=*&locale=${locale}`);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};

export const getSingleProjectData = async (
  documentId: string,
  locale: string = "en"
) => {
  try {
    const res = await api.get(
      `/projects/${documentId}?populate=*&locale=${locale}`
    );
    return res.data.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};
