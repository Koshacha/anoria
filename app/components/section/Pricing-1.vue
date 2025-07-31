<script setup lang="ts">
const tariffs = [
  {
    name: "Старт",
    price: 15000,
    features: ["5 активных ботов", "1000 сообщений в месяц"],
  },
  {
    name: "Гибкий",
    price: 25000,
    features: ["25 активных ботов", "5000 сообщений в месяц", "Поддержка 24/7"],
  },
  {
    name: "Премиум",
    price: 60000,
    features: [
      "100 активных ботов",
      "Неограниченное количество сообщений",
      "Приоритетная поддержка 24/7",
    ],
  },
];
</script>

<template>
  <section class="py-20">
    <div class="container px-4 mx-auto">
      <div class="max-w-2xl mx-auto mb-16 text-center">
        <span class="font-bold tracking-wider uppercase text-primary"
          >Цены</span
        >
        <h2 class="text-4xl font-bold lg:text-5xl">Наши тарифы</h2>
      </div>
      <div class="flex flex-wrap items-stretch -mx-4">
        <div
          v-for="(tariff, index) in tariffs"
          :key="index"
          class="flex w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0"
        >
          <div
            class="flex flex-grow flex-col p-6 space-y-6 rounded sm:p-8"
            :class="{
              'bg-primary text-gray-50': index === 1,
              'text-gray-700 border border-gray-300': index !== 1,
            }"
          >
            <div class="space-y-2" :class="{ 'text-black': index !== 1 }">
              <h4 class="text-2xl font-bold">{{ tariff.name }}</h4>
              <span class="text-6xl font-bold"
                >{{ tariff.price.toLocaleString() }}
                <span class="text-sm tracking-wide"> в месяц</span>
              </span>
            </div>
            <ul class="flex-1 space-y-2">
              <li
                v-for="feature in tariff.features"
                :key="feature"
                class="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  class="flex-shrink-0 w-6 h-6"
                  :class="{
                    'fill-white': index === 1,
                    'fill-primary': index !== 1,
                  }"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            <app-button
              :rewrite-class="true"
              class="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded"
              :class="{
                'bg-white text-primary': index === 1,
                'bg-primary text-white': index !== 1,
              }"
              >Оставить заявку</app-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
