<script setup lang="ts">
const model = defineModel<boolean>();
</script>

<template>
  <label class="flex items-center space-x-3 cursor-pointer">
    <div class="relative">
      <input
        v-model="model"
        type="checkbox"
        class="sr-only peer"
        v-bind="$attrs"
      />
      <div
        class="w-6 h-6 bg-gray-200 border border-gray-400 rounded-md peer-checked:bg-primary peer-checked:border-primary transition-all duration-300"
      ></div>
      <icon
        name="lucide:check"
        class="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100 transition-all duration-300"
      />
    </div>
    <span class="text-gray-600"><slot /></span>
  </label>
</template>
