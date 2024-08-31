import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "hybrid",

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  integrations: [tailwind()],

  serviceWorker: true,
});
