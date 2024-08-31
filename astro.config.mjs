import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import SpeedInsights from "@vercel/speed-insights/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  integrations: [tailwind()],
  serviceWorker: true,
  output: "server",
  adapter: vercel(),
});
