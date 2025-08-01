<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { zodSchema } from "#shared/validators/lead";

const route = useRoute();

const service = computed(() => {
  return route.meta.currentService ?? "";
});

const validationSchema = toTypedSchema(zodSchema);

const { tariff = "" } = defineProps<{
  tariff?: string;
}>();

const { handleSubmit, errors, defineField } = useForm({
  validationSchema,
  initialValues: {
    privacyPolicy: true,
    aboutBumblebees: "",
  },
});

const [name, nameAttrs] = defineField("name");
const [honeypot, honeypotAttrs] = defineField("aboutBumblebees");
const [phone, phoneAttrs] = defineField("phone");
const [email, emailAttrs] = defineField("email");
const [message, messageAttrs] = defineField("message");
const [privacyPolicy, privacyPolicyAttrs] = defineField("privacyPolicy");

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await $fetch("/api/leads", {
      method: "POST",
      body: {
        ...values,
        service,
        tariff,
      },
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="space-y-6">
    <p v-if="service" class="text-gray-400 text-sm my-2">
      Выбранная услуга: <span class="font-bold">{{ service }}</span
      ><template v-if="tariff"
        >, тариф:
        <span class="font-bold">{{ tariff }}</span>
      </template>
    </p>
    <form @submit="onSubmit">
      <input
        v-model="honeypot"
        type="text"
        v-bind="honeypotAttrs"
        class="hidden"
      />
      <div class="grid md:grid-cols-2 md:gap-6">
        <div class="mb-2">
          <form-label> Имя </form-label>
          <form-input
            v-model="name"
            type="text"
            v-bind="nameAttrs"
            placeholder="Иван Иванов"
          />
          <span v-if="errors.name" class="text-red-500 text-sm">{{
            errors.name
          }}</span>
        </div>
        <div class="mb-2">
          <form-label> Телефон </form-label>
          <form-input
            v-model="phone"
            type="tel"
            placeholder="Номер телефона"
            v-bind="phoneAttrs"
          />
          <span v-if="errors.phone" class="text-red-500 text-sm">{{
            errors.phone
          }}</span>
        </div>
      </div>

      <div class="mb-2">
        <form-label> Email </form-label>
        <form-input
          v-model="email"
          type="email"
          placeholder="ivan@mail.ru"
          v-bind="emailAttrs"
        />
        <span v-if="errors.email" class="text-red-500 text-sm">{{
          errors.email
        }}</span>
      </div>

      <div class="mb-2">
        <form-label> Сообщение </form-label>
        <form-textarea
          v-model="message"
          placeholder="Текст вашего обращения"
          v-bind="messageAttrs"
        />
        <span v-if="errors.message" class="text-red-500 text-sm">{{
          errors.message
        }}</span>
      </div>

      <div class="my-4">
        <form-checkbox v-model="privacyPolicy" v-bind="privacyPolicyAttrs">
          Нажимая кнопку «Отправить», вы соглашаетесь с
          <nuxt-link to="/privacy"
            >политикой обработки персональных данных</nuxt-link
          >.
        </form-checkbox>
        <span v-if="errors.privacyPolicy" class="text-red-500 text-sm mt-2">{{
          errors.privacyPolicy
        }}</span>
      </div>

      <div class="mt-4">
        <app-button type="submit" class="flex items-center">
          Отправить
        </app-button>
      </div>
    </form>
  </div>
</template>
