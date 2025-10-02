import { defineStore } from "pinia";

export const usePantry = defineStore("pantry", {
  state: () => ({
    items: [] as Array<{ id: string; name: string }>,
  }),
  actions: {
    add(name: string) {
      name = name.trim().toLowerCase();
      if (!name) return;
      if (!this.items.some((i) => i.name === name)) {
        this.items.push({ id: crypto.randomUUID(), name });
      }
    },
    remove(id: string) {
      this.items = this.items.filter((i) => i.id !== id);
    },
    clear() {
      this.items = [];
    },
  },
});
