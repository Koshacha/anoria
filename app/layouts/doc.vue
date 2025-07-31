<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-gray-100 border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-start items-center py-4">
          <nuxt-link to="/" class="flex items-center text-gray-600 hover:text-gray-900">
            <Icon name="i-heroicons-arrow-left" class="h-5 w-5 mr-2" />
            <span>На главную</span>
          </nuxt-link>
        </div>
      </div>
    </header>

    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <slot />
    </main>

    <app-footer />
  </div>
</template>
