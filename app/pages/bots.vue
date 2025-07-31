<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section-hero-1>
        <template #title>
          Внедрение
          <fancy-word class="text-primary">чат-ботов</fancy-word></template
        >
        <template #description>
          Создаем и настраиваем чат-боты под ваш бизнес.
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

      <section-why-us
        :reasons="[
          'Опытные операторы',
          'Быстрый старт работы',
          'Контроль качества',
        ]"
      >
        <template #title>Почему мы?</template>
      </section-why-us>

      <section-steps
        :steps="[
          {
            title: 'Формируем предложение под ваш запрос',
            description:
              'На основе запроса делаем ТЗ',
          },
          {
            title: 'Тестируем бота',
            description:
              'Перед запуском производим тестирование',
          },
          {
            title: 'Запуск',
            description: 'Ваш бот работает',
          },
        ]"
      />

      <section-why-us
        :reasons="[
          'Большой опыт внедрения ботов',
          'Ориентированность на результат',
          'Скорость запуска',
        ]"
      >
        <template #title>Почему стоит выбрать нас?</template>
      </section-why-us>

      <section-pricing-1
        :tariffs="[
          {
            name: 'Базовый',
            price: 10000,
            forWhat: 'рублей',
            features: ['Для малого бизнеса и лендинга'],
          },
          {
            name: 'Оптимальный',
            price: 30000,
            forWhat: 'рублей',
            features: ['Под Ваш бизнес процесс'],
          },
          {
            name: 'Премиум',
            price: 65000,
            forWhat: 'рублей',
            features: ['Индивидуальные условия'],
          },
        ]"
      />

      <section-get-in-touch />
    </main>
  </div>
</template>
