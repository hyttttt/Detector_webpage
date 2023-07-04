<script setup>
import { ref, computed } from 'vue'

//const newDetector = ref('')
var id = 0

const detectors = ref([{ id: Math.random() }, { id: Math.random() }, { id: Math.random() }])
const reports = ref([{ id: 0, sno: 0 }])

function addDetector() {
  detectors.value.push({ id: Math.random() })
  //newDetector.value = ''
}

function removeDetector(d) {
  detectors.value = detectors.value.filter((i) => i !== d)
}

function addReport(d) {
  reports.value.push({ id: Math.random(), sno: d.id })
}

function removeReport(r) {
  reports.value = reports.value.filter((i) => i !== r)
}
</script>

<template>
  <div id="content-wrap">
    <div class="row" id="content-top">
      <div class="dropdown">
        <a
          class="btn dropdown-toggle"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
          style="background-color: #819ae6; font-family: 'Noto Sans'; color: white"
        >
          Select functions
        </a>

        <div class="dropdown-menu">
          <ul class="list-group">
            <li class="dropdown-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="Checkbox1" />
              <label class="form-check-label" for="Checkbox1">Normal Samples</label>
            </li>
            <div class="dropdown-divider"></div>
            <li class="dropdown-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="Checkbox2" />
              <label class="form-check-label" for="Checkbox2">Sequence-based AEs</label>
            </li>
            <div class="dropdown-divider"></div>
            <li class="dropdown-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="Checkbox3" />
              <label class="form-check-label" for="Checkbox3">Structure-based AEs</label>
            </li>
            <div class="dropdown-divider"></div>
            <li class="dropdown-item">
              <input class="form-check-input me-1" type="checkbox" value="" id="Checkbox4" />
              <label class="form-check-label" for="Checkbox4">Cross-arch Samples</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row" id="content-bottom">
      <div class="col">
        <ul class="list-group" id="d-list">
          <li class="list-group-item" id="d-list-title">
            Detector List
            <button type="button" class="btn btn-light" @click="addDetector">Add</button>
          </li>
          <li v-for="d in detectors" :key="d.id" class="list-group-item">
            <a>{{ d.id }}</a>
            <button type="button" class="btn btn-primary" @click="addReport(d)">Test</button>
            <button type="button" class="btn btn-warning">Update</button>
            <button type="button" class="btn btn-danger" @click="removeDetector(d)">Delete</button>
          </li>
        </ul>
      </div>
      <div class="col">
        <ul class="list-group" id="r-list">
          <li class="list-group-item" id="r-list-title">Report List</li>
          <li v-for="r in reports" :key="r.id" class="list-group-item">
            <a>Report {{ r.sno }}</a>
            <button type="button" class="btn btn-danger" @click="removeReport(r)">Delete</button>
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
