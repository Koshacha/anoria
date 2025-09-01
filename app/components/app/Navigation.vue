<script setup lang="ts">
const route = useRoute();

const links = computed<{ href: string; text: string }[]>(() => {
  return route.meta.navigation ?? [];
});
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
