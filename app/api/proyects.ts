import { api } from "./api";

export const getProjectsData = async () => {
  try {
    const res = await api.get(
      "/projects?populate[0]=technologies&populate[1]=images"
    );

    const data = res.data.data;

    return data;
  } catch (error) {
    console.error("Error fetching projects data:", error);
    return [];
  }
};
