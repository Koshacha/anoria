<script setup lang="ts">
defineProps<{
  services: {
    title: string;
    description: string;
    link?: string;
    icon: string;
  }[];
}>();
</script>

<template>
  <section id="services" class="mb-16">
    <app-container>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-white rounded-lg p-8 text-center border border-gray-200 shadow-sm transition-shadow has-[a:hover]:shadow-md"
        >
          <div
            class="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <icon :name="service.icon" class="w-8 h-8 text-white" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-4">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 mb-6">
            {{ service.description }}
          </p>
          <nuxt-link
            v-if="service.link"
            :to="service.link"
            class="text-ocean-indigo font-medium hover:text-indigo-700 flex items-center justify-center group/link"
          >
            Подробнее
            <icon
              name="material-symbols:chevron-right-rounded"
              class="w-5 h-5 ml-1 group-hover/link:translate-x-1 transition-transform"
            />
          </nuxt-link>
        </div>
      </div>
    </app-container>
  </section>
</template>
