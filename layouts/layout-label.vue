<script lang="ts" setup>
defineOptions({
  name: 'LayoutLabel',
})

const emit = defineEmits<{
  reset: [value: void]
}>()

const { powerLabelTree } = useApi()
const labelIdList = defineModel('modelValue', { type: Array<number>, default: () => ([]) })
const isFold = ref(false)
const lableList = ref<any>([])
const scrollbarRef = ref()

const [data] = await powerLabelTree() as any
lableList.value = data || []

function handleFoldToggle() {
  isFold.value = !isFold.value
}

async function toggleSelectLabel(id: number) {
  await nextTick()
  await scrollbarRef.value!.scrollTo({ top: 0, behavior: 'smooth' })
  if (labelIdList.value.includes(id)) {
    labelIdList.value = labelIdList.value.filter((i: number) => i !== id)
  }
  else {
    labelIdList.value.push(id)
  }
}

function resetSearch() {
  isFold.value = false
  emit('reset')
}
</script>

<template>
  <div
    v-if="!!lableList.length"
    class="absolute left-1/2 top-[--g-header-height] z-10 w-796 translate-x--1/2 of-hidden bg-#070F23/80 transition-max-height-300"
    :class="isFold ? 'h-max max-h-474px' : 'max-h-164px'" flex="~ col"
  >
    <el-scrollbar
      ref="scrollbarRef" class="flex-1" :class="!isFold ? '[&_.is-vertical]:(w-0 h-1 hidden)' : ''"
      :wrap-class="[!isFold ? '!of-y-hidden' : '', '!of-x-hidden']" max-height="412px"
    >
      <div class="p-16 space-y-16">
        <div v-for="item, index in lableList" :key="index" class="w-full lh-28" flex="~ gap-15">
          <div class="min-w-120 break-all pt-7 text-(right 14 #FEFEFE) lh-16 font-[aliPuHuiTi]">
            {{ item.labelName }}
          </div>
          <div class="flex flex-wrap gap-x-10 gap-y-16">
            <div
              v-for="label, inx in item.children || []" :key="inx"
              class="h-28 min-w-102 cursor-pointer break-all b-(1 #6facff solid) rd-100 bg-transparent px-12 text-(14 #EDF4FF) font-[aliPuHuiTi] shadow-[0_0_5px_#15295799_inset] transition-300"
              :class="labelIdList.includes(label.id) ? '!bg-#276eff !shadow-[0_0_5px_#6facff_inset]' : ''"
              flex="~ items-center justify-center" @click="toggleSelectLabel(label.id)"
            >
              {{ label.labelName }}
            </div>
          </div>
        </div>
      </div>
    </el-scrollbar>
    <div class="relative mb-5 pt-15">
      <div
        class="mx-a h-42 w-140 bg-[url(~/assets/images/bg-search-btn.png)] bg-cover bg-no-repeat transition ease-in hover:(scale-105 -translate-y-1)"
      >
        <div
          class="cursor-pointer text-(center 16 #F2F9FF shadow-[2px_0px_3px_#092031]) font-(500 [aliPuHuiTi]) lh-30"
          @click="resetSearch"
        >
          重置
        </div>
      </div>
      <div class="absolute left-62% top-18 cursor-pointer px-5" flex="~ items-center gap-5" @click="handleFoldToggle">
        <span class="text-(15 #F2F9FF/80 shadow-[2px_0px_3px_#092031]) font-(500 [aliPuHuiTi])">
          {{ isFold ? '收起' : '展开' }}
        </span>
        <div
          v-if="isFold"
          class="i-line-md:chevron-up?mask animate-rotate-in animate-duration-300 text-(14 #F2F9FF/80)"
        />
        <div v-else class="i-line-md:chevron-down?mask animate-rotate-in animate-duration-300 text-(14 #F2F9FF/80)" />
      </div>
    </div>
  </div>
</template>
