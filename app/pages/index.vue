<template>
  <div class="min-h-screen bg-gray-50">
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section-hero-1>
        <template #title
          ><fancy-word class="text-primary">Эффективные</fancy-word> решения для
          вашего бизнеса</template
        >
        <template #description>
          Ваш технологичный партнёр в бизнесе. <br />
          Колл-центр, найм, чат-боты – все в одном месте.
        </template>
      </section-hero-1>

      <section-services
        :services="[
          {
            title: 'Колл-центр',
            description: 'Организация горячих и холодных звонков под ключ',
            link: '/call-center',
            icon: 'material-symbols:support-agent',
          },
          {
            title: 'Набор персонала',
            description: 'Оперативно найдем сотрудников для вашего бизнеса',
            link: '/recruiting',
            icon: 'material-symbols:work-history',
          },
          {
            title: 'Чат-боты под ключ',
            description: 'Настроим чат-бот для автоматизации процессов',
            link: '/bots',
            icon: 'material-symbols:chat',
          },
        ]"
      />

      <section-why-us
        :reasons="[
          'Индивидуальный подход',
          'Опытные специалисты',
          'Современные технологии',
        ]"
      >
        <template #title>Почему выбирают Anvoria?</template>
      </section-why-us>

      <section-stats />
      <section-testimonials />
      <section-get-in-touch />
    </main>
  </div>
</template>
