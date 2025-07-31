<script setup lang="ts">
const { phoneLink } = useContacts();
</script>

<template>
  <header class="bg-white/60 backdrop-blur shadow-sm sticky top-0 z-30">
    <app-container>
      <div class="flex justify-between items-center py-4">
        <app-logo />
        <div class="hidden md:flex items-center space-x-8">
          <app-navigation />
          <form-modal>
            <template #default="{ openModal }">
              <app-button @click="openModal()">Оставить заявку</app-button>
            </template>
          </form-modal>
        </div>
        <div class="md:hidden flex items-center space-x-4">
          <a :href="phoneLink" class="text-gray-500 hover:text-gray-700">
            <Icon name="i-heroicons-phone" class="h-6 w-6" />
          </a>
          <app-mobile-menu>
            <template #trigger="{ openMenu }">
              <app-button
                :rewrite-class="true"
                class="text-gray-500 hover:text-gray-800"
                @click="openMenu"
              >
                <Icon name="i-heroicons-bars-3" class="h-8 w-8" />
              </app-button>
            </template>
          </app-mobile-menu>
        </div>
      </div>
    </app-container>
  </header>
</template>
