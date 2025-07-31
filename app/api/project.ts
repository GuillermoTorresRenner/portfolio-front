import { api } from "./api";

export const getProjectData = async () => {
  try {
    const res = await api.get("/projects?populate=*");
    return res.data.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};
export const getSingleProjectData = async (documentId: string) => {
  try {
    const res = await api.get(`/projects/${documentId}?populate=*`);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching project data:", error);
    return null;
  }
};
