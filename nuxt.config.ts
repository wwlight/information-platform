// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/eslint', '@vueuse/nuxt', '@element-plus/nuxt'],
  plugins: [
    '~/plugins/event-bus',
    '~/plugins/vue3-scroll-seamless.client',
  ],
  ssr: false,
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
  devServer: {
    host: '0.0.0.0',
    port: 8888,
  },
  features: {
    // For UnoCSS
    inlineStyles: false,
  },
  compatibilityDate: '2024-04-03',
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
  vite: {
    css: {
      preprocessorOptions: {
        scss: { api: 'modern-compiler' },
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
