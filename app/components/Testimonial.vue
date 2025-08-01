<script setup lang="ts">
defineProps<{
  data: {
    quote: string;
    text: string;
    author: string;
    position: string;
  };
}>();
</script>

<template>
  <div
    class="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
  >
    <div class="flex items-center">
      <icon
        v-for="i in 5"
        :key="i"
        name="i-heroicons-star-solid"
        class="h-5 w-5 text-yellow-400"
      />
    </div>
    <blockquote class="mt-4 flex-grow">
      <p class="text-lg font-semibold text-graphite-navy">"{{ data.quote }}"</p>
      <p class="mt-2 text-base text-gray-600">{{ data.text }}</p>
    </blockquote>
    <footer class="mt-6">
      <div>
        <p class="font-semibold text-graphite-navy">{{ data.author }}</p>
        <p class="text-sm text-gray-500">{{ data.position }}</p>
      </div>
    </footer>
  </div>
</template>
