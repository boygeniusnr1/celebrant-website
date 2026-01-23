import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: "https://celebrant-website.vercel.app",
  output: "server",
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => page !== "https://celebrant-website.vercel.app/success",
    }),
  ],
});
