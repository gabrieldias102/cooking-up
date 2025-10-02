<template>
  <main class="rounded-2xl border bg-white p-6 shadow">
    <h2 class="text-xl font-semibold">
      Comece adicionando alguns ingredientes
    </h2>
    <p class="text-slate-600">Ex.: ovo, leite, tomate, farinha…</p>
    <div class="mt-4 flex gap-2">
      <NuxtLink
        to="/despensa"
        class="rounded-md bg-slate-800 px-4 py-2 text-white"
        >Abrir despensa</NuxtLink
      >
      <button class="rounded-md bg-emerald-600 px-4 py-2 text-white">
        Ver receitas
      </button>
    </div>
  </main>
</template>
