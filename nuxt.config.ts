// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    'nuxt-swiper',
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  }
})
