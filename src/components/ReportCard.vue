<script setup>
import ReportDoughnut from './ReportDoughnut.vue'

const props = defineProps({
  acc: Number,
  fp: Number,
  fn: Number,
  precision: Number,
  recall: Number,
  f1: Number
})
</script>

<template>
  <div class="card report-card">
    <h5 class="card-header"><slot name="title"></slot></h5>
    <div class="card-body">
      <p>Testing time: <slot name="test-time"></slot></p>
      <p>Testing Sample Number: <slot name="test-sample-num"></slot></p>
      <p>Total Sample Number: <slot name="total-sample-num"></slot></p>

      <!-- charts start -->
      <div class="row">
        <div class="col">
          <ReportDoughnut :num="acc">
            <template v-slot:title>Accuracy</template>
          </ReportDoughnut>
        </div>
        <div class="col">
          <ReportDoughnut :num="fp">
            <template v-slot:title>False positive</template>
          </ReportDoughnut>
        </div>
        <div class="col">
          <ReportDoughnut :num="fn">
            <template v-slot:title>False negative</template>
          </ReportDoughnut>
        </div>
        <div class="col">
          <ReportDoughnut :num="precision">
            <template v-slot:title>Precision</template>
          </ReportDoughnut>
        </div>
        <div class="col">
          <ReportDoughnut :num="recall">
            <template v-slot:title>Recall</template>
          </ReportDoughnut>
        </div>
        <div class="col">
          <ReportDoughnut :num="f1">
            <template v-slot:title>F1 score</template>
          </ReportDoughnut>
        </div>
      </div>
      <!-- charts end -->

      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
