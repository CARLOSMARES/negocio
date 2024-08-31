import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import speedInsights from "@vercel/speed-insights";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",

  adapter: vercel({
    webAnalytics: { enabled: true },
  }),

  integrations: [
    tailwind(),
    speedInsights({
      apiKey: "y4zFMccKl5wjR3RzeQjLNxgi", // Reemplaza esto con tu API Key de Vercel Speed Insights
    }),
  ],
  serviceWorker: true,
  output: "server",
  adapter: vercel(),
});
