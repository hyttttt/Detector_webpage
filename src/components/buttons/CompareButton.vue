<!-- This is the comparing button to compare the selected reports-->

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  reports: Object
})

const router = useRouter()
function compare() {
  // get report id list
  var rids = []
  for (let r of props.reports) {
    rids.push(r.report_id)
  }
  rids = rids.join(',')

  router.push(`/comparingReports/${rids}`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="compare">Compare Reports</button>
  </div>
</template>
