<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
          <section-why-us
            :reasons="[
              'Опытные операторы',
              'Быстрый старт работы',
              'Контроль качества',
            ]"
          >
            <template #title>Почему мы?</template>
          </section-why-us>
        </template>
      </section-hero-1>

      <section-steps
        :steps="[
          {
            title: 'Знакомство',
            description: 'Знакомимся с бизнесом и формируем предложение',
          },
          {
            title: 'Разработка',
            description: 'Настраиваем скрипты и обучаем операторов',
          },
          {
            title: 'Обработка',
            description: 'Приступаем к обработке звонков',
          },
        ]"
      />

      <section-pricing-1
        :tariffs="[
          {
            name: 'Старт',
            price: 15000,
            features: ['5 активных ботов', '1000 сообщений в месяц'],
          },
          {
            name: 'Гибкий',
            price: 25000,
            features: [
              '25 активных ботов',
              '5000 сообщений в месяц',
              'Поддержка 24/7',
            ],
          },
          {
            name: 'Премиум',
            price: 60000,
            features: [
              '100 активных ботов',
              'Неограниченное количество сообщений',
              'Приоритетная поддержка 24/7',
            ],
          },
        ]"
      />

      <section-get-in-touch />
    </main>
  </div>
</template>
