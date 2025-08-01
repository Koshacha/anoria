import { zodSchema } from '#shared/validators/lead';
import { Lead } from '../models/Lead';

export default defineEventHandler(async (event) => {
  if (event.method !== 'POST') {
    setResponseStatus(event, 405, 'Method Not Allowed');
    return {
      error: 'Method Not Allowed',
    };
  }

  const body = await readBody(event);

  const result = zodSchema.safeParse(body);

  if (!result.success) {
    return {
      status: 'error',
      errors: result.error.issues,
    };
  }

  try {
    await Lead.create(result.data);
    return {
      status: 'ok',
    };
  } catch (error) {
    console.error(error);
    return {
      status: 'error',
      message: 'Произошла ошибка при сохранении данных',
    };
  }
});