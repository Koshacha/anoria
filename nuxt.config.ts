// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxtjs/tailwindcss",
    "motion-v/nuxt",
    // 'nuxt-mongoose'
  ],

  fonts: {
    families: [
      {
        name: "Inter",
        provider: "google",
        weights: ["400", "500", "600", "700"],
      },
    ],
  },

  // mongoose: {
  //   uri: process.env.MONGO_URI
  // }
});
