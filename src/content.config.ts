import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    area: z.enum(['Digital design', 'Verification', 'Physical design', 'Analog', 'Embedded']),
    tools: z.array(z.string()),
    order: z.number().default(99),
    repo: z.string().url().optional(),
    status: z.string().optional(),
  }),
});

const series = defineCollection({
  loader: file('./src/content/data/series.json'),
  schema: z.object({ title: z.string(), blurb: z.string(), order: z.number() }),
});

const frames = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/frames' }),
  schema: ({ image }) =>
    z.object({
      image: image(),
      alt: z.string().min(5, 'Every photo needs alt text'),
      title: z.string(),
      series: z.string(),
      date: z.coerce.date(),
      caption: z.string().optional(),
      place: z.string().optional(),
      sample: z.boolean().default(false),
    }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, series, frames, notes };
