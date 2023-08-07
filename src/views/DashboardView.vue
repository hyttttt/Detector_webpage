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

const detectors = ref([{ id: Math.random() }, { id: Math.random() }, { id: Math.random() }])
const reports = ref([{ id: 0, sno: 0 }])
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
              <li v-for="d in detectors" :key="d.id" class="list-group-item">
                <div class="row">
                  <div class="col">
                    <a>{{ d.id }}</a>
                  </div>
                  <div class="col-2 text-right">
                    <TestButton :did="d.id" />
                  </div>
                  <div class="col-2 text-right">
                    <UpdateButton :did="d.id" />
                  </div>
                  <div class="col-2 text-right">
                    <DeleteButton_d :did="d.id" />
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
            <div class="card-header">Report History</div>
            <ul class="list-group" id="r-list">
              <li v-for="r in reports" :key="r.id" class="list-group-item">
                <div class="row">
                  <div class="col">
                    <a>Report {{ r.sno }}</a>
                  </div>
                  <div class="col-2 text-right"><ViewReportButton :rid="r.id" /></div>
                  <div class="col-2 text-right"><DeleteButton_r :rid="r.id" /></div>
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
