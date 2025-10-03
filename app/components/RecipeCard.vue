<script setup lang="ts">
const props = defineProps({
  imageSrc: { type: String, default: "https://picsum.photos/600/400" },
  title: { type: String, default: "Titulo" },
  ownedIngredients: { type: [String, Number], default: "1/10" },
  totalIngredients: { type: [String, Number], default: "1/10" },
  time: { type: String, default: "15 min" },
  missingItems: { type: String, default: "Faltando: várias coisas" },
});
</script>

<template>
  <article
    class="w-64 h-96 mb-12 overflow-hidden rounded-2xl border bg-white shadow transition hover:shadow-lg p-4 flex flex-col items-center"
  >
    <img :src="props.imageSrc" class="h-40 w-48 object-cover rounded-lg" />
    <div class="space-y-2 p-4 flex justify-center flex-col items-center">
      <h3 class="h-14 line-clamp-2 text-lg font-semibold flex text-center">
        {{ props.title }}
      </h3>
      <div
        class="flex flex-wrap items-center justify-center gap-2 text-sm text-slate-600"
      >
        <span
          >✓ {{ props.ownedIngredients }} / {{ props.totalIngredients }}</span
        >
        <span>• {{ props.time }}</span>
      </div>
      <div class="h-9 text-xs text-amber-700 flex justify-center text-center">
        × {{ props.missingItems }}
      </div>
      <button
        class="bg-primary text-white hover:bg-primaryDark focus:outline-none focus:ring-2 focus:ring-primary/40 hover:scale-110 inline-flex w-full items-center justify-center gap-2 rounded-lg p-1 text-center font-medium transition-all duration-300"
      >
        Acessar Receita
      </button>
    </div>
  </article>
</template>
