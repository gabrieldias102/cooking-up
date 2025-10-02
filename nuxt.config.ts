export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    ["@pinia/nuxt", { autoImports: ["defineStore"] }],
    "@vueuse/nuxt",
  ],
  css: ["~/assets/global.css"],
  devtools: { enabled: true },
  typescript: { strict: true, typeCheck: true },
  app: { head: { title: "CookingUp" } },
});
