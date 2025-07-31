<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section-hero-1>
        <template #title>
          <fancy-word class="text-primary">Подбор</fancy-word>
          сотрудников</template
        >
        <template #description>
          Быстро найдем сотрудников под ваши требования в короткие сроки.
        </template>
      </section-hero-1>

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
            title: 'Формируем требования',
            description:
              'Определяем критерии поиска и нужное количество кандидатов',
          },
          {
            title: 'Ищем сотрудников',
            description:
              'Привлекаем соискателей через разные каналы привлечения, проводим набор',
          },
          {
            title: 'Ваш штат укомплектован',
            description: 'Набор произведен, вакансии закрыты',
          },
        ]"
      />

      <section-why-us
        :reasons="[
          '5 лет опыта в области рекрутинга',
          'Массовый и точеченый подбор',
          'Фокус на результат',
        ]"
      >
        <template #title>Почему стоит выбрать нас?</template>
      </section-why-us>

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
    </main>
  </div>
</template>
