<script setup lang="ts">
defineProps<{
  headers: string[];
}>();
</script>
<template>
  <div class="overflow-x-auto rounded-lg border border-gray-200 mb-4">
    <table class="min-w-full max-w-full divide-y-2 divide-gray-200 bg-white text-sm">
      <thead class="text-left">
        <tr>
          <th
            v-for="(header, index) in headers"
            :key="index"
            class="whitespace-nowrap px-4 py-2 font-medium text-gray-900"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
        <slot />
      </tbody>
    </table>
  </div>
</template>
