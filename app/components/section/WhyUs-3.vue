<script setup lang="ts">
defineProps<{
  reasons: string[];
}>();
</script>

<template>
  <section id="why-we" class="py-16 md:py-20">
    <app-container>
      <app-heading>
        <slot name="title" />
      </app-heading>
      <div class="grid gap-8 md:grid-cols-3">
        <div
          v-for="(reason, index) in reasons"
          :key="index"
          class="bg-white text-gray-900 border-2 border-primary rounded-2xl p-8 flex flex-col items-center text-center shadow-xl transition-transform duration-300 hover:-translate-y-2"
        >
          <div
            class="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6"
          >
            <icon name="lucide:check" class="h-12 w-12 text-green-500" />
          </div>
          <h3 class="text-xl font-semibold text-balance">
            {{ reason }}
          </h3>
        </div>
      </div>
    </app-container>
  </section>
</template>