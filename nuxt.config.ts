export default defineNuxtConfig({
  runtimeConfig: {
    token: process.env.PERSONAL_TOKEN,
  },
  modules: [
    '@nuxtjs/tailwindcss', '@nuxtjs/device',
  ],
  components: { global: true, dirs: ['~/components'] },
  pages: true,
  nitro: {
    timing: true,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'ru',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1.0' },
        {
          hid: 'description',
          name: 'description',
          content: 'Здесь немного обо мне и задачах, с которыми работал...',
        },
      ],
      title: 'Frontend Developer - Magomed Gasanov',
      link: [
        { rel: 'icon', hid: 'icon', type: 'image/png', sizes: '16x16', href: '/vue/favicon-16x16.png' },
        { rel: 'icon', hid: 'icon', type: 'image/png', sizes: '32x32', href: '/vue/favicon-32x32.png' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/vue/font/merriweather-bold.woff2', crossorigin: 'anonymous' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/vue/font/merriweather-regular.woff2', crossorigin: 'anonymous' },
      ],
    },
  },
})
