<script setup lang="ts">
defineOptions({
  name: 'LayoutLeftPanel',
})
</script>

<template>
  <div
    class="pointer-events-none absolute bottom-0 left-[--g-padding-x] top-[--g-header-height] z-10 w-[--g-slider-panel-width] pt-16"
    flex="~ col gap-20"
  >
    <LeftPanel1 class="animate-zoom-in animate-duration-300" />
    <LeftPanel2 class="animate-zoom-in animate-duration-300" />
    <LeftPanel3 class="animate-zoom-in animate-duration-300" />
  </div>
</template>

<style scoped lang="scss"></style>
