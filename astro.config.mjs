import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon(), react()],
    experimental: { contentLayer: true },
    output: "server",
    adapter: netlify()
});