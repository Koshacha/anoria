<script setup lang="ts">
const print = () => {
  if (typeof window !== "undefined") window.print();
};
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-200 border-b border-gray-300 print:hidden sticky top-0">
      <app-container>
        <div class="flex justify-start items-center py-4 space-x-4 w-full">
          <button
            class="flex items-center text-gray-600 hover:text-gray-900"
            @click="$router.back()"
          >
            <Icon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
            <span>Назад</span>
          </button>
          <nuxt-link
            to="/"
            class="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Icon name="i-heroicons-home" class="h-5 w-5 mr-2" />
            <span
              >На главную
              <span class="hidden sm:inline">страницу сайта Anvoria</span></span
            >
          </nuxt-link>

          <button
            class="flex items-center text-gray-600 hover:text-gray-900 !ml-auto"
            @click="print()"
          >
            <Icon name="i-heroicons-printer" class="h-5 w-5 mr-2" />
            <span>Печать</span>
          </button>
        </div>
      </app-container>
    </header>

    <main class="my-8">
      <app-container>
        <slot />
      </app-container>
    </main>

    <app-footer simple />
  </div>
</template>