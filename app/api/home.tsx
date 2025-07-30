import { api } from "./api";

export const getHomeData = async () => {
  try {
    const res = await api.get("/home?populate=*");
    console.log(res.data.data);
    return res.data.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
  }
};
