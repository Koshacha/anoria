<script setup lang="ts">
const { contacts } = useAppConfig();

const phoneLink = `tel:${contacts.phone.replace(/\D/g, "")}`;
const emailLink = `mailto:${contacts.email}`;

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-white py-4">
    <app-container>
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2">
        <div>
          <p>
            <span class="text-xs tracking-wide text-gray-500 uppercase">
              Свяжитесь с нами
            </span>

            <a
              :href="phoneLink"
              class="block text-2xl font-medium text-gray-900 hover:opacity-75 sm:text-3xl"
            >
              {{ contacts.phone }}
            </a>
          </p>

          <ul class="mt-4 space-y-1 text-sm text-gray-700">
            <li>
              <a
                :href="emailLink"
                class="hover:opacity-75 cursor-pointer text-lg"
                >{{ contacts.email }}</a
              >
            </li>
            <li>{{ contacts.address }}</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-100 pt-12">
        <div class="sm:flex sm:items-center sm:justify-between">
          <ul class="flex flex-wrap gap-4 text-xs">
            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Политика конфиденциальности
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Согласие на обработку персональных данных
              </a>
            </li>

            <li>
              <a href="#" class="text-gray-500 transition hover:opacity-75">
                Cookies
              </a>
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
