<script setup lang="ts">
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
  <section id="stats" class="py-6 lg:py-6 grid place-content-center">
    <app-container>
      <div class="grid items-center place-content-center gap-6 lg:gap-12 text-center">
        <div class="lg:col-span-8">
          <div class="lg:pe-6 xl:pe-12">
            <p class="text-6xl md:text-8xl font-bold leading-10 text-blue-600">
              {{ mainStat.value }}
            </p>
            <p class="mt-2 sm:mt-3 text-gray-500">{{ mainStat.label }}</p>
          </div>
        </div>

        <div
          class="lg:col-span-8 relative"
        >
          <div
            class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 sm:gap-8"
          >
            <div v-for="(stat, index) in stats" :key="index">
              <p class="text-3xl font-semibold text-blue-600">
                {{ stat.value }}
              </p>
              <p class="mt-1 text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>
