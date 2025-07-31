// Re-exporta todos los tipos para fácil importación

export type * from './common';
export type * from './content';
export type * from './components';

// Tipos específicos de Astro
export interface AstroComponentProps {
  [key: string]: any;
}

// Utilidades de tipo
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredBy<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Colores del theme (matching tailwind.config.js)
export type ThemeColor =
  | 'coral'
  | 'warm-gold'
  | 'deep-coral'
  | 'sage-green'
  | 'rose-pale'
  | 'trust-blue'
  | 'cream'
  | 'charcoal-gray';

export type ColorVariant =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;
