// Tipos para props de componentes

import type { BaseProps, ImageAsset, CTAButton } from './common';

export interface ContainerProps extends BaseProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export interface CardProps extends BaseProps {
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'sm' | 'md' | 'lg';
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface ButtonProps extends BaseProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  href?: string;
  external?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

export interface GalleryProps extends BaseProps {
  images: ImageAsset[];
  columns?: 2 | 3 | 4;
  aspectRatio?: 'square' | '4/3' | '16/9' | '3/2';
  lightbox?: boolean;
}

export interface TestimonialCarouselProps extends BaseProps {
  testimonials: import('./content').Testimonial[];
  autoplay?: boolean;
  autoplayDelay?: number;
  showFilters?: boolean;
  itemsPerPage?: number;
}

export interface WhatsAppButtonProps extends BaseProps {
  context: 'trial' | 'contact' | 'info';
  message?: string;
  position?: 'fixed' | 'relative';
  size?: 'sm' | 'md' | 'lg';
}

export interface HeroSectionProps extends BaseProps {
  title: string;
  subtitle?: string;
  description: string;
  backgroundImage?: ImageAsset;
  cta?: CTAButton;
  quotes?: string[];
}

export interface ExpandableContentProps extends BaseProps {
  title: string;
  items: Array<{
    title: string;
    content: string;
    icon?: string;
  }>;
  defaultOpen?: boolean;
  allowMultiple?: boolean;
}
