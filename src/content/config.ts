import { defineCollection, z } from 'astro:content';

// Configuración para el blog
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Configuración para testimonios
const testimoniosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    date: z.string(),
    category: z.string(),
    benefit: z.string(),
    audience: z.string(),
    rating: z.number().min(1).max(5),
  }),
});

// Configuración para la página About
const aboutCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string(),
  }),
});

// Configuración para la página Why Pilates
const whyPilatesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string(),
  }),
});

// Configuración para la página Services
const servicesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  testimonios: testimoniosCollection,
  about: aboutCollection,
  'why-pilates': whyPilatesCollection,
  services: servicesCollection,
};
