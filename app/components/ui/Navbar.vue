<template>
  <nav
    class="bg-gradient-to-r from-primaryDark to-emerald-900 text-white px-8 py-6 flex items-center justify-between mx-48 rounded-b-xl shadow-lg"
  >
    <NuxtLink to="/">
      <p
        class="font-bold text-3xl hover:cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        Cooking Up
      </p>
    </NuxtLink>
    <ul class="flex gap-4">
      <li>
        <NuxtLink
          to="/"
          :class="[
            'fancy-link',
            isActive('/') ? 'text-important font-semibold' : '',
          ]"
        >
          Início
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/receitas"
          :class="[
            'fancy-link',
            isActive('/receitas') ? 'text-important font-semibold' : '',
          ]"
        >
          Receitas
        </NuxtLink>
      </li>
      <li>
        <NuxtLink
          to="/despensa"
          :class="[
            'fancy-link',
            isActive('/despensa') ? 'text-important font-semibold' : '',
          ]"
        >
          Despensa
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const isActive = (path: string) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};
</script>
