<template>
  <swiper
    :slides-per-view="slidesPerView"
    :centered-slides="slidesPerView === 1"
    :centered-slides-bounds="slidesPerView === 1"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 4000, disableOnInteraction: true }"
    :modules="modules"
    class="w-[75vw] my-8"
  >
    <swiper-slide
      v-for="(recipe, index) in recipes"
      :key="index"
      class="!flex !justify-center items-center"
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

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import recipes from "~/mocks/recipes";

const modules = [Pagination, Autoplay];

const slidesPerView = ref(5);

onMounted(() => {
  const w = window.innerWidth;
  slidesPerView.value = w < 640 ? 1 : w < 1024 ? 3 : 5;
});
</script>
