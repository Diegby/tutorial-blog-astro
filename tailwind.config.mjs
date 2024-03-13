/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "picton-blue": "#00A7E1",
        "rich-black": "#00171F",
        "prussian-blue": "#003459",
        cerulean: "#007EA7",
      },
    },
  },
  plugins: [],
};
