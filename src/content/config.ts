import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		// Transform string to Date object
		updatedDate: z.coerce.date().optional(),
		tags: z.array(z.string()).optional().default([]),
		draft: z.boolean().default(false),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog };
