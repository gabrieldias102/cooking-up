<template>
  <component
    :is="href ? NuxtLink : 'button'"
    :to="href"
    :type="href ? undefined : type"
    :class="[
      'rounded-lg px-4 py-2 font-medium transition-all duration-300 text-center w-full',
      variantClasses,
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { NuxtLink } from "#components";

const props = defineProps<{
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  type?: "button" | "submit" | "reset";
}>();

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary text-white hover:bg-primaryDark";
    case "secondary":
      return "bg-secondary text-white hover:bg-secondary/90";
    default:
      return "bg-gray-200 text-gray-900 hover:bg-gray-300";
  }
});
</script>
