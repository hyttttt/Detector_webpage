<script setup>
import BasePage from '../components/BasePage.vue'
import CompareButton from '../components/buttons/CompareButton.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

// get report list
const reports = ref([])
var num = 0

for (var i = 0; i < 5; i++) {
  reports.value.push({
    num: ++num,
    check: false,
    report_id: Math.random().toFixed(8) * (10 ** 8).toString(),
    function_type: Math.random().toFixed(6) * (10 ** 6).toString(),
    accuracy: Math.random(),
    fp: Math.random(),
    fn: Math.random(),
    precision: Math.random(),
    recall: Math.random(),
    f1: Math.random(),
    avg_time: Math.random(),
    min_time: Math.random(),
    max_time: Math.random(),
    testing_time: Math.random(),
    testing_sample_num: Math.random(),
    total_sample_num: Math.random()
  })
}

/*fetch('/api/report')
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
  .catch((error) => console.error(error))*/
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Comparing</template>
    <template v-slot:content>
      <div class="card" style="border-radius: 10px">
        <div class="card-body">
          <!-- table start -->
          <table class="table table-bordered table-hover">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="text-center">Select</th>
                <th scope="col" class="text-center">#</th>
                <th scope="col">Report ID</th>
                <th scope="col">Detector</th>
                <th scope="col">Start time</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="r in reports" :key="r.report_id">
                <td class="text-center"><input type="checkbox" v-model="r.check" /></td>
                <th class="text-center" scope="row">{{ r.num }}</th>
                <td>{{ r.report_id }}</td>
                <td>detector</td>
                <td>time</td>
              </tr>
            </tbody>
          </table>
          <!-- table end -->

          <div><CompareButton :reports="reports.filter((r) => r.check)" /></div>
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped></style>
