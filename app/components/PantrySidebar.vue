<script setup lang="ts">
import { usePantry } from "../../stores/pantry";

const pantry = usePantry();
const input = ref("");

function add() {
  if (!input.value) return;
  pantry.add(input.value);
  input.value = "";
}
</script>

<template>
  <aside class="rounded-2xl border bg-white p-4 shadow">
    <h2 class="mb-3 text-lg font-semibold">Minha despensa</h2>
    <div class="flex gap-2">
      <input
        v-model="input"
        @keyup.enter="add"
        placeholder="Adicionar ingrediente"
        class="w-full rounded-md border px-3 py-2 outline-none focus:ring"
      />
      <button
        @click="add"
        class="rounded-md bg-emerald-600 px-3 py-2 text-white"
      >
        +
      </button>
    </div>
    <ul class="mt-3 space-y-2">
      <li
        v-for="i in pantry.items"
        :key="i.id"
        class="flex items-center justify-between rounded-md border px-3 py-1.5"
      >
        <span class="capitalize">{{ i.name }}</span>
        <button
          @click="pantry.remove(i.id)"
          class="text-slate-500 hover:text-red-600"
        >
          remover
        </button>
      </li>
    </ul>
  </aside>
</template>
