<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-200 border-b border-gray-300">
      <app-container>
        <div class="flex justify-start items-center py-4">
          <nuxt-link
            to="/"
            class="flex items-center text-gray-600 hover:text-gray-900"
          >
            <Icon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
            <span>На главную</span>
          </nuxt-link>
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
