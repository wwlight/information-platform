import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    unocss: true,
    formatters: true,
    ignores: [
      'assets/mapData/*',
      'public/download-datav-maps.cjs',
      'README.md',
    ],
    rules: {
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/no-required-prop-with-default': 'off',
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
