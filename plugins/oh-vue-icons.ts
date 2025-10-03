// plugins/oh-vue-icons.ts
import { defineNuxtPlugin } from "nuxt/app";
import type { NuxtApp } from "nuxt/app";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FaCog } from "oh-vue-icons/icons";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
  addIcons(FaCog);
  nuxtApp.vueApp.component("v-icon", OhVueIcon);
});
