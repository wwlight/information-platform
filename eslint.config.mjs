// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: true,
    ignores: [
      'assets/mapData/*',
      'README.md',
    ],
    rules: {
      'no-use-before-define': 'off',
      'n/prefer-global/process': 'off',
    },
    languageOptions: {
      globals: {
        defineNuxtConfig: 'readonly',
      },
    },
  }),
)
