<script lang="ts" setup>
import { BarChart } from 'echarts/charts'
import { DataZoomComponent, GridComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from 'vue-echarts'

defineOptions({
  name: 'LeftPanel2',
})

provide(THEME_KEY, 'default')
use([TooltipComponent, GridComponent, DataZoomComponent, BarChart, CanvasRenderer])

const { deviceBrandNum } = useApi()
const { $event } = useNuxtApp()

const chartData = ref<any>([])
const option = ref<any>({})

onMounted(() => {
  getData()

  $event.on('refresh-left-panel-2', (params: any) => {
    getData(params)
  })
})

onUnmounted(() => {
  $event.off('refresh-left-panel-2')
})

async function getData(params: any = {}) {
  const [data] = await deviceBrandNum(params)
  chartData.value = data || []
  const xAxisData = chartData.value.map((item: any) => (item.brandName))
  const seriesData = chartData.value.map((item: any) => (item.brandNum))
  await nextTick()
  option.value = leftPanel2ChartOption({ xAxisData, seriesData })
}
</script>

<template>
  <div class="pointer-events-auto h-240 w-full bg-[--g-slider-panel-bg] p-[--g-slider-panel-padding]" flex="~ col">
    <PanelTitle title="GPU类型统计" />
    <VChart v-if="!!chartData.length" class="flex-1" autoresize :option />
    <Empty v-else />
  </div>
</template>
