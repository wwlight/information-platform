// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@vueuse/nuxt', '@element-plus/nuxt'],
  plugins: [
    '~/plugins/event-bus',
    '~/plugins/vue3-scroll-seamless.client',
  ],
  ssr: false,
  pages: {
    pattern: ['**/*.vue', '!**/_*'],
  },
  devtools: { enabled: false },
  app: {
    head: {
      title: 'XX算力信息平台',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/assets/styles/global.scss',
  ],
  runtimeConfig: {
    public: {
      apiBase: '',
    },
  },
  features: {
    inlineStyles: false, // For UnoCSS
  },
  compatibilityDate: '2025-06-22',
  nitro: {
    routeRules: {
      '/api/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    },
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
})
