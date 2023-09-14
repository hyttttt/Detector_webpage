<script setup>
import BasePage from '../components/BasePage.vue'
import BarChart from '../components/BarChart.vue'
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

for (let id of ids) {
  report_id.value.push(id)
  function_type.value.push(Math.random().toString())
  accuracy.value.push(Math.random())
  fp.value.push(Math.random())
  fn.value.push(Math.random())
  precision.value.push(Math.random())
  recall.value.push(Math.random())
  f1.value.push(Math.random())
  avg_time.value.push(Math.random())
  min_time.value.push(Math.random())
  max_time.value.push(Math.random())
  testing_time.value.push(Math.random())
  testing_sample_num.value.push(Math.random())
  total_sample_num.value.push(Math.random())
}

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

// bar chart data
const data = ref([])

function select_subject(name) {
  data.value = []

  for (let i = 0; i < report_id.value.length; i++) {
    var id = report_id.value[i]
    var value = 0

    if (name == 'accuracy') value = accuracy.value[i]
    else if (name == 'fp') value = fp.value[i]
    else if (name == 'fn') value = fn.value[i]
    else if (name == 'precision') value = precision.value[i]
    else if (name == 'recall') value = recall.value[i]
    else if (name == 'f1') value = f1.value[i]
    else if (name == 'avg_time') value = avg_time.value[i]
    else if (name == 'min_time') value = min_time.value[i]
    else if (name == 'max_time') value = max_time.value[i]
    else if (name == 'testing_time') value = testing_time.value[i]
    else if (name == 'testing_sample_num') value = testing_sample_num.value[i]
    else if (name == 'total_sample_num') value = total_sample_num.value[i]

    data.value.push({ id: id, value: value, name: name })
  }
}
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Comparing Reports</template>
    <template v-slot:content>
      <div class="card" style="border-radius: 10px">
        <div class="card-body">
          <!-- table start -->
          <table class="table table-bordered table-hover">
            <thead class="thead-light">
              <tr>
                <th>ID</th>
                <th v-for="r in report_id" :key="r">{{ r }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>function type</th>
                <td v-for="r in function_type" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('accuracy')">accuracy</th>
                <td v-for="r in accuracy" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('fp')">fp</th>
                <td v-for="r in fp" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('fn')">fn</th>
                <td v-for="r in fn" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('precision')">precision</th>
                <td v-for="r in precision" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('recall')">recall</th>
                <td v-for="r in recall" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('f1')">f1</th>
                <td v-for="r in f1" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('avg_time')">average time</th>
                <td v-for="r in avg_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('min_time')">min time</th>
                <td v-for="r in min_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('max_time')">max time</th>
                <td v-for="r in max_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('testing_time')">testing time</th>
                <td v-for="r in testing_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('testing_sample_num')">testing sample number</th>
                <td v-for="r in testing_sample_num" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('total_sample_num')">total sample number</th>
                <td v-for="r in total_sample_num" :key="r">{{ r }}</td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->

          <!-- chart start -->
          <BarChart :reports="data"></BarChart>
          <!-- chart end -->
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped>
th {
  cursor: pointer;
}
</style>
