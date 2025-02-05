import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind(), icon()],
    experimental: { contentLayer: true },
    output: "server",
    adapter: netlify()
});
