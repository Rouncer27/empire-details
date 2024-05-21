import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://empire-details.com",
  integrations: [sitemap()],
  image: {
    domains: ["empiredetails.swbdatabases3.com"],
  },
});
