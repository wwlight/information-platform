<script lang="ts" setup>
import { EffectScatterChart, ScatterChart } from 'echarts/charts'
import {
  GeoComponent,
  GraphicComponent,
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import { registerMap, use } from 'echarts/core'
import lodashMerge from 'lodash/merge'
import VChart from 'vue-echarts'

defineOptions({
  name: 'ChartMap',
})

use([
  ScatterChart,
  EffectScatterChart,
  GeoComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent,
  GraphicComponent,
])

const { $event } = useNuxtApp()
const { getRegionCenterNum, getCityCenterNum, powerQueryList } = useApi()
const { mapCodeHash, getOption } = useMapChart()

const search = ref<any>({})
const regionName = ref<any>('china')
const chartRef = shallowRef<any>(null)
const option = ref<any>({})
const regionNumData = ref<any>([]) // 全国算力数量统计
const cityCenterNumGeneralData = ref<any>([])
const cityCenterNumOwnData = ref<any>([])
const dialogPowerList = ref<any>([])

onMounted(async () => {
  await renderMap(true)
  getRegionNumData()

  $event.on('refresh-main-map', (params: any) => {
    Object.assign(search.value, params)
    regionName.value = 'china'
    getRegionNumData()
  })

  $event.on('reset-map-search', () => {
    search.value = {}
  })
})

onUnmounted(() => {
  $event.off('refresh-main-map')
  $event.off('reset-map-search')
})

async function getRegionNumData() {
  const [data] = await getRegionCenterNum(search.value)
  regionNumData.value = (data || []).map((item: any) => {
    const { id, regionName, centerNum, lngLat = [] } = item
    return {
      id,
      name: regionName,
      value: lngLat,
      centerNum,
    }
  })
  if (regionName.value === 'china') {
    await nextTick()
    option.value = getOption({
      mapName: regionName.value,
      regionNumData: regionNumData.value,
    })
  }
}

async function getCityCenterNumData() {
  const provinceId = mapCodeHash[regionName.value]
  if (!provinceId)
    return
  const params = Object.assign({}, search.value, { provinceId })
  const [data] = await getCityCenterNum(params)
  const result = (data || []).map((item: any) => {
    const { id, regionName, centerNum, lngLat = [], constructionType } = item
    return {
      id,
      name: regionName,
      value: lngLat,
      centerNum,
      constructionType,
    }
  })
  cityCenterNumGeneralData.value = result.filter((item: any) => +item.constructionType === 2)
  cityCenterNumOwnData.value = result.filter((item: any) => +item.constructionType === 1)
}

async function getPowerList(cityId: string) {
  const params = Object.assign({}, search.value, { cityId })
  const [data] = await powerQueryList(params)
  dialogPowerList.value = data
}

async function renderMap(init = false) {
  const provinceId = mapCodeHash[regionName.value]
  if (!provinceId)
    return
  const chinaData: any = await useMapLoader(provinceId)
  if (!chinaData)
    return
  registerMap(regionName.value, chinaData)
  !init && updateOption()
}

function updateOption() {
  if (regionName.value === 'china') {
    option.value = getOption({
      mapName: regionName.value,
      regionNumData: regionNumData.value,
    })
  }
  else {
    const tempOption = getOption({
      mapName: regionName.value,
      powerGeneralData: cityCenterNumGeneralData.value,
      powerOwnData: cityCenterNumOwnData.value,
    })
    option.value = lodashMerge(tempOption, {
      geo: [
        {
          layoutCenter: ['50%', '55%'],
          layoutSize: '65%',
        },
        {
          layoutCenter: ['50%', '55%'],
          layoutSize: '65%',
        },
        {
          layoutCenter: ['50%', '56.5%'],
          layoutSize: '65%',
        },
      ],
    })
  }
}

async function handleMapClick(event: any) {
  if (event.name === '南海诸岛'
    || (!['北京市', '天津市', '上海市', '重庆市', '香港特别行政区', '澳门特别行政区'].includes(event.name)
      && regionName.value === event.name)
  ) {
    return
  }

  if (event.seriesType === 'effectScatter' && regionName.value !== 'china') {
    await getPowerList(event.data.id)
    $event.emit('show-detail-dialog', {
      dataList: dialogPowerList.value,
      title: event.name,
      constructionType: event.data.constructionType,
    })
    return
  }

  regionName.value = event.name
  await getCityCenterNumData()
  renderMap()
}

function backMap(event: any) {
  if (!event.target && regionName.value !== 'china') {
    regionName.value = 'china'
    renderMap()
  }
}
</script>

<template>
  <div class="absolute bottom-0 left-0 right-0 top-[--g-header-height] of-hidden">
    <VChart ref="chartRef" class="flex-1" autoresize :option @click="handleMapClick" @zr:click="backMap" />
    <slot :region-name />
  </div>
</template>
