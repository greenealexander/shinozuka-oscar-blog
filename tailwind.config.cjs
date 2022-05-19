module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
  ],
  theme: {
    extends: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "--color-mark": "#5468ff",
          "--color-background": "#fff",
          "--color-selected": "#f5f5fa",
          "--color-text": "#23263b",
          "--color-input-icon": "#777",
          "--color-source-icon": "rgba(80, 80, 80, 0.32)",
        },
      },
      {
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          "--color-mark": "#fff",
          "--color-background": "#23263b",
          "--color-selected": "#111432",
          "--color-text": "#d6d6e7",
          "--color-input-icon": "#d6d6e777",
          "--color-source-icon": "#d6d6e777",
        },
      },
    ],
  },
};
