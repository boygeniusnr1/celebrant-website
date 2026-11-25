import { defineConfig, envField } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/serverless";
import keystatic from "@keystatic/astro";

export default defineConfig({
  site: "https://celebrant-website.vercel.app",
  output: "server",
  adapter: vercel(),
  env: {
    schema: {
      KEYSTATIC_GITHUB_CLIENT_ID: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      KEYSTATIC_GITHUB_CLIENT_SECRET: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
      KEYSTATIC_SECRET: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@keystatic/astro/api"],
    },
  },
  integrations: [
    react(),
    keystatic(),
    sitemap({
      filter: (page) => page !== "https://celebrant-website.vercel.app/success",
    }),
  ],
});
