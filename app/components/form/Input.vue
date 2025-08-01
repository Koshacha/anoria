<script setup lang="ts">
const model = defineModel<string>();
</script>

<template>
  <input
    v-model="model"
    type="text"
    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-transparent outline-none transition-all"
  />
</template>
