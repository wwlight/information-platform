<script setup lang="ts">
defineOptions({
  name: 'RightPanel2',
})

const { regionCenterNum } = useApi()
const { $event } = useNuxtApp()

const regionListData = ref<any>([])
const classOptions = ref({
  limitMoveNum: 4,
  singleHeight: 50,
  waitTime: 3000,
})

onMounted(() => {
  getData()

  $event.on('refresh-right-panel-2', (params: any) => {
    getData(params)
  })
})

onUnmounted(() => {
  $event.off('refresh-right-panel-2')
})

async function getData(params: any = {}) {
  const [data] = await regionCenterNum(params)
  regionListData.value = data || []
  const total = regionListData.value.reduce((acc: number, cur: any) => acc + cur.centerNum, 0)
  regionListData.value.forEach((item: any) => {
    item.percentage = `${(item.centerNum / total * 100).toFixed(2)}%`
  })
}
</script>

<template>
  <div class="pointer-events-auto h-294 w-full bg-[--g-slider-panel-bg] p-[--g-slider-panel-padding]" flex="~ col">
    <PanelTitle title="集成算力地域分布" />
    <vue3ScrollSeamless
      v-if="!!regionListData.length" :data-list="regionListData" :class-options="classOptions"
      class="mb-9 mt-12 w-full flex-1 of-hidden pt-5"
    >
      <div v-for="item, index in regionListData" :key="index" flex="~ items-center gap-6" class="h-50 px-24">
        <img src="~/assets/images/icon-progress-label.png" class="h-11 w-17">
        <span
          class="line-clamp-2 w-80 break-all text-16 text-#bde1ff font-[aliPuHuiTi]"
          v-text="item.regionName || '--'"
        />
        <div class="relative" flex="~ 1 gap-10 items-center">
          <div class="relative h-8 flex-1">
            <div class="absolute inset-0 bg-#3c4a5ea8" />
            <div
              class="absolute bottom-0 left-0 top-0 h-full from-transparent via-[#669bde_85%] to-[#0b56ff_100%] bg-gradient-to-r"
              :style="{ width: `${item.percentage}` }"
            />
            <div
              class="absolute top--23 size-42" flex="~ justify-center gap-2"
              :style="{ left: `calc(${item.percentage} - 21px)` }"
            >
              <span class="m--2 text-16 text-#bde1ff font-[DIN]">{{ item.centerNum }}</span>
              <img src="~/assets/images/icon-progress-line.png" class="absolute inset-0 size-42">
            </div>
          </div>
          <div class="w-38 text-16 text-#DBE6F5 font-[DIN]">
            {{ item.percentage }}
          </div>
        </div>
      </div>
    </vue3ScrollSeamless>
    <Empty v-else />
  </div>
</template>
