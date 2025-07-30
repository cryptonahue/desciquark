import { defineCollection, z } from 'astro:content';

const speakers = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    name: z.string(),
    company: z.string(),
    category: z.string(),
    location: z.string(),
    experience: z.string(),
    expertise: z.array(z.string()),
    socialLinks: z.object({
      website: z.string().optional(),
      linkedin: z.string().optional(),
      twitter: z.string().optional(),
      github: z.string().optional(),
      discord: z.string().optional(),
      instagram: z.string().optional(),
      youtube: z.string().optional(),
    }),
    profileImage: z.string().optional(),
    companyImages: z.array(z.string()).optional(),
  }),
});

export const collections = {
  speakers,
};