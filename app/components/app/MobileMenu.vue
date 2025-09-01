<script setup lang="ts">
import { AnimatePresence, motion } from 'motion-v'

const links = [
  { href: '/development', text: 'Создание сайтов и приложений' },
  { href: '/support', text: 'Поддержка сайтов и приложений' },
  { href: '/promotion', text: 'Продвижение' },
  { href: '/call-center', text: 'Колл-центр' },
  { href: '/recruiting', text: 'Набор сотрудников' },
  { href: '/bots', text: 'Чат-боты' },
  { href: '/tariffs', text: 'Тарифы' },
]

const isOpen = ref(false)
function openMenu() {
  isOpen.value = true
}
function closeMenu() {
  isOpen.value = false
}
</script>

<template>
  <slot name="trigger" :open-menu="openMenu" :close-menu="closeMenu" />

  <Teleport to="body">
    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        class="fixed inset-0 z-40 bg-black bg-opacity-25"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
        @click="closeMenu"
      />
    </AnimatePresence>
    <AnimatePresence>
      <motion.div
        v-if="isOpen"
        class="mobile-menu fixed top-0 right-0 h-[100dvh] w-full max-w-xs bg-white shadow-lg z-50 p-6 flex flex-col"
        :initial="{ x: '100%' }"
        :animate="{ x: 0 }"
        :exit="{ x: '100%' }"
        :transition="{ duration: 0.4, ease: 'easeInOut' }"
      >
        <div class="flex justify-between items-center mb-10">
          <app-logo @click="closeMenu" />
          <button class="text-gray-500 hover:text-gray-800" @click="closeMenu">
            <Icon name="i-heroicons-x-mark" class="h-8 w-8" />
          </button>
        </div>
        <nav class="flex flex-col space-y-6">
          <nuxt-link
            v-for="link in links"
            :key="link.href"
            :to="link.href"
            class="text-gray-600 hover:text-gray-900 text-xl font-medium"
            @click="closeMenu"
          >
            {{ link.text }}
          </nuxt-link>
        </nav>
        <div class="mt-auto">
          <form-modal>
            <template #default="{ openModal }">
              <app-button
                class="w-full text-center block"
                @click="
                  () => {
                    openModal();
                    closeMenu();
                  }
                "
              >
                Оставить заявку
              </app-button>
            </template>
          </form-modal>
        </div>
      </motion.div>
    </AnimatePresence>
  </Teleport>
</template>
