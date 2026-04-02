import { getContent as getContentFromFiles, type Locale } from "~/content";
import type { HomeData } from "~/types";

export type { Locale };

export function getContent(locale: Locale = "en"): HomeData {
  return getContentFromFiles(locale);
}
