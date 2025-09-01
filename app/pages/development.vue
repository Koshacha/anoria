<script setup lang="ts">
const { prices } = useAppConfig()

useSeoMeta({
  title: 'Anvoria – cоздание сайтов и приложений',
  description:
    'Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.',
})

definePageMeta({
  currentService: 'Создание сайтов и приложений',
  navigation: [
    { href: '#why-us', text: 'Как мы работаем' },
    { href: '#why-we', text: 'Почему мы' },
    { href: '#prices', text: 'Тарифы' },
  ],
})
</script>

<template>
  <div>
    <section-hero-1>
      <template #title>
        Создание
        <fancy-word class="text-primary">
          сайтов и приложений
        </fancy-word>
      </template>
      <template #description>
        Создай свой сайт для бизнеса
      </template>

      <template #cta>
        <form-modal>
          <template #default="{ openModal }">
            <app-button @click="openModal()">
              Оставить заявку
            </app-button>
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
          title: 'Подготовка',
          description: 'Собираем цели, задачи, референсы, подбираем решение и формируем предложение',
          icon: 'material-symbols:handshake',
        },
        {
          title: 'Создание',
          description: 'Прототип и дизайн, разработка, SEO и наполнение контентом',
          icon: 'material-symbols:code',
        },
        {
          title: 'Запуск и развитие',
          description: 'Подключение, тестирование, развитие',
          icon: 'material-symbols:rocket-launch',
        },
      ]"
    />

    <section-why-us-3
      class="mt-8"
      :reasons="[
        'Комплексный подход',
        'Честные цены и сроки',
        'Экосистема для бизнеса',
      ]"
    >
      <template #title>
        Почему мы?
      </template>
    </section-why-us-3>

    <section-pricing-1 service="development" :tariffs="prices.development" />

    <section-get-in-touch />
  </div>
</template>
