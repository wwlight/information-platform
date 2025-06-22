<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

defineOptions({
  name: 'RightPanel1',
})

const props = defineProps({
  config: Object as PropType<any>,
})

const computeCapacity = ref(0)
const computeCapacityNum = useTransition(computeCapacity, {
  duration: 1000,
  transition: TransitionPresets.easeOutExpo,
})

const storageCapacity = ref(0)
const storageCapacityNum = useTransition(storageCapacity, {
  duration: 1000,
  transition: TransitionPresets.easeOutExpo,
})

watch(props.config, (config) => {
  computeCapacity.value = config!.computeCapacity || 0
  storageCapacity.value = config!.storageCapacity || 0
}, { immediate: true, deep: true })
</script>

<template>
  <div class="pointer-events-auto min-h-268 w-full bg-[--g-slider-panel-bg] p-[--g-slider-panel-padding]" flex="~ col">
    <PanelTitle title="算力规模/存储能力" />
    <div flex="~ 1 gap-10 col justify-between" class="px-20 py-10">
      <div flex="~ items-center gap-40">
        <img src="~/assets/images/right-panel001.png" class="ml-20 h-90 w-98">
        <div flex="~ 1 col" class="pt-10">
          <span class="text-16 text-#FFFEFF font-[aliPuHuiTi]">
            算力规模
          </span>
          <div flex="~ 1 items-baseline">
            <span
              class="from-#92B6FF via-#E3E3FF to-#FEFEFF bg-gradient-to-t bg-clip-text text-34 text-transparent font-(bold [DIN]) text-shadow-[6px_18%_13px_#0054ff,2px_0%_1px_#000304]"
            >
              {{ +computeCapacityNum.toFixed(3) }}
            </span>
            <span class="ml-12 text-(14 #ffffff/60) font-[aliPuHuiTi]">
              /P
            </span>
          </div>
        </div>
      </div>
      <div flex="~ items-center gap-40">
        <img src="~/assets/images/right-panel002.png" class="ml-20 h-90 w-98">
        <div flex="~ 1 col" class="pt-10">
          <span class="text-16 text-#FFFEFF font-[aliPuHuiTi]">
            存储能力
          </span>
          <div flex="~ 1 items-baseline">
            <span
              class="from-#92B6FF via-#E3E3FF to-#FEFEFF bg-gradient-to-t bg-clip-text text-34 text-transparent font-(bold [DIN]) text-shadow-[6px_18%_13px_#0054ff,2px_0%_1px_#000304]"
            >
              {{ +storageCapacityNum.toFixed(3) }}
            </span>
            <span class="ml-12 text-(14 #ffffff/60) font-[aliPuHuiTi]">
              /PB
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
