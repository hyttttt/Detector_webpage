<script setup>
import { ref } from 'vue'

const props = defineProps({
  bar_data: Object,
  bar_height: Number,
  bar_width: Number
})
</script>

<template>
  <div id="barchart">
    <svg width="100%" :height="bar_height">
      <rect
        v-for="i in bar_data"
        :key="i.id"
        :x="i.x"
        :y="i.y"
        :width="i.width"
        :height="i.height"
        :fill="i.fill"
      />
    </svg>
  </div>
</template>

<style scoped>
#barchart {
  margin-top: 5%;
  margin-left: 5%;
}
</style>
