<script setup lang="ts">
const { prices } = useAppConfig()

useSeoMeta({
  title: 'Anvoria – продвижение',
  description:
    'Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.',
})

definePageMeta({
  currentService: 'Продвижение',
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
        <fancy-word class="text-primary">
          Продвижение
        </fancy-word>
      </template>
      <template #description>
        Мы приводим клиентов
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
          title: 'Анализ и стратегия',
          description: 'Изучаем нишу, конкурентов и целевую аудиторию',
          icon: 'material-symbols:analytics-rounded',
        },
        {
          title: 'Запуск и оптимизация',
          description: 'Производим стабильный поток трафика и заявок',
          icon: 'material-symbols:rocket-launch',
        },
        {
          title: 'Масштабирование и рост',
          description: 'Постоянный анализ и доработка кампаний',
          icon: 'material-symbols:monitoring-rounded',
        },
      ]"
    />

    <section-why-us-3
      class="mt-8"
      :reasons="[
        'Комплексный подход',
        'Прозрачность',
        'Опыт в МСП и e-commerce',
      ]"
    >
      <template #title>
        Почему мы?
      </template>
    </section-why-us-3>

    <section-pricing-1 service="promotion" :tariffs="prices.promotion" />

    <section-get-in-touch />
  </div>
</template>
