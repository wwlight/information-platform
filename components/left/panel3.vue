<script setup lang="ts">
defineOptions({
  name: 'LeftPanel3',
})

const { deviceProcessorNum } = useApi()
const { $event } = useNuxtApp()

const dataList = ref<any>([])
const classOptions = ref({
  limitMoveNum: 4,
  singleHeight: 50,
  waitTime: 3000,
})

onMounted(() => {
  getData()

  $event.on('refresh-left-panel-3', (params: any) => {
    getData(params)
  })
})

onUnmounted(() => {
  $event.off('refresh-left-panel-3')
})

async function getData(params: any = {}) {
  const [data] = await deviceProcessorNum(params)
  dataList.value = (data || []).slice(0, 10)
}
</script>

<template>
  <div class="pointer-events-auto h-294 w-full bg-[--g-slider-panel-bg] p-[--g-slider-panel-padding]" flex="~ col">
    <PanelTitle title="异构计算支付类型统计" />
    <div v-if="!!dataList.length" flex="~ 1 gap-10 items-center" class="mt-12 of-hidden pr-12">
      <img src="~/assets/images/left-panel001.png" class="ml-10 mt-24 size-146">
      <vue3ScrollSeamless :data-list="dataList" :class-options="classOptions" class="size-full of-hidden">
        <div v-for="item, index in dataList" :key="index" flex="~ items-center gap-6" class="relative h-50">
          <div class="w-full of-hidden pl-20 pr-10" flex="~ items-baseline justify-between">
            <span
              class="from-#92B6FF via-#E3E3FF to-#FEFEFF bg-gradient-to-t bg-clip-text text-18 text-transparent font-(bold [YouSheBiaoTiHei]) text-shadow-[6px_18%_13px_#0054ff,2px_0%_1px_#000304]"
            >
              {{ item.processorName || '-' }}
            </span>
            <span v-if="item.processorNum" class="flex-1 truncate text-(14 #BBC8DE) font-(500 [aliPuHuiTi])">
              （{{ item.processorNum || 0 }}）
            </span>
            <span class="ml-10 text-(14 #97b4f3) font-(bold [DIN])">{{ `00${index + 1}`.slice(-2) }}</span>
          </div>
          <img src="~/assets/images/left-panel-divider.png" class="absolute bottom-0 left-0 right-0 h-2">
        </div>
      </vue3ScrollSeamless>
    </div>
    <Empty v-else />
  </div>
</template>
