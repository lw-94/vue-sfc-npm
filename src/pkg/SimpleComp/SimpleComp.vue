<script setup lang="ts">
defineProps<{
  msg: string
}>()
// vue3 component

console.log('🚀 ~ msg')
</script>

<template>
  <div>
    <!-- vue3 component -->
    <p class="tg text-10">
      simple-cp
    </p>
    <div class="tr">
      msg: {{ msg }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.tg{
  color: green;
}
.tr{
  color: red;
}
</style>
