<script setup>
import BasePage from '../components/BasePage.vue'
import ReportCard from '../components/ReportCard.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const isLogIn = ref(true)

const route = useRoute()
const id = route.params.id

// get report
const report = ref('')
fetch(`/api/report/${id}`)
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    report.value = response
  })
  .catch((error) => console.error(error))
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Report</template>
    <template v-slot:content>
      <div class="row row-cols-1 row-cols-md-1">
        <div class="col mb-4">
          <ReportCard
            :acc="report.accuracy"
            :fp="report.fp"
            :fn="report.fn"
            :precision="report.precision"
            :recall="report.recall"
            :f1="report.f1"
          >
            <template v-slot:title>{{ report.function_type }}</template>
            <template v-slot:test-sample-num>{{ report.testing_sample_num }}</template>
            <template v-slot:total-sample-num>{{ report.total_sample_num }}</template>
            <template v-slot:test-time-max>{{ report.max_time }}</template>
            <template v-slot:test-time-min>{{ report.min_time }}</template>
            <template v-slot:test-time-avg>{{ report.avg_time }}</template>
            <template v-slot:test-time-total>{{ report.testing_time }}</template>
          </ReportCard>
        </div>
        <!--
        <div class="col mb-4">
          <ReportCard> <template v-slot:title>Sequence-based AEs</template> </ReportCard>
        </div>
        <div class="col mb-4">
          <ReportCard> <template v-slot:title>Structure-based AEs</template> </ReportCard>
        </div>
        -->
      </div>
    </template>
  </BasePage>
</template>
