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
        // fix decimal to 6 digit
        var r = response
        if (!Number.isInteger(r.accuracy)) r.accuracy = r.accuracy.toFixed(6)
        if (!Number.isInteger(r.precision)) r.precision = r.precision.toFixed(6)
        if (!Number.isInteger(r.recall)) r.recall = r.recall.toFixed(6)
        if (!Number.isInteger(r.f1)) r.f1 = r.f1.toFixed(6)
        if (!Number.isInteger(r.avg_time)) r.avg_time = r.avg_time.toFixed(6)
        if (!Number.isInteger(r.min_time)) r.min_time = r.min_time.toFixed(6)
        if (!Number.isInteger(r.max_time)) r.max_time = r.max_time.toFixed(6)
        if (!Number.isInteger(r.testing_time)) r.testing_time = r.testing_time.toFixed(6)

        reports.value.push(r)
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
          <div class="card-body">
            <p>
              fail to generate report<br />
              get accuracy = -1
            </p>
            <div>
              <a href="/dash" class="btn btn-primary" style="visibility: hidden">fake button</a>
            </div>
            <a href="/dash" class="btn btn-primary">Go back to Dashboard</a>
          </div>
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
            <template v-slot:title>{{ r.detector_name + '_' + r.function_type }}</template>
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
