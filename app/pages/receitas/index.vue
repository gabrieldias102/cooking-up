<script setup lang="ts">
import { useRecipes } from "../../../stores/recipes";
const recipes = useRecipes();
</script>

<template>
  <section>
    <h2 class="mb-3 text-lg font-semibold">Resultados</h2>
    <div v-if="recipes.loading">Carregando…</div>
    <div v-else class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <RecipeCard
        v-for="r in recipes.results"
        :key="r.id"
        v-bind="r"
        @see="navigateTo(`/receitas/${r.id}`)"
      />
    </div>
  </section>
</template>
