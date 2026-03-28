import { getContent } from "./api";

export const getHomeData = (locale: string = "en") => {
  return getContent(locale as "es" | "en");
};
