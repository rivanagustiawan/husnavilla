import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBaseUrl: process.env.BASE_API_URL,
    }
  },
  ssr: false,

  devtools: { enabled: true },
  modules: ["@nuxt/ui","@vueuse/motion/nuxt"],
})