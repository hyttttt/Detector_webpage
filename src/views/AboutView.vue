<script setup>
import BasePage from '../components/BasePage.vue'
import DoughnutChart from '../components/DoughnutChart.vue'
import { ref } from 'vue'

const angle = ref(90)
</script>

<template>
  <BasePage>
    <template v-slot:title>About</template>
    <template v-slot:content><DoughnutChart :angle="angle"></DoughnutChart></template>
  </BasePage>
</template>

<style scoped></style>
