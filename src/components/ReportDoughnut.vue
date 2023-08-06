<script setup>
import DoughnutChart from './DoughnutChart.vue'

const props = defineProps({
  num: Number
})
</script>

<template>
  <div class="text-center">
    <strong><slot name="title"></slot></strong>
  </div>
  <div class="text-center">
    {{ num }}
  </div>
  <div class="text-center">
    <DoughnutChart :percent="num" />
  </div>
</template>
