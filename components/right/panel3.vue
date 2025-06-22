<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

defineOptions({
  name: 'RightPanel3',
})

const props = defineProps({
  config: Object as PropType<any>,
})

const { getAssetsFile } = useUtils()
const carbonEmission = ref(0)
const carbonEmissionNum = useTransition(carbonEmission, {
  duration: 1000,
  transition: TransitionPresets.easeOutExpo,
})

watch(props.config, (config) => {
  carbonEmission.value = config?.carbonEmission || 0
}, { immediate: true, deep: true })

const labelList = ref([
  { icon: getAssetsFile('right-panel003.png'), label: '液冷' },
  { icon: getAssetsFile('right-panel004.png'), label: '风冷' },
  { icon: getAssetsFile('right-panel005.png'), label: '蓄冷支持' },
])
</script>

<template>
  <div class="pointer-events-auto h-274 w-full bg-[--g-slider-panel-bg] p-[--g-slider-panel-padding]" flex="~ col">
    <PanelTitle title="碳排放量/冷却系统" />
    <div
      class="m-[26px_auto_18px_20px] h-68 w-385 bg-[url(~/assets/images/bg-right-panel-total.png)] bg-contain bg-no-repeat px-80"
    >
      <div class="size-full pt-5" flex="~ items-center">
        <span class="text-16 text-#FFFEFF font-[aliPuHuiTi]">碳排放量</span>
        <span
          class="ml-a from-#92B6FF via-#E3E3FF to-#FEFEFF bg-gradient-to-t bg-clip-text text-34 text-transparent font-(bold [DIN]) text-shadow-[6px_18%_13px_#0054ff,2px_0%_1px_#000304]"
        >
          {{ +carbonEmissionNum.toFixed(2) }}
        </span>
        <span class="ml-10 mt-5 text-(14 #ffffff/60) font-[aliPuHuiTi]">吨/年</span>
      </div>
    </div>
    <div class="w-full" flex="1 ~ gap-20 justify-around">
      <div v-for="item, index in labelList" :key="index" class="w-96" flex="~ col justify-center items-center">
        <img :src="`${item.icon}`" class="size-42">
        <img src="~/assets/images/right-panel-divider.png" class="mt-5">
        <span class="mt-2 text-(16 #C0D4FF) font-(bold [aliPuHuiTi])">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>
