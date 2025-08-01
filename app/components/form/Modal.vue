<template>
  <app-modal>
    <template #title> Отправить заявку </template>
    <template #trigger="{ openModal }">
      <slot :openModal="openModal" />
    </template>
    <template #content>
      <form-contact :tariff="$attrs.tariff as string" />
    </template>
  </app-modal>
</template>
