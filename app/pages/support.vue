<script setup lang="ts">
const { prices } = useAppConfig()

useSeoMeta({
  title: 'Anvoria – поддержка сайтов и приложений',
  description:
    'Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.',
})

definePageMeta({
  currentService: 'Поддержка сайтов и приложений',
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
        Поддержка
        <fancy-word class="text-primary">
          сайтов и приложений
        </fancy-word>
      </template>
      <template #description>
        Ваш сайт — в надёжных руках
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
          title: 'Мониторим',
          description: 'Контроль доступности сайта',
          icon: 'material-symbols:monitor-heart',
        },
        {
          title: 'Защищаем',
          description: 'Защита от атак и спама',
          icon: 'material-symbols:security',
        },
        {
          title: 'Развиваем',
          description: 'Рекомендации и отчеты',
          icon: 'material-symbols:monitoring-rounded',
        },
      ]"
    />

    <section-why-us-3
      class="mt-8"
      :reasons="[
        'Надёжность и контроль',
        'Быстрая реакция',
        'Развитие, а не просто поддержка',
      ]"
    >
      <template #title>
        Почему мы?
      </template>
    </section-why-us-3>

    <section-pricing-1 service="support" :tariffs="prices.support" />

    <section-get-in-touch />
  </div>
</template>
