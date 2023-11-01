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
// const fp = ref([])
// const fn = ref([])
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
  fetch(`http://140.118.155.18:8000/api/report/${id}`, { method: 'GET', credentials: 'include' })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      report_id.value.push(response.report_id)
      function_type.value.push(response.function_type)
      accuracy.value.push(response.accuracy.toFixed(6))
      // fp.value.push(response.false_positive)
      // fn.value.push(response.false_negative)
      precision.value.push(response.precision.toFixed(6))
      recall.value.push(response.recall.toFixed(6))
      f1.value.push(response.f1.toFixed(6))
      avg_time.value.push(response.avg_time.toFixed(6))
      min_time.value.push(response.min_time.toFixed(6))
      max_time.value.push(response.max_time.toFixed(6))
      testing_time.value.push(response.testing_time.toFixed(6))
      testing_sample_num.value.push(response.testing_sample_num)
      total_sample_num.value.push(response.total_sample_num)
    })
    .catch((error) => console.error(error))
}

// bar chart data
const bar_data = ref([])
const bar_height = ref(300)
const bar_width = ref(50)
const bar_gap = ref(20)
const bar_caption = ref([])
const bar_caption_x = ref(0)
const bar_caption_name = ref('')

// choose the color of bar
function color_map(i) {
  const colors = [
    '#E05E66' /*red*/,
    '#FFB04B' /*yellow*/,
    '#65B773' /*green*/,
    '#5EB6E0' /*light blue*/,
    '#4287f5' /*blue*/,
    '#AB74F7' /*purple*/
  ]
  return colors[colors.length - (i % colors.length) - 1]
}

// select subject and change the bar chart data
function select_subject(name) {
  bar_data.value = []
  var temp = []

  // get the corresponding subject data
  for (let i = 0; i < report_id.value.length; i++) {
    var id = report_id.value[i]
    var value = 0

    if (name == 'accuracy') value = accuracy.value[i]
    // else if (name == 'fp') value = fp.value[i]
    // else if (name == 'fn') value = fn.value[i]
    else if (name == 'precision') value = precision.value[i]
    else if (name == 'recall') value = recall.value[i]
    else if (name == 'f1') value = f1.value[i]
    else if (name == 'avg_time') value = avg_time.value[i]
    else if (name == 'min_time') value = min_time.value[i]
    else if (name == 'max_time') value = max_time.value[i]
    else if (name == 'testing_time') value = testing_time.value[i]
    else if (name == 'testing_sample_num') value = testing_sample_num.value[i]
    else if (name == 'total_sample_num') value = total_sample_num.value[i]

    temp.push({ id: id, value: value, name: name })
  }

  /* tranform value into bar chart position and size */
  // get the max data value
  var x = 0
  var max = 0
  for (let i = 0; i < temp.length; i++) {
    if (max < temp[i].value) max = temp[i].value
  }

  for (let i = 0; i < temp.length; i++) {
    var h
    if (max == 0) h = 10
    else if (temp[i].value < 0) h = 10
    else h = (temp[i].value / max) * bar_height.value * 0.9

    bar_data.value.push({
      id: temp[i].id,
      value: temp[i].value,
      name: temp[i].name,
      x: x,
      y: bar_height.value - h,
      width: bar_width.value,
      height: h,
      fill: color_map(i)
    })

    x += bar_width.value + bar_gap.value
  }

  // make caption of bar chart
  var y = 40
  for (let i = 0; i < bar_data.value.length; i++) {
    bar_caption.value.push({
      id: bar_data.value[i].id,
      x: x + 50,
      y: y,
      width: 20,
      height: 20,
      fill: bar_data.value[i].fill
    })

    y += 40
  }

  if (bar_caption.value.length != 0) bar_caption_x.value = bar_caption.value[0].x
  if (bar_data.value.length != 0) bar_caption_name.value = bar_data.value[0].name

  window.scrollTo(0, document.body.scrollHeight)
}

// default bar chart is accuracy
select_subject('accuracy')
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
                <th style="cursor: default">ID</th>
                <th v-for="r in report_id" :key="r">{{ r }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th style="cursor: default">Function type</th>
                <td v-for="r in function_type" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('accuracy')">Accuracy</th>
                <td v-for="r in accuracy" :key="r">{{ r }}</td>
              </tr>
              <!-- <tr>
                <th @click="select_subject('fp')">FP</th>
                <td v-for="r in fp" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('fn')">FN</th>
                <td v-for="r in fn" :key="r">{{ r }}</td>
              </tr> -->
              <tr>
                <th @click="select_subject('precision')">Precision</th>
                <td v-for="r in precision" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('recall')">Recall</th>
                <td v-for="r in recall" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('f1')">F1</th>
                <td v-for="r in f1" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('avg_time')">Average testing time</th>
                <td v-for="r in avg_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('min_time')">Min testing time</th>
                <td v-for="r in min_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('max_time')">Max testing time</th>
                <td v-for="r in max_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('testing_time')">Total testing time</th>
                <td v-for="r in testing_time" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('testing_sample_num')">Testing sample number</th>
                <td v-for="r in testing_sample_num" :key="r">{{ r }}</td>
              </tr>
              <tr>
                <th @click="select_subject('total_sample_num')">Total sample number</th>
                <td v-for="r in total_sample_num" :key="r">{{ r }}</td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->

          <!-- chart start -->
          <BarChart
            :bar_data="bar_data"
            :bar_height="bar_height"
            :bar_width="bar_width"
            :bar_caption="bar_caption"
            :bar_caption_x="bar_caption_x"
            :bar_caption_name="bar_caption_name"
          ></BarChart>
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
