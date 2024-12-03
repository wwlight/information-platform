<script lang="ts" setup>
import { ElScrollbar } from 'element-plus'

defineOptions({
  name: 'DetailDialog',
})

const props = withDefaults(
  defineProps<{
    type?: 'general' | 'own'
    dataList: any
    title: string
  }>(),
  {
    type: 'own',
    dataList: [],
    title: '',
  },
)
const visible = defineModel('modelValue', { type: Boolean, default: false })
const { isFalsy } = useUtils()
const contentScrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const activeId = ref()
const activeDetail = ref<any>([])
const detailConfig = ref([
  { label: '算力中心名称', contentKey: 'name' },
  { label: '算力位置', contentKey: 'location' },
  { label: '算力规模', contentKey: 'computeCapacity', unit: 'P' },
  { label: '能源类型', contentKey: 'energyType' },
  { label: '规划用地', contentKey: 'plannedLandArea', unit: '亩' },
  { label: '建筑面积', contentKey: 'constructionArea', unit: '平方米' },
  { label: '算力设备', contentKey: 'deviceNames' },
  { label: '存储能力', contentKey: 'storageCapacity', unit: 'TB' },
  { label: '投产时间', contentKey: 'commissioningDate' },
  { label: '运营方', contentKey: 'operator' },
  { label: '网络运营商', contentKey: 'networkOperators' },
  { label: '运维服务', contentKey: 'maintenanceServices' },
  { label: '应用领域', contentKey: 'applicationFields' },
  { label: '异构计算支持', contentKey: 'heterogeneousComputeSupport' },
  { label: '电源使用效率', contentKey: 'pue' },
  { label: '碳排放量', contentKey: 'carbonEmission', unit: '吨/年' },
  { label: '碳排放', contentKey: 'carbonEmissionStrategy' },
  { label: '冷却系统', contentKey: 'coolingSystemName' },
])

watch(
  [() => visible, () => props.dataList],
  ([show, list = []]) => {
    if (show && list.length > 0) {
      activeDetail.value = mapperDetailConfig(list[0])
    }
  },
  { immediate: true, deep: true },
)

function mapperDetailConfig(data: any = {}) {
  const hasValue: any = []
  const emptyValue: any = []
  activeId.value = data?.id
  detailConfig.value.forEach((item: any) => {
    const content = data[item.contentKey]
    if (isFalsy(content)) {
      emptyValue.push({ ...item, content: '' })
    }
    else {
      hasValue.push({ ...item, content })
    }
  })
  return [...hasValue, ...emptyValue]
}

function handleMenuChange(item: any) {
  activeDetail.value = mapperDetailConfig(item)
  contentScrollbarRef.value!.setScrollTop(0)
}

function handleCloseDialog() {
  visible.value = false
}
</script>

<template>
  <el-dialog
    v-model="visible" :show-close="false" append-to-body destroy-on-close align-center :lock-scroll="false"
    class="relative before:(absolute bottom--6 left--8 right--8 top--6 z--1 bg-contain bg-no-repeat content-['']) !h-490 !w-597 !rounded-0 !p-[9px_0] ![&_.el-dialog\_\_body]:(flex flex-1 flex-col of-hidden) ![&_.el-dialog\_\_header]:(pb-9)"
    flex="~ col"
    :class="[type === 'own' ? '!bg-#001b2d/90 before:bg-[url(~/assets/images/bg-dialog-full1.png)]' : '!bg-#110f04/90 before:bg-[url(~/assets/images/bg-dialog-full2.png)]']"
    :before-close="handleCloseDialog"
  >
    <template #header>
      <div
        class="h-44 w-full bg-([url(~/assets/images/bg-dialog-title1.png)] contain no-repeat)"
        flex="~ justify-between items-center gap-30"
        :class="[type === 'own' ? 'bg-[url(~/assets/images/bg-dialog-title1.png)]' : 'bg-[url(~/assets/images/bg-dialog-title2.png)]']"
      >
        <div
          class="ml-20 h-full truncate text-20 font-(100 [YouSheBiaoTiHei]) tracking-1" flex="~ 1 items-center"
          :class="[type === 'own' ? 'text-#e4edff' : 'text-#f6f3db']"
        >
          <span>{{ `${title}算力基本信息` }}</span>
        </div>
        <img
          src="~/assets/images/bg-dialog-close.png" class="mr-20 mt--10 h-24 w-25 cursor-pointer"
          @click="handleCloseDialog"
        >
      </div>
    </template>
    <div
      class="relative flex flex-1 of-hidden after:(absolute bottom-1 left-10 right-10 h-1 content-['']) before:(absolute left-10 right-10 top-0 h-1 content-[''])"
      :class="[type === 'own' ? 'after:bg-#57A8C9/60 before:bg-#57A8C9/60' : 'after:bg-#c9ad57/60 before:bg-#c9ad57/60']"
    >
      <div
        class="mb-1 w-134 b-(r-1 r-solid)" flex="~ col"
        :class="[type === 'own' ? 'b-r-#57A8C9/60' : 'b-r-#c9ad57/60']"
      >
        <div
          class="py-16 pl-16 text-12 font-[aliPuHuiTi]"
          :class="[type === 'own' ? 'text-#CDDBE5/60' : 'text-#e5e2cd/60']"
        >
          点位名称
        </div>
        <ElScrollbar class="flex-1" view-class="flex-(~ col gap-10)">
          <div
            v-for="item, key in dataList" :key
            class="cursor-pointer break-all b-(l-3 l-transparent l-solid) py-6 pl-12 pr-8 text-14 font-[aliPuHuiTi]"
            :class="[type === 'own' ? 'text-#e2f2ff' : 'text-#fff9e2', activeId === item.id ? type === 'own' ? '!b-l-#6de5ff to-transparent bg-gradient-to-r from-#1a8ce4 via-#1a8ce480' : '!b-l-#fae321 to-transparent bg-gradient-to-r from-#e4b71a via-#e4b71a80' : '']"
            @click="handleMenuChange(item)"
          >
            {{ item.label }}
          </div>
        </ElScrollbar>
      </div>
      <div class="flex-1 py-16 pl-12">
        <ElScrollbar
          ref="contentScrollbarRef" :view-class="[
            'pr-12 flex-(~ col gap-15)', type === 'own'
              ? '[&_label]:(min-w-95 text-#e6f2ff) [&_span]:text-#9de0ff'
              : '[&_label]:(min-w-95 text-#fefef1) [&_span]:text-#ffecb1 ',
          ]"
        >
          <div v-for="item, index in activeDetail" :key="index" class="flex gap-20">
            <label class="text-(right nowrap 15) font-[aliPuHuiTi]">{{ item.label }}</label>
            <span class="break-all text-15 font-[aliPuHuiTi] el-empty">
              {{ item.content }}<span v-if="item.unit && !isFalsy(item.content)"> {{ item.unit }}</span>
            </span>
          </div>
        </ElScrollbar>
      </div>
    </div>
  </el-dialog>
</template>
