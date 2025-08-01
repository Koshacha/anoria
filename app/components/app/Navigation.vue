<script setup lang="ts">
const links = [
  { href: "/call-center", text: "Колл-центр" },
  { href: "/recruiting", text: "Набор сотрудников" },
  { href: "/bots", text: "Чат-боты" },
];
</script>

<template>
  <nav class="hidden md:flex space-x-8">
    <nuxt-link
      v-for="link in links"
      :key="link.href"
      :to="link.href"
      class="text-gray-600 hover:text-gray-900"
    >
      {{ link.text }}
    </nuxt-link>
  </nav>
</template>
