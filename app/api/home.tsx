import { api } from "./api";

export const getHomeData = async () => {
  try {
    const res = await api.get(
      "/home?populate[technologies]=true&populate[socials]=true&populate[experiences][populate][technologies]=true&populate[projects][populate][technologies]=true&populate[projects][populate][image]=true"
    );
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
