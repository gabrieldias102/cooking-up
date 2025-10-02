export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vueuse/nuxt"],
  devtools: { enabled: true },
  typescript: { strict: true, typeCheck: true },
  app: { head: { title: "Receitas pelo que tenho" } },
});
