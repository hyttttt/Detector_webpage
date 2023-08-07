<!-- This is the doughnut chart -->
<!-- props percentage in and it will draw the chart automatically-->

<template>
  <div class="doughnut-chart">
    <svg width="100" height="100">
      <circle cx="50" cy="50" r="30" fill="none" stroke="#ddd" stroke-width="20" />
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="#3498db"
        stroke-width="20"
        :stroke-dasharray="strokeDasharray"
        :stroke-dashoffset="strokeDashoffset"
        :transform="`rotate(270 50 50)`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radius: 30
    }
  },
  props: {
    percent: Number
  },
  computed: {
    strokeDasharray() {
      const circumference = 2 * Math.PI * this.radius
      const progress = this.percent * circumference
      return `${progress} ${circumference}`
    },
    strokeDashoffset() {
      const circumference = 2 * Math.PI * this.radius
      return circumference - this.strokeDasharray
    }
  }
}
</script>
