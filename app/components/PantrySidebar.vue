<template>
  <aside class="rounded-2xl border bg-white p-4 shadow">
    <h2 class="mb-3 text-lg font-semibold">Minha despensa</h2>
    <div class="flex gap-2">
      <input
        placeholder="Adicionar ingrediente"
        class="w-full rounded-md border px-3 py-2 outline-none focus:ring"
      />
      <button class="rounded-md bg-emerald-600 px-3 py-2 text-white">+</button>
    </div>
    <ul class="mt-3 space-y-2">
      <li
        class="flex items-center justify-between rounded-md border px-3 py-1.5"
      >
        <span class="capitalize"> Arroz </span>
        <button class="text-slate-500 hover:text-red-600">remover</button>
      </li>
    </ul>
  </aside>
</template>
