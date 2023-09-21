<!-- This shows some statistic in the dashboard page -->

<template>
  <div class="card statistic-card">
    <div class="row">
      <div class="col statistic-val">
        <h6 class="card-subtitle mb-2 text-muted"><slot name="title"></slot></h6>
        <h5 class="card-title text-center"><slot name="number"></slot></h5>
      </div>
      <div class="col-5 text-right"><slot name="img"></slot></div>
    </div>
    <div class="row" id="card-descibe">
      <small class="text-muted"><slot name="last-date"></slot></small>
    </div>
  </div>
</template>

<style scoped>
.statistic-card {
  height: 15vh;
  padding: 5%;
  border: 0;
}

#card-descibe {
  padding: 0 0 0 5%;
}
</style>
