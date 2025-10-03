<template>
  <aside class="ml-8 rounded-2xl border p-4 shadow">
    <div class="flex flex-col items-center gap-4">
      <div>
        <NuxtImg
          :src="'https://picsum.photos/400/400?blur=3'"
          alt=""
          class="h-40 w-40 rounded-full"
        />
      </div>

      <div class="flex flex-col items-center gap-2">
        <SidebarButton variant="primary" href="/receitas">
          Fulano de Tal
        </SidebarButton>

        <SidebarButton variant="primary" href="/receitas"
          >Receitas Salvas</SidebarButton
        >
        <SidebarButton variant="primary" href="/receitas"
          >Adicionar Ingredientes</SidebarButton
        >
        <SidebarButton variant="primary" href="/configuracoes">
          <v-icon name="fa-cog" />
        </SidebarButton>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SidebarButton from "~/components/ui/SidebarButton.vue";
</script>
