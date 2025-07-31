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
  </div>
</template>
