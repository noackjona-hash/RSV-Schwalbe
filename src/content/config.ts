import { defineCollection, z } from 'astro:content';

const berichteCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    dateDisplay: z.string(),
    category: z.string().optional(),
    excerpt: z.string(),
    homeExcerpt: z.string().optional(),
    thumbnail: z.string().optional(),
    images: z.array(
      z.object({
        src: z.string(),
        alt: z.string()
      })
    ).optional().default([]),
    showInOverview: z.boolean().default(true),
    showOnHome: z.boolean().default(true)
  })
});

const veranstaltungenCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    day: z.string(),
    month: z.string(),
    year: z.number(),
    subtitle: z.string(),
    metaLine: z.string(),
    highlight: z.boolean().default(false),
    detailUrl: z.string()
  })
});

export const collections = {
  berichte: berichteCollection,
  veranstaltungen: veranstaltungenCollection
};
