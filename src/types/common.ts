// Tipos comunes utilizados en todo el proyecto

export interface BaseProps {
  class?: string;
  id?: string;
}

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  hours: string;
  whatsapp: string;
  socialMedia: {
    instagram?: string;
    facebook?: string;
  };
}

export interface ImageAsset {
  src: string;
  alt: string;
  title?: string;
  width?: number;
  height?: number;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: string;
  external?: boolean;
}
