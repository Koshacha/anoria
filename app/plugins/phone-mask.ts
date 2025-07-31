import PhoneMask from '@zoibana/phonemask'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('phone', {
    mounted(el) {
      const phoneMask = new PhoneMask(el);
    }
  })
})
