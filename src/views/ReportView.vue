<script setup>
import BasePage from '../components/BasePage.vue'
import ReportCard from '../components/ReportCard.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

const acc = ref(0.9)
const fp = ref(0.7)
const fn = ref(0.5)
const precision = ref(0.3)
const recall = ref(0.1)
const f1 = ref(0.01)
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Report</template>
    <template v-slot:content>
      <div class="row row-cols-1 row-cols-md-1">
        <div class="col mb-4">
          <ReportCard :acc="acc" :fp="fp" :fn="fn" :precision="precision" :recall="recall" :f1="f1">
            <template v-slot:title>Normal Samples</template>
            <template v-slot:test-sample-num>123456</template>
            <template v-slot:total-sample-num>789123</template>
            <template v-slot:test-time-max>123456</template>
            <template v-slot:test-time-min>789</template>
            <template v-slot:test-time-avg>542165</template>
            <template v-slot:test-time-total>785613</template>
          </ReportCard>
        </div>
        <div class="col mb-4">
          <ReportCard> <template v-slot:title>Sequence-based AEs</template> </ReportCard>
        </div>
        <div class="col mb-4">
          <ReportCard> <template v-slot:title>Structure-based AEs</template> </ReportCard>
        </div>
      </div>
    </template>
  </BasePage>
</template>
