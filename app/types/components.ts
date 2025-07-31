export interface Social {
  id: number;
  name: string;
  url: string;
  icon?: string;
  color?: string;
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
