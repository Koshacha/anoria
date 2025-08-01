<script setup lang="ts">
defineProps<{
  steps: {
    title: string;
    description: string;
    icon?: string;
  }[];
}>();
</script>

<template>
  <section id="why-us" class="mb-8 md:mb-16">
    <app-container>
      <app-heading>
        <template #chip>Как мы работаем</template>
        Процесс работы
      </app-heading>
      <div class="grid gap-8 row-gap-0 md:grid-cols-3">
        <div
          v-for="(step, index) in steps"
          :key="index"
          class="relative text-center"
        >
          <div
            class="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 sm:w-24 sm:h-24"
          >
            <icon
              :name="step.icon ?? 'lucide:check'"
              class="w-12 h-12 text-primary sm:w-14 sm:h-14"
            />
          </div>
          <h6 class="mb-2 text-2xl font-extrabold text-balance">
            {{ step.title }}
          </h6>
          <p class="max-w-md mb-3 text-gray-700 sm:mx-auto">
            {{ step.description }}
          </p>
          <div
            v-if="index < steps.length - 1"
            class="top-0 right-0 flex items-center justify-center h-24 md:-mr-8 md:absolute"
          >
            <svg
              class="w-8 text-gray-400 transform rotate-90 md:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line
                fill="none"
                stroke-miterlimit="10"
                x1="2"
                y1="12"
                x2="22"
                y2="12"
              ></line>
              <polyline
                fill="none"
                stroke-miterlimit="10"
                points="15,5 22,12 15,19 "
              ></polyline>
            </svg>
          </div>
        </div>
      </div>
    </app-container>
  </section>
</template>
