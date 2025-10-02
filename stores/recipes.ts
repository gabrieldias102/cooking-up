import { defineStore } from "pinia";

type RecipeCard = {
  id: string;
  title: string;
  imageUrl?: string;
  have: number;
  need: number;
  missing: string[];
  timeMin?: number;
  tags?: string[];
};

export const useRecipes = defineStore("recipes", {
  state: () => ({
    results: [] as RecipeCard[],
    loading: false,
  }),
  actions: {
    async searchByPantry(pantryNames: string[]) {
      this.loading = true;
      try {
        const response = await fetch("/api/recipes.search", {
          method: "POST",
          body: JSON.stringify({ pantry: pantryNames }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        this.results = data;
      } finally {
        this.loading = false;
      }
    },
  },
});
