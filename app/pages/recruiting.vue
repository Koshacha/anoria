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

    <section-steps
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

    <section-why-us-1
      class="mt-8"
      :reasons="[
        '5 лет опыта в области рекрутинга',
        'Массовый и точеченый подбор',
        'Фокус на результат',
      ]"
    >
      <template #title>Почему стоит выбрать нас?</template>
    </section-why-us-1>

    <section-pricing-1
      :tariffs="[
        {
          name: 'Базовый',
          price: 300,
          forWhat: 'за лид',
          features: ['Предоставление лида'],
        },
        {
          name: 'Оптимальный',
          price: 3000,
          forWhat: 'за кандидата',
          features: ['Горячий лид'],
        },
        {
          name: 'Премиум',
          price: 25000,
          forWhat: 'за закрытие вакансии',
          features: ['Под ключ'],
        },
      ]"
    />

    <section-get-in-touch />
  </div>
</template>
