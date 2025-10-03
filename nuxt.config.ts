export default defineNuxtConfig({
  compatibilityDate: "2025-10-02",
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/image"],
  css: ["~/assets/global.css"],
  devtools: { enabled: true },
  typescript: { strict: true, typeCheck: true },
  app: { head: { title: "CookingUp" } },
});
