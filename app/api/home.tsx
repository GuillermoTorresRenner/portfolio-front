import { api } from "./api";

export const getHomeData = async () => {
  try {
    const res = await api.get("/home?populate=*");
    console.log(res.data.data);

    const data = res.data.data;

    // Convertir la experiencia singular en un array para el componente Experience
    if (data.experience) {
      data.experiences = [data.experience];
      delete data.experience;
    }

    return data;
  } catch (error) {
    console.error("Error fetching home data:", error);
  }
};
