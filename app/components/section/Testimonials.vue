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
  autoplay: 4000,
  wrapAround: true,
  pauseAutoplayOnHover: true,
};
</script>

<template>
  <section id="testimonials" class="my-16">
    <app-container>
      <nuxt-carousel v-bind="carouselProps">
        <nuxt-slide v-for="(item, index) in data" :key="index">
          <testimonial :data="item" />
        </nuxt-slide>

        <template #addons>
          <nuxt-navigation />
        </template>
      </nuxt-carousel>
    </app-container>
  </section>
</template>

<style>
.carousel__slide {
  padding: 10px;
}

.carousel__viewport {
  padding-bottom: 15px;
  cursor: grab;
}

.carousel__prev,
.carousel__next {
  background-color: #3b82f6;
  border-radius: 100%;
  color: white;
  width: 2rem; 
  height: 2rem;
  transition: background-color 0.2s;
}

@media (width < 768px) {
  .carousel__prev,
  .carousel__next {
    width: 1.5rem;
    height: 1.5rem;
  }
}

.carousel__prev:hover,
.carousel__next:hover {
  background-color: #2563eb; /* Более темный оттенок для hover-эффекта */
}

.carousel__icon {
  color: white;
}
</style>
