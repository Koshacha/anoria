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
    "@vee-validate/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      bodyAttrs: {
        class: "bg-white text-black font-display",
      },
    },
  },

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

  tailwindcss: {
    config: {
      content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./nuxt.config.{js,ts}",
        "./app/app.vue",
      ],
      theme: {
        extend: {
          fontFamily: {
            display: [
              "Inter",
              "Helvetica Neue",
              "Segoe UI",
              "Arial",
              "sans-serif",
            ],
          },
          colors: {
            "anvoria-blue": "#1A4EFF",
            "graphite-navy": "#0E1B3F",
            "cloud-blue": "#EAF0FF",
            white: "#FFFFFF",
            "frost-tint": "#C8D7FF",
            "ocean-indigo": "#0A48D0",

            primary: "#1A4EFF",
          },
        },
      },
    },
  },

  // mongoose: {
  //   uri: process.env.MONGO_URI
  // }
});
