import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno({
      attributifyPseudo: true,
    }),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
    presetTypography(),
    presetRemToPx({
      baseFontSize: 4,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        play: 'Play',
      },
    }),
  ],
  shortcuts: {
    'el-empty': 'empty:before:content-[\'-\']',
  },
  transformers: [
    transformerAttributifyJsx(),
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
