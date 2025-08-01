<script setup lang="ts">
const { prices } = useAppConfig();

useHead({
  title: "Anvoria – чат-боты",
  description: "Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.",
});
</script>

<template>
  <div>
    <section-hero-1>
      <template #title>
        Внедрение
        <fancy-word class="text-primary">чат-ботов</fancy-word></template
      >
      <template #description>
        Создаем и настраиваем чат-боты под ваш бизнес.
      </template>

      <template #cta>
        <form-modal>
          <template #default="{ openModal }">
            <app-button @click="openModal()"> Оставить заявку </app-button>
          </template>
        </form-modal>
      </template>

      <template #right>
        <section-why-us-2
          :reasons="[
            'Опытные операторы',
            'Быстрый старт работы',
            'Контроль качества',
          ]"
        >
          <template #title>Почему мы?</template>
        </section-why-us-2>
      </template>
    </section-hero-1>

    <section-services
      :services="[
        {
          title: 'Чат-боты',
          description: 'Автоматизация общения с клиентами на сайте',
          icon: 'fluent:bot-24-regular',
        },
        {
          title: 'Голосовые-боты',
          description: 'Голосовые боты для горячих линий и поддержки',
          icon: 'streamline-plump:ai-generate-voice-robot-2',
        },
        {
          title: 'Боты для мессенджеров',
          description: 'Боты для Telegram, ВК и других платформ',
          icon: 'tabler:message-chatbot-filled',
        },
      ]"
    />

    <section-steps-2
      :steps="[
        {
          title: 'Формируем предложение под ваш запрос',
          description: 'На основе запроса делаем ТЗ',
          icon: 'icon-park-outline:list-bottom',
        },
        {
          title: 'Тестируем бота',
          description: 'Перед запуском производим тестирование',
          icon: 'tabler:device-imac-cog',
        },
        {
          title: 'Запуск',
          description: 'Ваш бот работает',
          icon: 'garden:bot-sparkle-fill-12',
        },
      ]"
    />

    <section-why-us-3
      class="mt-8"
      :reasons="[
        'Большой опыт внедрения ботов',
        'Ориентированность на результат',
        'Скорость запуска',
      ]"
    >
      <template #title>Почему стоит выбрать нас?</template>
    </section-why-us-3>

    <section-pricing-1 :tariffs="prices.bots" />

    <section-get-in-touch />
  </div>
</template>
