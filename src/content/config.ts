import { defineCollection, z } from "astro:content";

const schema = z.object({
    title: z.string(),
    stack: z.string(),
    date: z.string(),
    image: z.string().optional(),
    github: z.string().optional(),
    figma: z.string().optional(),
    live: z.string().optional(),
});

export const collections = {
    active: defineCollection({ type: "content", schema }),
    completed: defineCollection({ type: "content", schema }),
    jobs: defineCollection({ type: "content", schema }),
    home: defineCollection({
        type: "content",
        schema: z.object({
            title: z.string(),
            subtitle: z.string(),
        }),
    }),
};
