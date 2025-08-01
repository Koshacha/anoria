import { zodSchema } from "#shared/validators/lead";
import { Lead } from "../models/Lead";

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
