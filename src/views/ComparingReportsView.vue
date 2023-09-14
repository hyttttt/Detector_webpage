<script setup>
import BasePage from '../components/BasePage.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const isLogIn = ref(true)

// get all the report ids
const route = useRoute()
var ids = route.params.ids
ids = ids.split(',')

// get all the reports
const report_id = ref([])
const function_type = ref([])
const accuracy = ref([])
const fp = ref([])
const fn = ref([])
const precision = ref([])
const recall = ref([])
const f1 = ref([])
const avg_time = ref([])
const min_time = ref([])
const max_time = ref([])
const testing_time = ref([])
const testing_sample_num = ref([])
const total_sample_num = ref([])
/*const reports = ref({
  report_id: ref([]),
  function_type: [],
  accuracy: [],
  fp: [],
  fn: [],
  precision: [],
  recall: [],
  f1: [],
  avg_time: [],
  min_time: [],
  max_time: [],
  testing_time: [],
  testing_sample_num: [],
  total_sample_num: []
})*/

for (let id of ids) {
  report_id.value.push(id)
  function_type.value.push(id)
  accuracy.value.push(id)
  fp.value.push(id)
  fn.value.push(id)
  precision.value.push(id)
  recall.value.push(id)
  f1.value.push(id)
  avg_time.value.push(id)
  min_time.value.push(id)
  max_time.value.push(id)
  testing_time.value.push(id)
  testing_sample_num.value.push(id)
  total_sample_num.value.push(id)
}

const reports = ref([])
reports.value.push(report_id)
reports.value.push(function_type)
reports.value.push(accuracy)
reports.value.push(fp)
reports.value.push(fn)
reports.value.push(precision)
reports.value.push(recall)
reports.value.push(f1)
reports.value.push(avg_time)
reports.value.push(min_time)
reports.value.push(max_time)
reports.value.push(testing_time)
reports.value.push(testing_sample_num)
reports.value.push(total_sample_num)
/*for (let id of ids) {
  fetch(`/api/report/${id}`)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      reports.value.push({
        report_id: response.report_id,
        function_type: response.function_type,
        accuracy: response.accuracy,
        fp: response.fp,
        fn: response.fn,
        precision: response.precision,
        recall: response.recall,
        f1: response.f1,
        avg_time: response.avg_time,
        min_time: response.min_time,
        max_time: response.max_time,
        testing_time: response.testing_time,
        testing_sample_num: response.testing_sample_num,
        total_sample_num: response.total_sample_num
      })
    })
    .catch((error) => console.error(error))
}*/
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Comparing Reports</template>
    <template v-slot:content>
      <div class="card" style="border-radius: 10px">
        <div class="card-body">
          <!-- table start -->
          <table class="table table-bordered table-hover">
            <thead class="thead-light"></thead>
            <tbody>
              <tr>
                <th>ID</th>
                <th v-for="r in report_id" :key="r">{{ r }}</th>
              </tr>
              <tr>
                <th>function type</th>
                <td v-for="r in function_type" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>accuracy</th>
                <td v-for="r in accuracy" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>fp</th>
                <td v-for="r in fp" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>fn</th>
                <td v-for="r in fn" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>precision</th>
                <td v-for="r in precision" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>recall</th>
                <td v-for="r in recall" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>f1</th>
                <td v-for="r in f1" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>average time</th>
                <td v-for="r in avg_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>min time</th>
                <td v-for="r in min_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>max time</th>
                <td v-for="r in max_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>testing time</th>
                <td v-for="r in testing_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>testing sample number</th>
                <td v-for="r in testing_sample_num" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th>total sample number</th>
                <td v-for="r in total_sample_num" :key="r">{{ r }}</td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->

          <!-- chart start -->
          <div style="height: 200px"></div>
          <!-- chart end -->
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped></style>
