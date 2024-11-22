<script lang="ts" setup>
import autofit from 'autofit.js'

onMounted(() => {
  autofit.init()
})
</script>

<template>
  <ClientOnly>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </ClientOnly>
</template>
