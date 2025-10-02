<template>
  <article
    class="overflow-hidden rounded-2xl border bg-white shadow transition hover:shadow-lg"
  >
    <img
      :src="'https://picsum.photos/600/400?blur=3'"
      alt=""
      class="h-40 w-full object-cover"
    />
    <div class="space-y-2 p-4">
      <h3 class="line-clamp-2 text-lg font-semibold">Titulo</h3>
      <div class="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        <span>✓ 1/10</span>
        <span>• 15 min</span>
      </div>
      <div class="text-xs text-amber-700">Faltando: várias coisas</div>
      <button class="mt-2 rounded-md bg-emerald-600 px-3 py-2 text-white">
        Ver receita
      </button>
    </div>
  </article>
</template>
