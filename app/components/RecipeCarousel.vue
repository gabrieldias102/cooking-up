<template>
  <swiper
    :slides-per-view="5"
    :pagination="{ clickable: true }"
    :autoplay="{
      delay: 3000,
      disableOnInteraction: false,
    }"
    :modules="modules"
    class="w-[75vw] my-8"
  >
    <swiper-slide
      v-for="(recipe, index) in recipes"
      :key="index"
      class="flex justify-center"
    >
      <RecipeCard
        :image-src="recipe.imageSrc"
        :title="recipe.title"
        :owned-ingredients="recipe.ownedIngredients"
        :total-ingredients="recipe.totalIngredients"
        :time="recipe.time"
        :missing-items="recipe.missingItems"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const recipes = [
      {
        imageSrc: "https://picsum.photos/600/400?random=2",
        title: "Salada Caesar com Frango Grelhado",
        ownedIngredients: "7",
        totalIngredients: "10",
        time: "30 min",
        missingItems: "Alface romana, Croutons",
      },
      {
        imageSrc: "https://picsum.photos/600/400?random=3",
        title: "Espaguete à Carbonara",
        ownedIngredients: "6",
        totalIngredients: "8",
        time: "25 min",
        missingItems: "Queijo Parmesão, Bacon",
      },
      {
        imageSrc: "https://picsum.photos/600/400?random=4",
        title: "Frango Grelhado com Legumes",
        ownedIngredients: "5",
        totalIngredients: "7",
        time: "35 min",
        missingItems: "Brócolis, Cenoura",
      },
      {
        imageSrc: "https://picsum.photos/600/400?random=2",
        title: "Salada Caesar com Frango Grelhado",
        ownedIngredients: "7",
        totalIngredients: "10",
        time: "30 min",
        missingItems: "Alface romana, Croutons",
      },
      {
        imageSrc: "https://picsum.photos/600/400?random=3",
        title: "Espaguete à Carbonara",
        ownedIngredients: "6",
        totalIngredients: "8",
        time: "25 min",
        missingItems: "Queijo Parmesão, Bacon",
      },
      {
        imageSrc: "https://picsum.photos/600/400?random=4",
        title: "Frango Grelhado com Legumes",
        ownedIngredients: "5",
        totalIngredients: "7",
        time: "35 min",
        missingItems: "Brócolis, Cenoura",
      },
    ];

    return { modules: [Pagination, Autoplay], recipes };
  },
};
</script>
