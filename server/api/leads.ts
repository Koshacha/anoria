import { zodSchema, type Lead as LeadType } from "#shared/validators/lead";
import { Lead } from "../models/Lead";

const buildMessage = (data: LeadType) => {
  let message = `Новый лид

Имя: ${data.name}
Телефон: ${data.phone}
Email: ${data.email}
Сообщение: ${data.message}

${data?.service ? `Услуга: ${data.service}` : ""}
${data?.tariff ? `Тариф: ${data.tariff}` : ""}`;
  return message;
}

export default defineEventHandler(async (event) => {
  if (event.method !== "POST") {
    setResponseStatus(event, 405, "Method Not Allowed");
    return {
      success: false,
      reason: "Method Not Allowed",
    };
  }

  const body = await readBody(event);
  const result = zodSchema.safeParse(body);

  if (!result.success) {
    return {
      success: false,
      reason: result.error.issues,
    };
  }

  try {
    const { $telegram } = useNitroApp();

    if ($telegram) {
      await $telegram.send(buildMessage(result.data));
    }

    await Lead.create(result.data);

    return {
      success: true,
    };
  } catch (error) {
  return {
    success: false,
    reason: "Произошла ошибка при сохранении данных",
  };
}
});
