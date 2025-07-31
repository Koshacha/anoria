<script setup lang="ts">
const { error } = defineProps<{
  error: NuxtError;
}>();

useHead({
  title: "Страница не найдена",
});
</script>

<template>
  <section class="flex items-center h-[100svh] p-16 bg-gray-50 text-gray-800">
    <div
      class="container flex flex-col items-center justify-center px-5 mx-auto my-8"
    >
      <div class="max-w-md text-center">
        <h2 class="mb-8 font-extrabold text-9xl text-gray-400">
          <span class="sr-only">Ошибка</span>{{ error.statusCode }}
        </h2>
        <p
          v-if="error.statusCode === 404"
          class="text-2xl font-semibold md:text-3xl mb-8"
        >
          Страница не найдена
        </p>
        <p v-else class="text-2xl font-semibold md:text-3xl mb-8">
          Мы уже работаем над её решением
        </p>
        <app-button @click="clearError({ redirect: '/' })"
          >На главную</app-button
        >
      </div>
    </div>
  </section>
</template>
