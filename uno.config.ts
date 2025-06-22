import presetRemToPx from '@unocss/preset-rem-to-px'
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind3,
  transformerAttributifyJsx,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
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
