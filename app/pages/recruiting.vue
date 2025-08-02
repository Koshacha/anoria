<script setup lang="ts">
const { prices } = useAppConfig();

useSeoMeta({
  title: "Anvoria – найм",
  description:
    "Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.",
});

definePageMeta({
  currentService: "Набор персонала",
});
</script>

<template>
  <div>
    <section-hero-1>
      <template #title>
        <fancy-word class="text-primary">Подбор</fancy-word>
        сотрудников</template
      >
      <template #description>
        Быстро найдем сотрудников под ваши требования в короткие сроки.
      </template>

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
          title: 'Формируем требования',
          description:
            'Определяем критерии поиска и нужное количество кандидатов',
          icon: 'fa7-solid:list-ol',
        },
        {
          title: 'Ищем сотрудников',
          description:
            'Привлекаем соискателей через разные каналы привлечения, проводим набор',
          icon: 'streamline-ultimate:job-search-man-bold',
        },
        {
          title: 'Ваш штат укомплектован',
          description: 'Набор произведен, вакансии закрыты',
          icon: 'fluent:people-team-24-filled',
        },
      ]"
    />

    <section-why-us-3
      class="mt-8"
      :reasons="[
        '5 лет опыта в области рекрутинга',
        'Массовый и точечный подбор',
        'Фокус на результат',
      ]"
    >
      <template #title>Почему стоит выбрать нас?</template>
    </section-why-us-3>

    <section-pricing-1 :tariffs="prices.recruiting" />

    <section-get-in-touch />
  </div>
</template>
