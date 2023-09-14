<script setup>
import { ref } from 'vue'

const props = defineProps({
  reports: Object
})

// find max value
var max = 0
for (let r of props.reports) {
  if (max < r.value) max = r.value
}

// fill data of bar chart
var x = 0
const height = ref(300)
const width = 50
const data = ref([])

for (let r of props.reports) {
  var h = (r.value / max) * height.value
  data.value.push({
    id: r.id,
    value: r.value.toString(),
    name: r.name,
    x: x,
    y: 300 - h,
    width: width,
    height: h,
    fill: 'blue'
  })

  x += width + 20
}
</script>

<template>
  <div id="barchart">
    <svg width="600" :height="height">
      <rect
        v-for="i in data"
        :key="i.id"
        :x="i.x"
        :y="i.y"
        :width="i.width"
        :height="i.height"
        :fill="i.fill"
      />
    </svg>
    <svg width="600" height="100">
      <!--
      <text v-for="i in data" :key="i.id" :x="i.x" :y="30" fill="black">
        {{ i.value }}
      </text>
      <text v-for="i in data" :key="i.id" :x="i.x" :y="50" fill="black">
        {{ i.id }}
      </text>
      

      <text :x="data[0].x" y="50" fill="black">
        {{ data[0].name }}
      </text>

      -->
    </svg>
  </div>
</template>

<style scoped>
#barchart {
  margin-top: 5%;
  margin-left: 5%;
}
</style>
