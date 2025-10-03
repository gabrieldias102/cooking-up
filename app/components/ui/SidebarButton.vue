<template>
  <component
    :is="href ? NuxtLink : 'button'"
    :to="href"
    :type="href ? undefined : type"
    :aria-label="ariaLabelComputed"
    :class="[
      'hover:scale-110 inline-flex w-full items-center justify-center gap-2 rounded-lg p-1 text-center font-medium transition-all duration-300',
      variantClasses,
      iconOnly ? 'aspect-square !w-auto' : '',
    ]"
  >
    <!-- Ícone à esquerda (quando iconRight = false) -->
    <template v-if="icon && !iconRight">
      <font-awesome-icon :icon="[iconPack, icon]" :size="props.size" />
    </template>

    <!-- Texto/slot -->
    <slot />

    <!-- Ícone à direita -->
    <template v-if="icon && iconRight">
      <font-awesome-icon :icon="[iconPack, icon]" :size="props.size" />
    </template>
  </component>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";

library.add(faCog);

const props = defineProps<{
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  size?: "xs" | "sm" | "lg" | "xl" | "2x";
  type?: "button" | "submit" | "reset";
  icon?: string;
  iconPack?: "fas" | "far" | "fab";
  iconRight?: boolean;
  ariaLabel?: string;
}>();

const iconOnly = computed(() => !useSlots().default);
const ariaLabelComputed = computed(() =>
  iconOnly.value ? props.ariaLabel ?? props.icon ?? "button" : undefined
);

const variantClasses = computed(() => {
  switch (props.variant) {
    case "primary":
      return "bg-primary text-white hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary/40";
    case "secondary":
      return "bg-secondary text-white hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-secondary/40";
    case "outline":
      return "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300/50";
    default:
      return "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300/50";
  }
});
</script>
