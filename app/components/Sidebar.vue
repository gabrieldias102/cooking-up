<template>
  <aside class="ml-8 rounded-2xl border p-4 shadow-lg bg-white">
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-col items-center justify-center gap-2">
        <NuxtImg
          :src="'https://picsum.photos/400/400?blur=3'"
          alt=""
          class="h-40 w-40 rounded-full border-2 border-primary"
        />
        <div
          class="flex flex-col justify-center text-sm items-center text-text"
        >
          <div class="flex flex-row items-center gap-1">
            <p class="font-semibold">0</p>
            <p class="">Itens na despensa</p>
          </div>
          <div class="flex flex-row items-center gap-1">
            <p class="font-semibold">0</p>
            <p class="">Receitas Salvas</p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-end gap-3">
        <div class="flex flex-col items-center gap-3">
          <SidebarButton
            variant="outline"
            href="/receitas"
            class="p-2 bg-white"
          >
            Fulano de Tal
          </SidebarButton>

          <SidebarButton
            variant="primary"
            href="/receitas"
            class="p-2 shadow-lg"
            >Receitas Salvas</SidebarButton
          >
          <SidebarButton
            variant="primary"
            href="/receitas"
            class="p-2 shadow-lg"
            >Adicionar Ingredientes</SidebarButton
          >
        </div>
        <SidebarButton
          href="/configuracoes"
          icon="cog"
          aria-label="Configurações"
          class="p-2 shadow-lg border border-gray-300"
        />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SidebarButton from "~/components/ui/SidebarButton.vue";
</script>
