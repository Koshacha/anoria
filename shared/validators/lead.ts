import isMobilePhone from "validator/es/lib/isMobilePhone";
import * as z from "zod";

const required = z.string("Это поле обязательно");

export const zodSchema = z.object({
  name: required,
  phone: required.refine(isMobilePhone, {
    message: "Неверный формат телефона",
  }),
  email: z.email("Неверный формат email"),
  message: required,
  privacyPolicy: z.boolean().refine((value) => value, {
    message: "Вы должны согласиться с политикой конфиденциальности",
  }),
  aboutBumblebees: z.string().max(0),
  service: z.string().optional(),
  tariff: z.string().optional(),
});

export type Lead = z.infer<typeof zodSchema>;