// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     css: ['~/assets/css/main.css'],
     plugins: [
      { src: '~/plugins/aos', mode: 'client' },
    ],
 postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
