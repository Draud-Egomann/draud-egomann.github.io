// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // https://tailwindcss.com/docs/guides/nuxtjs
  css: ["~/assets/css/main.css"],

  // https://nuxt.com/docs/guide/directory-structure/composables
  imports: {
    dirs: ["composables/**"],
  },

  // https://tailwindcss.com/docs/guides/nuxtjs
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
