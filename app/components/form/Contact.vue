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

const { handleSubmit, errors, defineField, resetForm } = useForm({
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

const formStatus = ref<"success" | "error" | null>(null);
const isSubmitting = ref(false);

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;
  try {
    const response = await $fetch("/api/leads", {
      method: "POST",
      body: {
        ...values,
        service: service.value,
        tariff,
      },
    });
    if (response.success === true) {
      formStatus.value = "success";
      resetForm({ values: { privacyPolicy: true, aboutBumblebees: "" } });
    } else {
      formStatus.value = "error";
    }
  } catch (error) {
    console.error(error);
    formStatus.value = "error";
  } finally {
    isSubmitting.value = false;
  }
});
</script>

<template>
  <div class="space-y-6">
    <app-alert v-if="formStatus === 'success'" type="success">
      <p class="font-semibold">Ваша заявка успешно отправлена!</p>
      <p class="text-sm">Мы свяжемся с вами в ближайшее время.</p>
    </app-alert>
    <app-alert v-else-if="formStatus === 'error'" type="error">
      <p class="font-semibold">Произошла ошибка</p>
      <p class="text-sm">Пожалуйста, попробуйте еще раз позже.</p>
    </app-alert>

    <p
      v-if="service && formStatus !== 'success'"
      class="text-gray-400 text-sm my-2"
    >
      Выбранная услуга: <span class="font-bold">{{ service }}</span
      ><template v-if="tariff"
        >, тариф:
        <span class="font-bold">{{ tariff }}</span>
      </template>
    </p>
    <form @submit="onSubmit" v-if="formStatus !== 'success'">
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
        <app-button
          type="submit"
          class="flex items-center justify-center w-full md:w-auto"
          :disabled="isSubmitting"
          :class="{ 'bg-gray-400': isSubmitting }"
        >
          <icon
            v-if="isSubmitting"
            name="lucide:loader-2"
            class="animate-spin mr-2"
          />
          {{ isSubmitting ? "Отправка..." : "Отправить" }}
        </app-button>
      </div>
    </form>
  </div>
</template>
