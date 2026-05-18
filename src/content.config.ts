import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(
      z.enum(['detection', 'postmortem', 'talk', 'travel', 'photo', 'journal', 'bella'])
    ),
    summary: z.string().optional(),
    location: z.string().optional(),
  }),
});

export const collections = { notes };
