<script setup>
import BasePage from '../components/BasePage.vue'
import TestButton from '../components/buttons/TestButton.vue'
import UpdateButton from '../components/buttons/UpdateButton.vue'
import DeleteButton_d from '../components/buttons/DeleteButton_d.vue'
import DeleteButton_r from '../components/buttons/DeleteButton_r.vue'
import Addbutton from '../components/buttons/Addbutton.vue'
import ViewReportButton from '../components/buttons/ViewReportButton.vue'
import StatisticCard from '../components/StatisticCard.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

// get detector list
const detectors = ref([])

fetch('/api/detector')
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    response.forEach(function (d) {
      detectors.value.push({
        detector_id: d.detector_id,
        detector_name: d.detector_name,
        file_id: d.file_id
      })
    })
  })
  .catch((error) => console.error(error))

// get report list
const reports = ref([])
fetch('/api/report')
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    response.forEach(function (r) {
      reports.value.push({
        report_id: r.report_id,
        function_type: r.function_type,
        accuracy: r.accuracy,
        fp: r.fp,
        fn: r.fn,
        precision: r.precision,
        recall: r.recall,
        f1: r.f1,
        avg_time: r.avg_time,
        min_time: r.min_time,
        max_time: r.max_time,
        testing_time: r.testing_time,
        testing_sample_num: r.testing_sample_num,
        total_sample_num: r.total_sample_num
      })
    })
  })
  .catch((error) => console.error(error))
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Dashboard</template>
    <template v-slot:content>
      <div class="row" id="row-statistic">
        <div class="col">
          <StatisticCard>
            <template v-slot:title>Dectector number</template>
            <template v-slot:number>3</template>
            <template v-slot:last-date>Last upload: 2023/8/6</template>
            <template v-slot:img>
              <img src="../assets/search.jpg" width="64" style="border-radius: 100%" />
            </template>
          </StatisticCard>
        </div>
        <div class="col">
          <StatisticCard>
            <template v-slot:title>Dectector number</template>
            <template v-slot:number>3</template>
            <template v-slot:last-date>Last upload: 2023/8/6</template>
            <template v-slot:img>
              <img src="../assets/search.jpg" width="64" style="border-radius: 100%" />
            </template>
          </StatisticCard>
        </div>
        <div class="col">
          <StatisticCard>
            <template v-slot:title>Dectector number</template>
            <template v-slot:number>3</template>
            <template v-slot:last-date>Last upload: 2023/8/6</template>
            <template v-slot:img>
              <img src="../assets/search.jpg" width="64" style="border-radius: 100%" />
            </template>
          </StatisticCard>
        </div>
        <div class="col">
          <StatisticCard>
            <template v-slot:title>Dectector number</template>
            <template v-slot:number>3</template>
            <template v-slot:last-date>Last upload: 2023/8/6</template>
            <template v-slot:img>
              <img src="../assets/search.jpg" width="64" style="border-radius: 100%" />
            </template>
          </StatisticCard>
        </div>
      </div>
      <div class="row">
        <!-- dectector list start -->
        <div class="col">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">Detector List</div>
                <div class="col text-right"><Addbutton /></div>
              </div>
            </div>
            <ul class="list-group" id="d-list">
              <li v-for="d in detectors" :key="d.detector_id" class="list-group-item">
                <div class="row">
                  <div class="col">
                    <a>{{ d.detector_name }}</a>
                  </div>
                  <div class="col-2 text-right">
                    <TestButton :did="d.detector_id" />
                  </div>
                  <div class="col-2 text-right">
                    <UpdateButton :did="d.detector_id" />
                  </div>
                  <div class="col-2 text-right">
                    <DeleteButton_d :did="d.detector_id" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- dectector list end -->

        <!-- report list start -->
        <div class="col">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">Report History</div>
                <div class="col text-right" style="visibility: hidden"><Addbutton /></div>
              </div>
            </div>
            <ul class="list-group" id="r-list">
              <li v-for="r in reports" :key="r.report_id" class="list-group-item">
                <div class="row">
                  <div class="col">
                    <a>Report {{ r.report_id }}</a>
                  </div>
                  <div class="col-2 text-right"><ViewReportButton :rid="r.report_id" /></div>
                  <div class="col-2 text-right"><DeleteButton_r :rid="r.report_id" /></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- report list end -->
      </div>
    </template>
  </BasePage>
</template>

<style scoped>
#row-statistic {
  margin-bottom: 3%;
}

.card {
  border-radius: 10px;
}
</style>
