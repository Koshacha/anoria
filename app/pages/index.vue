<script setup lang="ts">
useSeoMeta({
  title: "Anvoria – главная страница",
  description:
    "Ваш технологичный партнёр в бизнесе. Колл-центр, найм, чат-боты – все в одном месте.",
});
</script>

<template>
  <div>
    <section-hero-1>
      <template #title
        ><fancy-word class="text-primary">Эффективные</fancy-word> решения для
        вашего бизнеса</template
      >
      <template #description>
        Ваш технологичный партнёр в бизнесе. <br class="max-sm:hidden" />
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

    <section-why-us-3
      :reasons="[
        'Индивидуальный подход',
        'Многолетний опыт',
        'Современные технологии',
      ]"
    >
      <template #title
        >Почему выбирают <fancy-word>Anvoria</fancy-word>?</template
      >
    </section-why-us-3>

    <section-stats />

    <section-testimonials />
    <section-get-in-touch />
  </div>
</template>
