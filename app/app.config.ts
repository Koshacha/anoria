export default defineAppConfig({
  contacts: {
    phone: "+7 (914) 175-45-90",
    email: "anvoria@mail.ru",
    address: "Хабаровск, ул. Тургенева 96, корп 1, 18",
  },

  baseDate: "2025-07-28",

  prices: {
    bots: [
      {
        name: 'Базовый',
        price: 10000,
        forWhat: 'рублей',
        features: ['Для малого бизнеса и лендинга'],
      },
      {
        name: 'Оптимальный',
        price: 30000,
        forWhat: 'рублей',
        features: ['Под Ваш бизнес процесс'],
      },
      {
        name: 'Премиум',
        price: 65000,
        forWhat: 'рублей',
        features: ['Индивидуальные условия'],
      },
    ],
    callCenter: [
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
    ],
    recruiting: [
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
    ],
  }
});
