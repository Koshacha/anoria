<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const required = z.string("Это поле обязательно");

const validationSchema = toTypedSchema(
  z.object({
    name: required,
    phone: required,
    email: z.email("Неверный формат email"),
    message: required,
    privacyPolicy: z.boolean().refine((value) => value, {
      message: "Вы должны согласиться с политикой конфиденциальности",
    }),
    "something-about-bees": z.string().max(0),
  })
);

const { handleSubmit, errors, defineField } = useForm({
  validationSchema,
  initialValues: {
    privacyPolicy: true,
    "something-about-bees": "",
  },
});

const [name, nameAttrs] = defineField("name");
const [honeypot, honeypotAttrs] = defineField("something-about-bees");
const [phone, phoneAttrs] = defineField("phone");
const [email, emailAttrs] = defineField("email");
const [message, messageAttrs] = defineField("message");
const [privacyPolicy, privacyPolicyAttrs] = defineField("privacyPolicy");

const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await $fetch("/api/hello", {
      method: "POST",
      body: values,
    });
    console.log(response);
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div class="space-y-6">
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
          Я подтверждаю, что ознакомлен с
          <nuxt-link to="/policy">политикой конфиденциальности</nuxt-link> и даю
          согласие на
          <nuxt-link to="/agreement"
            >обработку своих персональных данных</nuxt-link
          >
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
