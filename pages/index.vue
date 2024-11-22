<script setup lang="ts">
const { $event } = useNuxtApp()
const visible = ref(false)
const dataList = ref([])
const title = ref('')
const type = ref<'general' | 'own'>('general')

onMounted(() => {
  $event.on('show-detail-dialog', (data: any) => {
    visible.value = true
    dataList.value = data.dataList
    title.value = data.title
    type.value = +data.constructionType === 1 ? 'own' : 'general'
  })
})

onUnmounted(() => {
  $event.off('show-detail-dialog')
})
</script>

<template>
  <ChartMap v-slot="{ regionName }">
    <Transition
      enter-active-class="animate-zoom-in animate-duration-300"
      leave-active-class="animate-zoom-out animate-duration-300"
    >
      <div v-if="regionName !== 'china'" class="absolute bottom-50 right-540 z-5" flex="~ col gap-10">
        <div class="relative">
          <span class="absolute inset-0 text-(14 #ffffff/80) font-[aliPuHuiTi]" flex="~ justify-center items-center">
            自有建设
          </span>
          <img src="~/assets/images/icon-legend-own.png" class="h-30 w-94">
        </div>
        <div class="relative">
          <span class="absolute inset-0 text-(14 #ffffff/80) font-[aliPuHuiTi]" flex="~ justify-center items-center">
            通用建设
          </span>
          <img src="~/assets/images/icon-legend-general.png" class="h-30 w-94">
        </div>
      </div>
    </Transition>

    <DetailDialog v-model="visible" :data-list :title :type />
  </ChartMap>
</template>
