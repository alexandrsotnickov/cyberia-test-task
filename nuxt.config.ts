// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  alias: {
    '@': '../src'
  },

  dir: {
    pages: './src/pages',
    layouts: './src/app/layouts'
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "~/src/less/variables.scss";` // Путь к вашему файлу переменных
        }
      }
    }
  },

  css: ['@/less/base.scss'],
  modules: ['@pinia/nuxt']
})