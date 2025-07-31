// Tipos para contenido y colecciones

export interface Testimonial {
  name: string;
  age?: number;
  text: string;
  benefit: string;
  audience: string;
  rating: number;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  capacity: number;
  price?: {
    amount: number;
    currency: string;
    period?: string;
  };
  features: string[];
  image?: string;
  featured?: boolean;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'physical' | 'mental' | 'medical';
  audience?: string[];
}

export interface Instructor {
  name: string;
  specialization: string;
  certifications: string[];
  yearsExperience: number;
  photo: string;
  bio: string;
}

export interface Principle {
  title: string;
  description: string;
  order: number;
  icon: string;
}

export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  stats?: {
    value: string | number;
    label: string;
  };
}
