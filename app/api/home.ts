import { getContent, type Locale } from "./api";

export const getHomeData = (locale: string = "en") => {
  return getContent(locale as Locale);
};
