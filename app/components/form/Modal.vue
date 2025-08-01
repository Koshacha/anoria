<script setup lang="ts">
defineProps<{
  tariff?: string;
}>();
</script>

<template>
  <app-modal>
    <template #title> Отправить заявку </template>
    <template #trigger="{ openModal }">
      <slot :openModal="openModal" />
    </template>
    <template #content>
      <form-contact :tariff />
    </template>
  </app-modal>
</template>
