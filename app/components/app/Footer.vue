<script setup lang="ts">
const { phoneLink, emailLink, phone, email, addresses } = useContacts();

defineProps<{
  simple?: boolean;
}>();

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white py-4">
    <app-container>
      <div v-if="!simple" class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span class="text-xs tracking-wide text-gray-500 uppercase">
              Свяжитесь с нами
            </span>

            <a
              :href="phoneLink"
              class="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
            >
              {{ phone }}
            </a>
          </p>

          <ul class="mt-4 space-y-1 text-sm text-gray-700">
            <li>
              <a
                :href="emailLink"
                class="hover:opacity-75 cursor-pointer text-lg"
                >{{ email }}</a
              >
            </li>
            <li v-for="(address, index) in addresses" :key="index">
              {{ address }}
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-100 pt-12">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul
            class="flex flex-wrap gap-4 text-xs"
            :class="{
              'print:hidden': simple,
            }"
          >
            <li>
              <nuxt-link
                to="/privacy"
                class="text-gray-500 transition hover:opacity-75"
              >
                Политика конфиденциальности
              </nuxt-link>
            </li>

            <li>
              <nuxt-link
                to="/tariffs"
                class="text-gray-500 transition hover:opacity-75"
              >
                Тарифы
              </nuxt-link>
            </li>
          </ul>

          <p class="mt-8 text-xs text-gray-500 sm:mt-0">
            &copy; {{ currentYear }}. Anvoria. Все права защищены.
          </p>
        </div>
      </div>
    </app-container>
  </footer>
</template>
