<script setup>
import BasePage from '../components/BasePage.vue'
import CompareButton from '../components/buttons/CompareButton.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

// get report list
const reports = ref([])
var num = 0

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
        num: ++num,
        check: false,
        report_id: r.report_id,
        function_type: r.function_type,
        accuracy: r.accuracy,
        fp: r.false_positive,
        fn: r.false_negative,
        precision: r.precision,
        recall: r.recall,
        f1: r.f1_score,
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
    <template v-slot:title>Comparing</template>
    <template v-slot:content>
      <div class="card" style="border-radius: 10px">
        <div class="card-body">
          <!-- table start -->
          <div class="table-responsive">
            <table class="table table-bordered table-hover">
              <thead class="thead-light">
                <tr>
                  <th scope="col" class="text-center">Select</th>
                  <th scope="col" class="text-center">#</th>
                  <th scope="col">Report</th>
                  <th scope="col">Testing date time</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="r in reports" :key="r.report_id">
                  <td class="text-center"><input type="checkbox" v-model="r.check" /></td>
                  <th class="text-center" scope="row">{{ r.num }}</th>
                  <td>{{ r.detector_name + '_' + r.function_type }}</td>
                  <td>{{ r.testing_datetime[0] + ' ' + r.testing_datetime[1] }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <!-- table end -->

          <div><CompareButton :reports="reports.filter((r) => r.check)" /></div>
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped></style>
