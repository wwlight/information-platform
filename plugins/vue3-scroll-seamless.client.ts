import { defineNuxtPlugin } from '#app'
// @ts-expect-error: missing types
import { vue3ScrollSeamless } from 'vue3-scroll-seamless'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('vue3ScrollSeamless', vue3ScrollSeamless)
})
