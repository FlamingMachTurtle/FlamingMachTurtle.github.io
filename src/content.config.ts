import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectsSchema = z.object({
	title: z.string(),
	description: z.string(),
	tech: z.array(z.string()),
	highlights: z.array(z.string()).optional(),
	image: z.string(),
	imageAlt: z.string(),
	demoUrl: z.string().url().optional(),
	imageFirst: z.boolean().optional().default(false),
	sortOrder: z.number().optional().default(99),
});

const projects = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './src/content/projects',
	}),
	schema: projectsSchema,
});

export const collections = {
	projects,
};
