<script setup lang="ts">
defineProps<{
  reasons: string[];
}>();
</script>

<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="mb-16">
      <h3 class="text-2xl font-bold text-gray-900 mb-8">
        <slot name="title" />
      </h3>
      <div class="space-y-4">
        <div v-for="reason in reasons" :key="reason" class="flex items-start">
          <icon name="lucide:check" class="w-6 h-6 mr-4 flex-shrink-0 text-green-500" />
          <span class="text-gray-700">{{ reason }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
