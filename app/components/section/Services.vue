<script setup lang="ts">
const services = [
  {
    title: "Колл-центр",
    description: "Организация горячих и холодных звонков под ключ",
    link: "/call-center",
    icon: "material-symbols:support-agent",
  },
  {
    title: "Набор персонала",
    description: "Оперативно найдем сотрудников для вашего бизнеса",
    link: "/recruiting",
    icon: "material-symbols:work-history",
  },
  {
    title: "Чат-боты под ключ",
    description: "Настроим чат-бот для автоматизации процессов",
    link: "/bots",
    icon: "material-symbols:chat",
  },
];
</script>

<template>
  <section class="grid md:grid-cols-3 gap-8 mb-16">
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
  </section>
</template>
