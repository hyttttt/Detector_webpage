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

const props = defineProps({
  load: Boolean,
  auth: String
})

const loading = ref(false)
if (props.load) loading.value = true

// get detector list
const detectors = ref([])

fetch('http://140.118.155.18:8000/api/detector', {
  method: 'GET',
  credentials: 'include'
})
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    response.forEach(function (d) {
      detectors.value.push({
        detector_id: d.detector_id,
        detector_name: d.detector_name.split('.')[0],
        file_id: d.file_id
      })
    })
  })
  .catch((error) => console.error(error))

// get report list
const reports = ref([])
fetch('http://140.118.155.18:8000/api/report', {
  method: 'GET',
  credentials: 'include'
})
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    response.forEach(function (r) {
      reports.value.push({
        report_id: r.report_id,
        function_type: r.function_type,
        accuracy: r.accuracy,
        // fp: r.fp,
        // fn: r.fn,
        precision: r.precision,
        recall: r.recall,
        f1: r.f1,
        avg_time: r.avg_time,
        min_time: r.min_time,
        max_time: r.max_time,
        testing_time: r.testing_time,
        testing_sample_num: r.testing_sample_num,
        total_sample_num: r.total_sample_num,
        user_id: r.user_id,
        user_name: r.user_name,
        testing_datetime: [
          r.testing_datetime.split('T')[0],
          r.testing_datetime.split('T')[1].split('Z')[0].split('.')[0]
        ],
        detector_name: r.detector_name.split('.')[0]
      })
    })
  })
  .catch((error) => console.error(error))
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Dashboard</template>
    <template v-slot:content>
      <!-- Statistic cards row start -->
      <!-- <div class="row" id="row-statistic">
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
      </div> -->
      <!-- Statistic cards row end -->

      <div class="row">
        <!-- dectector list start -->
        <div class="col-4">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">Detector List</div>
                <div class="col text-right"><Addbutton /></div>
              </div>
            </div>
            <ul class="list-group" id="d-list">
              <li class="list-group-item">
                <div class="row text-muted">
                  <div class="col-6">Detector name</div>
                </div>
              </li>

              <li v-if="loading">
                <div class="d-flex justify-content-center">
                  <div class="spinner-border text-primary m-5" role="status">
                    <span class="sr-only">Loading...</span>
                  </div>
                </div>
              </li>
              <li v-else v-for="d in detectors" :key="d.detector_id" class="list-group-item">
                <div class="row">
                  <div class="col-6">
                    <a>{{ d.detector_name }}</a>
                  </div>
                  <div class="col text-right">
                    <TestButton :did="d.detector_id" />
                  </div>
                  <!-- <div class="col-2 text-right">
                    <UpdateButton :did="d.detector_id" />
                  </div> -->
                  <div class="col text-right">
                    <DeleteButton_d :did="d.detector_id" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- dectector list end -->

        <!-- report list start -->
        <div class="col-8">
          <div class="card">
            <div class="card-header">
              <div class="row">
                <div class="col">Report History</div>
                <div class="col text-right" style="visibility: hidden"><Addbutton /></div>
              </div>
            </div>
            <ul class="list-group" id="r-list">
              <li class="list-group-item">
                <div class="row text-muted">
                  <div class="col-5">Report name</div>
                  <div class="col">Date</div>
                  <div class="col">Time</div>
                  <div class="col"></div>
                  <div class="col"></div>
                </div>
              </li>
              <li v-if="loading">
                <div class="d-flex justify-content-center">
                  <div class="spinner-border text-primary m-5" role="status"></div>
                </div>
              </li>
              <li v-else v-for="r in reports" :key="r.report_id" class="list-group-item">
                <div class="row">
                  <div class="col-5">
                    <a>{{ r.detector_name + '_' + r.function_type }}</a>
                  </div>
                  <div class="col">{{ r.testing_datetime[0] }}</div>
                  <div class="col">{{ r.testing_datetime[1] }}</div>
                  <div class="col text-right"><ViewReportButton :rid="r.report_id" /></div>
                  <div class="col text-right"><DeleteButton_r :rid="r.report_id" /></div>
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
