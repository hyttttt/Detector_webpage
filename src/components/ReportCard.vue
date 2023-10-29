<!-- This is a report card that shows the report of a selected fuction -->
<!-- slots for: title (function name), testing sample number, total sample number, -->
<!--            testing time (max, min, avg, total)-->
<!-- props the result in-->

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
  <div class="card report-card" style="border-radius: 10px">
    <h5 class="card-header"><slot name="title"></slot></h5>
    <div class="card-body">
      <p><strong>Testing Sample Number: </strong><slot name="test-sample-num"></slot></p>
      <p><strong>Total Sample Number: </strong><slot name="total-sample-num"></slot></p>

      <!-- charts start -->
      <div class="row">
        <div class="col">
          <ReportDoughnut :num="acc">
            <template v-slot:title>Accuracy</template>
          </ReportDoughnut>
        </div>
        <!-- <div class="col">
          <ReportDoughnut :num="fp">
            <template v-slot:title>False positive</template>
          </ReportDoughnut>
        </div>
        <div class="col">
          <ReportDoughnut :num="fn">
            <template v-slot:title>False negative</template>
          </ReportDoughnut>
        </div> -->
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
      <p>Max: <slot name="test-time-max"></slot> s</p>
      <p>Min: <slot name="test-time-min"></slot> s</p>
      <p>Average: <slot name="test-time-avg"></slot> s</p>
      <p>Total: <slot name="test-time-total"></slot> s</p>
      <!-- testing time end -->
    </div>
  </div>
</template>
