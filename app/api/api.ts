import { getContent as getContentFromFiles, type Locale } from "~/content";
import type { HomeData } from "~/types";

// Get the base API URL from environment variables
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;

// Throw error if no API URL is configured
if (!BASE_API_URL) {
  throw new Error("VITE_BASE_API_URL environment variable is required");
}

export type { Locale };

export function getContent(locale: Locale = "en"): HomeData {
  return getContentFromFiles(locale);
}
