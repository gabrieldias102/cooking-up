<template>
  <nav
    :class="[
      'relative z-50 bg-gradient-to-r from-primaryDark to-emerald-900 text-white px-4 mx-4 md:mx-48 sm:px-8 py-4 flex items-center justify-between rounded-b-xl shadow-lg',
    ]"
  >
    <NuxtLink to="/">
      <p
        class="font-bold text-2xl sm:text-3xl hover:cursor-pointer transition-transform duration-300 hover:scale-110"
      >
        Cooking Up
      </p>
    </NuxtLink>

    <button @click="menuOpen = !menuOpen" class="sm:hidden focus:outline-none">
      <svg
        v-if="!menuOpen"
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>

    <!-- desktop -->
    <ul class="hidden sm:flex gap-6">
      <li>
        <NuxtLink
          to="/"
          :class="[
            'fancy-link',
            isActive('/') ? 'text-important font-semibold' : '',
          ]"
          >Início</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/receitas"
          :class="[
            'fancy-link',
            isActive('/receitas') ? 'text-important font-semibold' : '',
          ]"
          >Receitas</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/despensa"
          :class="[
            'fancy-link',
            isActive('/despensa') ? 'text-important font-semibold' : '',
          ]"
          >Despensa</NuxtLink
        >
      </li>
    </ul>
  </nav>

  <transition name="fade">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
      @click="menuOpen = false"
    />
  </transition>

  <transition name="slide">
    <ul
      v-if="menuOpen"
      class="fixed inset-y-0 right-0 z-50 sm:hidden flex flex-col gap-4 bg-primaryDark text-white w-1/2 max-w-[20rem] p-6 shadow-2xl rounded-l-xl"
    >
      <li>
        <NuxtLink
          to="/"
          @click="menuOpen = false"
          :class="[
            'fancy-link',
            isActive('/') ? 'text-important font-semibold' : '',
          ]"
          >Início</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/receitas"
          @click="menuOpen = false"
          :class="[
            'fancy-link',
            isActive('/receitas') ? 'text-important font-semibold' : '',
          ]"
          >Receitas</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          to="/despensa"
          @click="menuOpen = false"
          :class="[
            'fancy-link',
            isActive('/despensa') ? 'text-important font-semibold' : '',
          ]"
          >Despensa</NuxtLink
        >
      </li>
    </ul>
  </transition>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useHead } from "#imports";

const route = useRoute();
const menuOpen = ref(false);
const isActive = (path: string) =>
  path === "/" ? route.path === "/" : route.path.startsWith(path);

watch(menuOpen, (open) => {
  useHead({
    bodyAttrs: {
      class: open ? "overflow-hidden" : "",
    },
  });
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
