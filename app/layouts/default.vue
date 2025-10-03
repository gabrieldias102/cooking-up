<template>
  <div class="flex flex-col min-h-screen bg-gray-100">
    <Navbar />
    <main class="flex flex-row my-12 gap-4">
      <Sidebar class="hidden md:block w-1/6" />
      <slot class="w-4/6" />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/ui/Navbar.vue";
import Footer from "~/components/ui/Footer.vue";
</script>
