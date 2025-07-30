<script setup lang="ts">
const reasons = [
  "Индивидуальный подход",
  "Опытные специалисты",
  "Современные технологии",
];

const mainStat = {
  value: 142500,
  label: "холодных и горячих звонков",
};

const stats = [
  {
    value: 3500,
    label: "набранных сотрудников",
    addition: 25,
  },
  {
    value: 5000,
    label: "автоматических ответов",
    addition: 100,
  },
];
</script>

<template>
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="mb-16">
      <h3 class="text-2xl font-bold text-gray-900 mb-8">
        Почему выбирают Anvoria? 
      </h3>
      <div class="space-y-4">
        <div v-for="reason in reasons" :key="reason" class="flex items-start">
          <svg
            class="w-6 h-6 text-green-500 mr-3 mt-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <span class="text-gray-700">{{ reason }}</span>
        </div>
      </div>
    </div>
    <div class="grid items-center lg:grid-cols-12 gap-6 lg:gap-12">
      <div class="lg:col-span-4">
        <div class="lg:pe-6 xl:pe-12">
          <p class="text-6xl font-bold leading-10 text-blue-600">
            {{ mainStat.value }}
          </p>
          <p class="mt-2 sm:mt-3 text-gray-500">{{ mainStat.label }}</p>
        </div>
      </div>

      <div
        class="lg:col-span-8 relative lg:before:absolute lg:before:top-0 lg:before:-start-12 lg:before:w-px lg:before:h-full lg:before:bg-gray-200 lg:"
      >
        <div
          class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 sm:gap-8"
        >
          <div v-for="(stat, index) in stats" :key="index">
            <p class="text-3xl font-semibold text-blue-600">{{ stat.value }}</p>
            <p class="mt-1 text-gray-500">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
