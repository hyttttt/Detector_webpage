<!-- This is a testing page as a playgorund -->

<script setup>
import BasePage from '../components/BasePage.vue'
import BarChart from '../components/BarChart.vue'
import { ref } from 'vue'

const reports = ref([
  { id: 123, value: 123, name: 123 },
  { id: 456, value: 300, name: 456 }
])
console.log('reports')
console.log(reports.value)

function button() {
  console.log('click')
  reports.value = []

  console.log(reports.value)
}
</script>

<template>
  <BasePage>
    <template v-slot:title>Dashboard</template>
    <template v-slot:content>
      <div class="card" style="height: 80vh">
        <div class="card-body">
          <button @click="button">click me</button>
          <BarChart :reports="reports"></BarChart>
        </div>
      </div>
    </template>
  </BasePage>
</template>
