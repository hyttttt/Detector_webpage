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

      <!-- testing time start -->
      <p>
        <strong><br />Testing time:</strong>
      </p>
      <p>Max: <slot name="test-time-max"></slot> ms</p>
      <p>Min: <slot name="test-time-min"></slot> ms</p>
      <p>Average: <slot name="test-time-avg"></slot> ms</p>
      <p>Total: <slot name="test-time-total"></slot> ms</p>
      <!-- testing time end -->
    </div>
  </div>
</template>
