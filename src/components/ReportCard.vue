<template>
  <div class="card report-card">
    <h5 class="card-header"><slot name="title"></slot></h5>
    <div class="card-body">
      <p>Testing time: <slot name="test-time"></slot></p>
      <p>Testing Sample Number: <slot name="test-sample-num"></slot></p>
      <p>Total Sample Number: <slot name="total-sample-num"></slot></p>
      <!-- report title start -->
      <div class="row text-center">
        <div class="col">
          <strong>Accuracy</strong>
        </div>
        <div class="col">
          <strong>False positive</strong>
        </div>
        <div class="col">
          <strong>False negative</strong>
        </div>
        <div class="col">
          <strong>Precision</strong>
        </div>
        <div class="col">
          <strong>Recall</strong>
        </div>
        <div class="col">
          <strong>F1 score</strong>
        </div>
      </div>
      <!-- report title end -->

      <!-- report value start -->
      <div class="row text-center">
        <div class="col">
          <p><slot name="acc"></slot></p>
        </div>
        <div class="col">
          <p><slot name="fp"></slot></p>
        </div>
        <div class="col">
          <p><slot name="fn"></slot></p>
        </div>
        <div class="col">
          <p><slot name="precision"></slot></p>
        </div>
        <div class="col">
          <p><slot name="recall"></slot></p>
        </div>
        <div class="col">
          <p><slot name="f1"></slot></p>
        </div>
      </div>
      <!-- report value end -->
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>
