import { defineCollection, z } from 'astro:content';

const patternsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    icon: z.string(),
    layout: z.string(),
    category: z.string(),
    featured: z.boolean().optional(),
    scores: z.record(z.string(), z.number()).optional(), // Adicionando scores que usamos no wizard
  }),
});

export const collections = {
  patterns: patternsCollection,
}; 