<script setup lang="ts">
defineProps<{
  service: string,
  tariffs: {
    name: string;
    forWhat?: string;
    price: number;
    features: string[];
  }[];
}>();
</script>

<template>
  <section id="prices" class="py-10 lg:py-20">
    <app-container>
      <app-heading>
        <template #chip>
          <nuxt-link
            to="/tariffs"
            class="border border-gray-200/50 rounded-3xl px-4 py-2"
          >
            Цены
          </nuxt-link>
        </template>
        Наши тарифы
      </app-heading>
      <div class="flex flex-wrap items-stretch">
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
              <span class="flex flex-wrap items-baseline text-6xl font-bold"
                ><span class="text-3xl mr-2">от </span>
                {{ tariff.price.toLocaleString('ru-RU') }}
                <span class="text-sm tracking-wide">
                  {{ tariff.forWhat ?? "в мес." }}</span
                >
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
            <nuxt-link
              :to="`/tariffs#${service}`"
              class="flex items-center gap-1 text-sm hover:underline"
              :class="{
                'text-white': index === 1,
                'text-primary': index !== 1,
              }"
            >
              Подробное описание <icon name="lucide:arrow-right" class="w-4 h-4" />
            </nuxt-link>
            <form-modal :tariff="tariff.name">
              <template #default="{ openModal }">
                <app-button
                  @click="openModal()"
                  :rewrite-class="true"
                  class="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded"
                  :class="{
                    'bg-white text-primary': index === 1,
                    'bg-primary text-white': index !== 1,
                  }"
                  >Оставить заявку</app-button
                >
              </template>
            </form-modal>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>
