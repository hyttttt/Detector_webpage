<script setup>
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import TestButton from '../components/buttons/TestButton.vue'
import UpdateButton from '../components/buttons/UpdateButton.vue'
import DeleteButton_d from '../components/buttons/DeleteButton_d.vue'
import DeleteButton_r from '../components/buttons/DeleteButton_r.vue'
import LogOutButton from '../components/buttons/LogOutButton.vue'
import Addbutton from '../components/buttons/Addbutton.vue'

//const newDetector = ref('')
var uid = ref(123456789)

const detectors = ref([{ id: Math.random() }, { id: Math.random() }, { id: Math.random() }])
const reports = ref([{ id: 0, sno: 0 }])

function addDetector() {
  detectors.value.push({ id: Math.random() })
  //newDetector.value = ''
}

function addReport(d) {
  reports.value.push({ id: Math.random(), sno: d.id })
}
</script>

<template>
  <Navbar>
    <template v-slot:log-btn><LogOutButton /></template>
  </Navbar>

  <div id="content-wrap">
    <div class="row" id="content-top"></div>
    <div class="row" id="content-bottom">
      <div class="col">
        <ul class="list-group" id="d-list">
          <li class="list-group-item" id="d-list-title">
            Detector List
            <Addbutton />
          </li>
          <li v-for="d in detectors" :key="d.id" class="list-group-item">
            <div class="row">
              <a>{{ d.id }}</a>
              <TestButton :uid="uid" :did="d.id" />
              <UpdateButton :uid="uid" :did="d.id" />
              <DeleteButton_d :uid="uid" :did="d.id" />
            </div>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group" id="r-list">
          <li class="list-group-item" id="r-list-title">Report List</li>
          <li v-for="r in reports" :key="r.id" class="list-group-item">
            <div class="row">
              <a>Report {{ r.sno }}</a>
              <DeleteButton_r :uid="uid" :rid="r.id" />
            </div>
          </li>
        </ul>
      </div>
      <div class="col">User info</div>
    </div>
  </div>
</template>

<style scoped>
/*border: 2px solid #0ae95b;*/
#content-wrap {
  margin: 3%;
  height: 75vh;
}

/*border: 2px solid #ea470b;*/
#content-top {
  height: 15%;
}

/*border: 2px solid #8b0de4;*/
#content-bottom {
  height: 85%;
}

#d-list {
  font-family: 'Noto Sans';
}

#d-list-title {
  background-color: #819ae6;
  color: white;
}

#r-list {
  font-family: 'Noto Sans';
}

#r-list-title {
  background-color: #819ae6;
  color: white;
}
</style>
