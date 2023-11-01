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

  // fix decimal to 6 digit
  for (var i = 0; i < reports.value.length; i++) {
    reports.value[i].accuracy = reports.value[i].accuracy.toFixed(6)
    reports.value[i].precision = reports.value[i].precision.toFixed(6)
    reports.value[i].recall = reports.value[i].recall.toFixed(6)
    reports.value[i].f1 = reports.value[i].f1.toFixed(6)
    reports.value[i].avg_time = reports.value[i].avg_time.toFixed(6)
    reports.value[i].min_time = reports.value[i].min_time.toFixed(6)
    reports.value[i].max_time = reports.value[i].max_time.toFixed(6)
    reports.value[i].testing_time = reports.value[i].testing_time.toFixed(6)
  }

  // test report data type
  console.log('accuracy: ' + typeof reports.value[0].accuracy)
  console.log('precision: ' + typeof reports.value[0].precision)
  console.log('recall: ' + typeof reports.value[0].recall)
  console.log('f1: ' + typeof reports.value[0].f1)
  console.log('avg_time: ' + typeof reports.value[0].avg_time)
  console.log('min_time: ' + typeof reports.value[0].min_time)
  console.log('max_time: ' + typeof reports.value[0].max_time)
  console.log('testing_time: ' + typeof reports.value[0].testing_time)
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
