<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <app-logo />
        <app-navigation />
        <form-modal>
          <template #default="{ openModal }">
            <app-button @click="openModal()">Оставить заявку</app-button>
          </template>
        </form-modal>
      </div>
    </div>
  </header>
</template>
