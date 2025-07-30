<script setup lang="ts">
const appConfig = useAppConfig();

const submitHandler = () => {
  console.log("do nothing");
};
</script>

<template>
  <section class="py-16">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-bold text-graphite-navy mb-4">
          Свяжитесь с нами
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Мы всегда готовы ответить на ваши вопросы и помочь с выбором услуг.
        </p>
      </div>
      <div class="flex flex-wrap -mx-4">
        <div class="w-full lg:w-2/6 px-4 mb-8 lg:mb-0">
          <div class="bg-blue-200 text-white rounded-lg p-8 h-full">
            <h3 class="text-2xl font-bold mb-6">Контактная информация</h3>
            <div class="space-y-4">
              <div class="flex items-center">
                <Icon name="i-heroicons-envelope" class="w-6 h-6 mr-4" />
                <a
                  :href="`mailto:${appConfig.contacts.email}`"
                  class="hover:underline"
                  >{{ appConfig.contacts.email }}</a
                >
              </div>
              <div class="flex items-center">
                <Icon name="i-heroicons-phone" class="w-6 h-6 mr-4" />
                <a
                  :href="`tel:${appConfig.contacts.phone}`"
                  class="hover:underline"
                  >{{ appConfig.contacts.phone }}</a
                >
              </div>
              <div class="flex items-start">
                <Icon name="i-heroicons-map-pin" class="w-6 h-6 mr-4 mt-1" />
                <span>{{ appConfig.contacts.address }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-4/6 px-4">
          <div class="bg-white rounded-lg p-8 shadow-md">
            <form @submit.prevent="submitHandler">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-graphite-navy mb-2"
                    >Имя</label
                  >
                  <input
                    type="text"
                    id="name"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-anvoria-blue focus:border-anvoria-blue"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-graphite-navy mb-2"
                    >Электронная почта</label
                  >
                  <input
                    type="email"
                    id="email"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-anvoria-blue focus:border-anvoria-blue"
                  />
                </div>
              </div>
              <div class="mb-6">
                <label
                  for="subject"
                  class="block text-sm font-medium text-graphite-navy mb-2"
                  >Тема обращения</label
                >
                <input
                  type="text"
                  id="subject"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-anvoria-blue focus:border-anvoria-blue"
                />
              </div>
              <div class="mb-6">
                <label
                  for="message"
                  class="block text-sm font-medium text-graphite-navy mb-2"
                  >Сообщение</label
                >
                <textarea
                  id="message"
                  rows="4"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-anvoria-blue focus:border-anvoria-blue"
                ></textarea>
              </div>
              <div class="text-right">
                <AppButton type="submit">Отправить</AppButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
