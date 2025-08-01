import { defineMongooseModel } from '#nuxt/mongoose';

export const Lead = defineMongooseModel({
  name: 'Lead',
  schema: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
});
