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
    // Permitir datos estructurados para beneficios y testimonios
    benefits: z
      .array(
        z.object({
          text: z.string(),
          category: z.string(),
          audiences: z.array(z.string()),
        })
      )
      .optional(),
    testimonials: z
      .array(
        z.object({
          name: z.string(),
          text: z.string(),
          benefit: z.string(),
          audience: z.string(),
          rating: z.number(),
          age: z.number().optional(),
        })
      )
      .optional(),
    // Datos para audiencias
    audiences: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          image: z.string(),
          accent: z.string(),
          accentName: z.string(),
        })
      )
      .optional(),
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

// Configuración para la página Home
const homeCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.string(),
    // Datos para diferenciadores
    differentiators: z
      .array(
        z.object({
          title: z.string(),
          description: z.string(),
          icon: z.string(),
          color: z.string(),
        })
      )
      .optional(),
    // Datos para beneficios
    benefits: z.record(z.array(z.string())).optional(),
    categories: z
      .array(
        z.object({
          id: z.string(),
          title: z.string(),
          icon: z.string(),
          color: z.string(),
        })
      )
      .optional(),
    // Datos para testimonios
    testimonial: z
      .object({
        author: z.string(),
        content: z.string(),
        rating: z.number(),
        benefit: z.string(),
      })
      .optional(),
    additional_testimonials: z
      .array(
        z.object({
          author: z.string(),
          content: z.string(),
          rating: z.number(),
        })
      )
      .optional(),
    // Datos para frases del hero
    quotes: z.array(z.string()).optional(),
    // Datos para horarios semanales
    weeklySchedule: z
      .object({
        title: z.string(),
        subtitle: z.string(),
        timeSlots: z.array(z.string()),
        days: z.array(
          z.object({
            name: z.string(),
            dayCode: z.string(),
            classes: z.array(
              z.object({
                time: z.string(),
                available: z.boolean(),
              })
            ),
          })
        ),
      })
      .optional(),
    legend: z
      .object({
        available: z.string(),
        unavailable: z.string(),
      })
      .optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  testimonios: testimoniosCollection,
  about: aboutCollection,
  'why-pilates': whyPilatesCollection,
  services: servicesCollection,
  home: homeCollection,
};
