<script setup lang="ts">
const { daysSinceBaseDate, secondsSinceVisit } = useClock();

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

const mainStatCurrentValue = computed(() => {
  return mainStat.value + 1 * secondsSinceVisit.value;
});

const statsCalculated = computed(() => {
  return stats.map((stat) => {
    return {
      ...stat,
      todayValue: stat.value + stat.addition * daysSinceBaseDate,
    };
  });
});
</script>

<template>
  <section id="stats" class="py-8 lg:py-16 grid place-content-center">
    <app-container>
      <div
        class="grid grid-cols-2 lg:grid-cols-12 items-center gap-6 lg:gap-12"
      >
        <div class="lg:col-span-5">
          <div class="lg:pe-6 xl:pe-12">
            <p
              class="text-6xl md:text-8xl font-bold leading-10 text-blue-600 tabular-nums"
            >
              <animated-number
                :from="mainStat.value"
                :to="mainStatCurrentValue"
              />
            </p>
            <p class="mt-2 sm:mt-3 text-gray-500">{{ mainStat.label }}</p>
          </div>
        </div>

        <div class="col-span-2 lg:col-span-7 relative">
          <div
            class="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 sm:gap-8"
          >
            <div v-for="(stat, index) in statsCalculated" :key="index">
              <p class="text-3xl font-semibold text-blue-600 tabular-nums">
                <animated-number :from="stat.value" :to="stat.todayValue" />
              </p>
              <p class="mt-1 text-gray-500">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>
