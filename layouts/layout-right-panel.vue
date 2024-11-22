<script lang="ts" setup>
defineOptions({
  name: 'LayoutRightPanel',
})

const { statisticCenterNum } = useApi()
const { $event } = useNuxtApp()

const config = ref<any>({})
onMounted(() => {
  getData()

  $event.on('refresh-right-panel-1_3', (params: any) => {
    getData(params)
  })
})

onUnmounted(() => {
  $event.off('refresh-right-panel-1_3')
})

async function getData(params: any = {}) {
  const [data] = await statisticCenterNum(params)
  Object.assign(config.value, data || {
    carbonEmission: 0,
    computeCapacity: 0,
    storageCapacity: 0,
  })
}
</script>

<template>
  <div
    class="pointer-events-none absolute bottom-0 right-[--g-padding-x] top-[--g-header-height] z-10 w-[--g-slider-panel-width] pt-16"
    flex="~ col gap-20"
  >
    <RightPanel1 :config class="animate-zoom-in animate-duration-300" />
    <RightPanel2 class="animate-zoom-in animate-duration-300" />
    <RightPanel3 :config class="animate-zoom-in animate-duration-300" />
  </div>
</template>
