import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogDataSchema = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).default(["others"]),
  pubDate: z.coerce.date(),
  excerpt: z.string().optional(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  hide: z.boolean().optional(),
});

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: blogDataSchema,
});

export type BlogData = z.infer<typeof blogDataSchema>

export const collections = { blog };
