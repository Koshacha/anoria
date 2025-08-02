<script setup lang="ts">
const { prices } = useAppConfig();

useSeoMeta({
  title: "Anvoria – колл-центр",
  description:
    "Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.",
});

definePageMeta({
  currentService: "Колл-центр",
});
</script>

<template>
  <div>
    <section-hero-1>
      <template #title
        ><fancy-word class="text-primary">Колл-центр</fancy-word></template
      >
      <template #description> Аутсорсинг звонков для компаний. </template>

      <template #cta>
        <form-modal>
          <template #default="{ openModal }">
            <app-button @click="openModal()"> Оставить заявку </app-button>
          </template>
        </form-modal>
      </template>

      <template #right>
        <!-- <section-why-us-2
          :reasons="[
            'Опытные операторы',
            'Быстрый старт работы',
            'Контроль качества',
          ]"
        >
          <template #title>Почему мы?</template>
        </section-why-us-2> -->
      </template>
    </section-hero-1>

    <section-steps-2
      :steps="[
        {
          title: 'Знакомство',
          description: 'Знакомимся с бизнесом и формируем предложение',
          icon: 'material-symbols:handshake',
        },
        {
          title: 'Разработка',
          description: 'Настраиваем скрипты и обучаем операторов',
          icon: 'hugeicons:developer',
        },
        {
          title: 'Обработка',
          description: 'Приступаем к обработке звонков',
          icon: 'fluent:people-call-20-filled',
        },
      ]"
    />

    <section-pricing-1 service="call-center" :tariffs="prices.callCenter" />

    <section-get-in-touch />
  </div>
</template>
