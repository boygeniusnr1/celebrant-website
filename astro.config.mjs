// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://celebrant-website.vercel.app",
  output: "server",
  integrations: [
    sitemap({
      filter: (page) => page !== "https://celebrant-website.vercel.app/success",
    }),
  ],
});
