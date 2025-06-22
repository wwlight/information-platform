<script setup lang="ts">
import { appDescription, appName } from '~/constants'

defineOptions({
  name: 'LayoutHeader',
})

const now = useNow()
const time = useDateFormat(now, 'HH : mm : ss')
const date = useDateFormat(now, 'YYYY . MM . DD')
</script>

<template>
  <header class="absolute left-0 right-0 top-0 z-10 h-[--g-header-height]" flex="~ justify-between items-center">
    <div
      class="[background-position:bottom_3px_left_30px] relative h-full w-58% bg-[url(~/assets/images/bg-header.png)] bg-contain bg-no-repeat pl-57"
      flex="~ col justify-center"
    >
      <div flex="~ items-center">
        <img src="~/assets/images/logo.png" class="h-78 w-100">
        <div
          class="from-[#9bafe8] to-[#ffffff] bg-gradient-to-t bg-clip-text pt-5 text-40 text-transparent tracking-2 font-[YouSheBiaoTiHei]"
        >
          {{ appName }}
        </div>
      </div>
      <div class="absolute bottom-20 left-150 text-(14 #eff8fc/50) font-[aliPuHuiTi]">
        {{ appDescription }}
      </div>
    </div>
    <div flex="~ col items-end" class="pl-10 pr-[--g-padding-x]">
      <div class="text-20 text-#CCD6E3 font-(bold [play])">
        {{ time }}
      </div>
      <div class="text-14 text-#CDD5E3 font-(bold [DIN])">
        {{ date }}
      </div>
    </div>
  </header>
</template>
