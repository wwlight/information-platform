<script setup lang="ts">
import { PieChart } from 'echarts/charts'
import { LegendComponent, TooltipComponent } from 'echarts/components'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import VChart, { THEME_KEY } from 'vue-echarts'

defineOptions({
  name: 'LeftPanel1',
})

provide(THEME_KEY, 'default')
use([TooltipComponent, LegendComponent, PieChart, CanvasRenderer])

let timer: any = null
const { deviceNum } = useApi()
const { $event } = useNuxtApp()

const chartRef = shallowRef<any>(null)
const chartData = ref<any>([])
const total = ref<number>(0)
const option = ref<any>({})

onMounted(() => {
  getData()

  $event.on('refresh-left-panel-1', (params: any) => {
    getData(params)
  })
})

onUnmounted(() => {
  stopActions()
  $event.off('refresh-left-panel-1')
})

async function getData(params: any = {}) {
  const [res] = await deviceNum(params)
  const { deviceNumList, deviceAllNum } = res || {}
  const data = (deviceNumList || []).map((item: any) => ({
    value: item.deviceNum,
    name: item.deviceName,
  }))
  chartData.value = data
  total.value = deviceAllNum || 0
  await nextTick()
  option.value = leftPanel1ChartOption(chartData.value, total.value)
  await startActions()
}

async function startActions() {
  let dataIndex = -1
  const dataLen = option.value?.series?.[0]?.data?.length || 0
  await nextTick()
  if (!chartRef.value || dataLen === 0) {
    return
  }
  clearInterval(timer)

  timer = setInterval(() => {
    if (!chartRef.value) {
      clearInterval(timer)
      return
    }

    chartRef.value.dispatchAction({
      type: 'downplay',
      seriesIndex: 0,
      dataIndex,
    })
    dataIndex = (dataIndex + 1) % dataLen
    chartRef.value.dispatchAction({
      type: 'highlight',
      seriesIndex: 0,
      dataIndex,
    })
    chartRef.value.dispatchAction({
      type: 'showTip',
      seriesIndex: 0,
      dataIndex,
    })
  }, 3000)
}

function stopActions() {
  clearInterval(timer)
}
</script>

<template>
  <div class="pointer-events-auto h-302 w-full bg-[--g-slider-panel-bg] p-[--g-slider-panel-padding]" flex="~ col">
    <PanelTitle title="算力设备统计" />
    <v-chart v-if="!!chartData.length" ref="chartRef" class="flex-1" autoresize :option />
    <Empty v-else />
  </div>
</template>
