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
    // 'nuxt-mongoose'
    "motion-v/nuxt",
    "vue3-carousel-nuxt",
    "@vee-validate/nuxt"
  ],

  carousel: {
    prefix: "nuxt",
  },

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