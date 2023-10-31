<script setup>
import BasePage from '../components/BasePage.vue'
import ReportCard from '../components/ReportCard.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const isLogIn = ref(true)
const report_fail = ref(false)
const reports = ref([])

// get report ids from url
const route = useRoute()
var ids = route.params.ids
ids = ids.split(',')

// show fail report
if (ids[0] == 'fail') {
  report_fail.value = true
}
// get report
else {
  for (let id of ids) {
    fetch(`http://140.118.155.18:8000/api/report/${id}`, { method: 'GET', credentials: 'include' })
      .then((response) => {
        return response.json()
      })
      .then((response) => {
        reports.value.push(response)
      })
      .catch((error) => console.error(error))
  }
}
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Report</template>
    <template v-slot:content>
      <div v-if="report_fail" class="row row-cols-1 row-cols-md-1">
        <div class="card">
          <div class="card-header"><h5>Error</h5></div>
          <div class="card-body">fail to generate report</div>
        </div>
      </div>
      <div v-else class="row row-cols-1 row-cols-md-1">
        <div v-for="r in reports" :key="r.report_id" class="col mb-4">
          <ReportCard
            :acc="r.accuracy"
            :fp="r.false_positive"
            :fn="r.false_negative"
            :precision="r.precision"
            :recall="r.recall"
            :f1="r.f1"
          >
            <template v-slot:title>{{ r.function_type }}</template>
            <template v-slot:test-sample-num>{{ r.testing_sample_num }}</template>
            <template v-slot:total-sample-num>{{ r.total_sample_num }}</template>
            <template v-slot:test-time-max>{{ r.max_time }}</template>
            <template v-slot:test-time-min>{{ r.min_time }}</template>
            <template v-slot:test-time-avg>{{ r.avg_time }}</template>
            <template v-slot:test-time-total>{{ r.testing_time }}</template>
          </ReportCard>
        </div>
      </div>
    </template>
  </BasePage>
</template>
