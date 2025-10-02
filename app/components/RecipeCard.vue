<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  imageUrl?: string;
  have: number;
  need: number;
  missing: string[];
  timeMin?: number;
  tags?: string[];
}>();
defineEmits<{ (e: "see"): void }>();
</script>

<template>
  <article
    class="overflow-hidden rounded-2xl border bg-white shadow transition hover:shadow-lg"
  >
    <img
      :src="imageUrl || 'https://picsum.photos/600/400?blur=3'"
      alt=""
      class="h-40 w-full object-cover"
    />
    <div class="space-y-2 p-4">
      <h3 class="line-clamp-2 text-lg font-semibold">{{ title }}</h3>
      <div class="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span>✓ {{ have }}/{{ need }}</span>
        <span v-if="timeMin">• {{ timeMin }} min</span>
      </div>
      <div v-if="missing?.length" class="text-xs text-amber-700">
        Faltando: {{ missing.join(", ") }}
      </div>
      <button
        @click="$emit('see')"
        class="mt-2 rounded-md bg-emerald-600 px-3 py-2 text-white"
      >
        Ver receita
      </button>
    </div>
  </article>
</template>
