import { getContent as getContentFromFiles, type Locale } from "~/content";
import type { HomeData, Social } from "~/types";

export type { Locale };

export function getContent(locale: Locale = "en"): HomeData {
  const content = getContentFromFiles(locale);

  // Construir el array de socials desde las propiedades individuales
  const socials: Social[] = [];

  if (content.github) {
    socials.push({
      id: 1,
      name: "GitHub",
      url: content.github,
    });
  }

  if (content.linkedin) {
    socials.push({
      id: 2,
      name: "LinkedIn",
      url: content.linkedin,
    });
  }

  if (content.email) {
    socials.push({
      id: 3,
      name: "Email",
      url: `mailto:${content.email}`,
    });
  }

  if (content.youtube) {
    socials.push({
      id: 4,
      name: "YouTube",
      url: content.youtube,
    });
  }

  return {
    ...content,
    socials,
  };
}
