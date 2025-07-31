<script setup lang="ts">
defineProps<{
  steps: {
    title: string;
    description: string;
  }[];
}>();
</script>

<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl mb-10 lg:max-w-2xl md:mb-12">
      <h2
        class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl"
      >
        Как мы работаем
      </h2>
    </div>
    <div class="grid gap-8 row-gap-8 lg:grid-cols-3">
      <div v-for="(step, index) in steps" :key="index" class="sm:text-center">
        <div
          class="flex items-center justify-center w-20 h-20 mb-4 text-4xl font-extrabold rounded-full text-frost-tint bg-primary sm:mx-auto"
        >
          {{ index + 1 }}
        </div>
        <h6 class="mb-2 font-semibold leading-5 text-lg">{{ step.title }}</h6>
        <p class="max-w-xs mb-3 text-gray-900 sm:mx-auto text-balance">
          {{ step.description }}
        </p>
      </div>
    </div>
  </div>
</template>
