<script setup lang="ts">
defineOptions({
  name: 'PanelTitle',
})

defineProps({
  title: String,
})
</script>

<template>
  <div
    class="h-47 min-h-47 w-full bg-[url(~/assets/images/bg-panel-title.png)] bg-contain bg-no-repeat pl-60"
    flex="~ items-center"
  >
    <span
      class="text-(16 #ffffff/86 shadow-[2px_3px_35px_#004157]) font-(100 [YouSheBiaoTiHei]) tracking-1"
    >
      {{ title }}
    </span>
  </div>
</template>
