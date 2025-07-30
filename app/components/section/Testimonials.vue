<script setup lang="ts">
import data from "@/assets/testimonials.json";

const carouselProps = {
  breakpoints: {
    0: {
      itemsToShow: 1,
    },
    768: {
      itemsToShow: 2,
    },
    1024: {
      itemsToShow: 3,
    },
  },
  autoplay: 2000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<template>
  <nuxt-carousel v-bind="carouselProps">
    <nuxt-slide v-for="(item, index) in data" :key="index">
      <testimonial :data="item" />
    </nuxt-slide>

    <template #addons>
      <nuxt-pagination />
    </template>
  </nuxt-carousel>
</template>

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__viewport {
  padding-bottom: 15px;
}
</style>
