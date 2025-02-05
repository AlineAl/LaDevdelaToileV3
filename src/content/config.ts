import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

const eventSchema = z.object({
    id: z.number(),
    date: z.string(),
    title: z.string(),
    link: z.string().url(),
    organizationName: z.string(),
    latitude: z.number(),
    longitude: z.number()
});

const communitySchema = z.object({
    id: z.number(),
    name: z.string(),
    platform: z.string(),
    events: z.array(eventSchema)
});

const citySchema = z.object({
    id: z.number(),
    city: z.string(),
    communities: z.array(communitySchema)
});

const blog = defineCollection({
    type: "content",
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string()
        })
});

const events = defineCollection({
    loader: file("public/communities-events.json"),
    schema: citySchema
});

export const collections = { blog, events };
