<script setup lang="ts">
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import cloneDeep from 'lodash-es/cloneDeep'
import LayoutHeader from './layout-header.vue'
import LayoutLabel from './layout-label.vue'
import LayoutLeftPanel from './layout-left-panel.vue'
import LayoutRightPanel from './layout-right-panel.vue'
import LayoutSearch from './layout-search.vue'

const DEFAULT_SEARCH = {
  centerName: undefined,
  computeCapacityMin: undefined,
  computeCapacityMax: undefined,
  provinceId: undefined,
  cityId: undefined,
  beginTime: undefined,
  endTime: undefined,
}

const { $event } = useNuxtApp()
const search = ref(useCloned(DEFAULT_SEARCH, { clone: cloneDeep }).cloned.value)
const labelIdList = ref([])

watch([() => search.value, () => labelIdList.value], () => {
  searchAllData()
}, { deep: true })

function searchAllData() {
  const params = Object.assign({}, search.value, { labelIdList: undefined })
  if (labelIdList.value.length) {
    Object.assign(params, { labelIdList: unref(labelIdList.value) })
  }
  $event.emit('refresh-main-map', params)
  $event.emit('refresh-left-panel-1', params)
  $event.emit('refresh-left-panel-2', params)
  $event.emit('refresh-left-panel-3', params)
  $event.emit('refresh-right-panel-1_3', params)
  $event.emit('refresh-right-panel-2', params)
}

function resetSearch() {
  Object.assign(search.value, useCloned(DEFAULT_SEARCH, { clone: cloneDeep }).cloned.value)
  $event.emit('reset-search')
  $event.emit('reset-map-search')
  labelIdList.value = []
}
</script>

<template>
  <el-config-provider :locale="zhCn">
    <div class="absolute inset-0 from-#0e1424 to-#1b2131 bg-gradient-to-t" flex="~ justify-center">
      <div class="relative h-1080 w-1920 bg-[url(~/assets/images/bg-main.png)] bg-cover bg-no-repeat">
        <div
          class="pointer-events-none absolute inset-0 z-3 bg-[url(~/assets/images/bg-fullscreen-mask.png)] bg-cover bg-no-repeat"
        />
        <LayoutHeader />
        <LayoutSearch v-model="search" class="animate-fade-in animate-duration-300" />
        <LayoutLabel v-model="labelIdList" class="animate-fade-in animate-duration-300" @reset="resetSearch" />
        <LayoutLeftPanel />
        <LayoutRightPanel />
        <slot />
      </div>
    </div>
  </el-config-provider>
</template>
