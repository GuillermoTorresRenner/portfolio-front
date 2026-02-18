export interface Social {
  id: number;
  name: string;
  url: string;
  icon?: string;
  color?: string;
}

// Language Selector Interface
export interface Language {
  code: string;
  name: string;
  flag: string;
}

export interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

// Component Props Interfaces
export interface AsideProps {
  name: string | undefined;
  subtitle: string | undefined;
  description: string | undefined;
  socials?: Social[];
}

export interface NavBarProps {
  className?: string;
}

export interface SocialsProps {
  socials: Social[];
  className?: string;
}

export interface RichTextProps {
  content: string;
  className?: string;
}
