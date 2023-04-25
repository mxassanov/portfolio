export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.errorHandler = () => {
    throw new Error('Ошибка в глобальном обработчике вью')
  }
  if (process.client) {
    window.onunhandledrejection = (e) => {
      console.log(e)
      throw new Error('Ошибка в глобальном обработчике window.onunhandledrejection')
    }
  }
})
