<script setup lang="ts">
defineProps<{
  reasons: string[];
  asSection?: boolean;
}>();
</script>

<template>
  <section id="why-us" class="mb-8">
    <app-container>
      <app-heading>
        <slot name="title" />
      </app-heading>
      <div class="space-y-4 max-w-fit mx-auto">
        <div v-for="reason in reasons" :key="reason" class="flex items-start border rounded-lg border-gray-200 bg-gray-100 p-4">
          <icon
            name="lucide:check"
            class="w-6 h-6 mr-4 flex-shrink-0 text-green-500"
          />
          <span class="text-gray-700">{{ reason }}</span>
        </div>
      </div>
    </app-container>
  </section>
</template>
