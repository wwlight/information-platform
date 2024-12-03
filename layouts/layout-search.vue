<script lang="ts" setup>
defineOptions({
  name: 'LayoutSearch',
})

const { regionTree } = useApi()
const { $event } = useNuxtApp()
const search = defineModel('modelValue', {
  type: Object,
  default: {},
})
const computeCapacity = ref('')
const datetime = ref([])
const regionSelect = ref([])
const computeCapacityOptions = ref([
  { value: '0,99', label: '0 ~ 99 P' },
  { value: '100,500', label: '100 ~ 500 P' },
  { value: '500,1000', label: '500 ~ 1000 P' },
  { value: '1000,', label: '1000 P以上' },
])
const regionOptions = ref<any>([])
const cascaderProps = {
  label: 'name',
  value: 'id',
  checkStrictly: true,
}

onMounted(() => {
  getRegionOptions()

  $event.on('reset-search', () => {
    resetTempData()
  })
})

onUnmounted(() => {
  $event.off('reset-search')
})

function resetTempData() {
  computeCapacity.value = ''
  datetime.value = []
  regionSelect.value = []
}

async function getRegionOptions() {
  const [data] = await regionTree()
  regionOptions.value = data || []
}

watch(computeCapacity, (val) => {
  if (typeof val === 'string') {
    const [computeCapacityMin, computeCapacityMax] = val.split(',')
    Object.assign(search.value, { computeCapacityMin, computeCapacityMax })
  }
  else {
    Object.assign(search.value, { computeCapacityMin: undefined, computeCapacityMax: undefined })
  }
})

watch(regionSelect, (region) => {
  if (Array.isArray(region)) {
    const [provinceId, cityId] = region
    Object.assign(search.value, { provinceId, cityId })
  }
  else {
    Object.assign(search.value, { provinceId: undefined, cityId: undefined })
  }
})

watch(datetime, (date) => {
  const [beginTime, endTime] = useDateRange(date)
  Object.assign(search.value, { beginTime, endTime })
})
</script>

<template>
  <div class="absolute left-660 top-80 z-11" flex="~ gap-20">
    <el-input v-model="search.centerName" placeholder="算力中心名称" clearable maxlength="20" />
    <el-select v-model="computeCapacity" :teleported="false" placeholder="算力规模" clearable>
      <el-option v-for="item, index in computeCapacityOptions" :key="index" :label="item.label" :value="item.value" />
    </el-select>
    <el-cascader
      v-model="regionSelect" :options="regionOptions" :props="cascaderProps" :teleported="false"
      :show-all-levels="false" placeholder="算力位置" clearable filterable
    />
    <el-date-picker
      v-model="datetime" type="daterange" range-separator="~" start-placeholder="投产开始时间"
      end-placeholder="投产结束时间" value-format="YYYY-MM-DD" :teleported="false" class="!h-35 !w-290"
    />
  </div>
</template>

<style lang="scss" scoped>
.el-input {
  --el-input-border-radius: 2px;
  --el-input-border-color: #5485c8;
  --el-input-hover-border-color: #6facff;
  --el-input-focus-border-color: #6facff;
  --el-input-placeholder-color: rgb(242, 246, 255, 60%);
  --el-input-text-color: #ffffff;
  --el-input-icon-color: #5485c8;
  --el-input-clear-hover-color: #6facff;
  --el-input-width: 200px;
  --el-input-height: 35px;

  :deep(.el-input__wrapper) {
    background: radial-gradient(transparent, rgb(32, 100, 255, 20%));
  }
}

.el-select {
  --el-select-width: 200px;
  --el-text-color-placeholder: rgb(242, 246, 255, 60%);
  --el-input-text-color: #ffffff;
  --el-select-input-color: #6facff;

  :deep(.el-select__wrapper) {
    min-height: 35px;
    border-radius: 2px;
    background: radial-gradient(transparent, rgb(32, 100, 255, 20%));
    box-shadow: 0 0 0 1px #5485c8 inset;

    &.is-focused {
      box-shadow: 0 0 0 1px #6facff inset;
    }
  }

  :deep(.el-select__popper.el-popper) {
    --el-border-color-light: #5b91da;
    --el-bg-color-overlay: #0c1428;
    --el-popper-border-radius: 2px;

    .el-select-dropdown__item {
      color: #d1dff1;

      &.is-selected {
        color: #6598ff;
      }

      &.is-hovering {
        background-color: rgb(56, 137, 247, 20%);
      }
    }

    .el-popper__arrow:before {
      background: #0c1428;
    }
  }
}

:deep(.el-cascader) {
  line-height: 35px;

  .el-input {
    --el-input-height: 35px;
    --el-input-border-radius: 2px;
    --el-input-border-color: #5485c8;
    --el-input-hover-border-color: #6facff;
    --el-input-focus-border-color: #6facff;
    --el-input-icon-color: #5485c8;
    --el-input-clear-hover-color: #6facff;
    --el-input-placeholder-color: rgb(242, 246, 255, 60%);
    --el-input-text-color: #ffffff;

    .el-input__wrapper {
      background: radial-gradient(transparent, rgb(32, 100, 255, 20%));
    }
  }
}

:deep(.el-cascader__dropdown.el-popper) {
  --el-bg-color-overlay: #0c1428;
  --el-cascader-menu-fill: #0c1428;
  --el-cascader-menu-border: 1px solid #5b91da;

  .el-cascader-panel {
    --el-cascader-menu-border: 1px solid #5b91da;
    --el-cascader-menu-text-color: #d1dff1;
    --el-cascader-color-empty: #d1dff1;
    --el-cascader-node-background-hover: rgb(56, 137, 247, 20%);
    --el-cascader-menu-selected-text-color: #6facff;

    .el-radio {
      width: 100%;
      height: 100%;
      position: absolute;
      inset: 0;
      z-index: 2;
    }

    .el-radio__input {
      display: none;
    }
  }

  .el-cascader__suggestion-list {
    --el-cascader-menu-text-color: #6facff;
    --el-cascader-node-background-hover: rgb(56, 137, 247, 20%);
  }
}

:deep(.el-date-editor) {
  --el-input-border-color: #5485c8;
  --el-input-hover-border-color: #6facff;
  --el-input-focus-border-color: #6facff;
  --el-input-icon-color: #5485c8;
  --el-input-clear-hover-color: #5485c8;
  --el-text-color-placeholder: rgb(242, 246, 255, 60%);
  --el-text-color-regular: #ffffff;
  --el-input-border-radius: 2px;

  &.el-input__wrapper {
    background: radial-gradient(transparent, rgb(32, 100, 255, 20%)) !important;

    .el-range__close-icon {
      color: #6facff;
    }
  }

  .el-range__icon,
  .el-range-separator {
    color: #6facff;
  }
}

:deep(.el-picker__popper.el-popper) {
  --el-datepicker-border-color: #5b91da;

  .el-date-range-picker {
    --el-bg-color-overlay: #0c1428;
    --el-border-radius-base: 2px;
    --el-text-color-regular: #d1dff1;
    --el-datepicker-inner-border-color: #5b91da;
    --el-border-color-lighter: #5b91da;
    --el-datepicker-icon-color: #5b91da;
    --el-datepicker-inrange-bg-color: rgb(56, 137, 247, 20%);
    --el-datepicker-inrange-hover-bg-color: rgb(56, 137, 247, 20%);
    --el-datepicker-hover-text-color: #6facff;
    --el-datepicker-active-color: #6facff;
  }

  .el-popper__arrow:before {
    background: #0c1428;
  }
}
</style>
