import { defineConfig } from "astro/config";
import solid from "@astrojs/solid-js";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://shinozukaoscar.netlify.com",
  integrations: [solid(), tailwind(), sitemap()],
  markdown: { drafts: true },
});
