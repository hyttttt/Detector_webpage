<script setup>
import { ref, computed } from 'vue'
import Navbar from '../components/Navbar.vue'
import LogOutButton from '../components/buttons/LogOutButton.vue'
import ExeButton from '../components/buttons/ExeButton.vue'

const funcs = ref([
  { func: 'Normal Samples', check: false },
  { func: 'Sequence-based AEs', check: false },
  { func: 'Structure-based AEs', check: false },
  { func: 'Cross-arch Samples', check: false }
])
</script>

<template>
  <Navbar>
    <template v-slot:log-btn><LogOutButton /></template>
  </Navbar>
  <div class="content-wrap">
    <div class="row content-top"></div>
    <div class="row content-bottom">
      <div class="col">
        <ul class="list-group" id="f-list">
          <li class="list-group-item" id="f-list-title">Select Functions</li>
          <li v-for="f in funcs" :key="f.func" class="list-group-item">
            <input type="checkbox" v-model="f.check" />
            <span>{{ f.func }}</span>
          </li>
        </ul>
      </div>

      <div class="col"><ExeButton /></div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped>
/*border: 2px solid #0ae95b;*/
.content-wrap {
  margin: 3%;
  height: 75vh;
}

/*border: 2px solid #ea470b;*/
.content-top {
  height: 15%;
}

/*border: 2px solid #8b0de4;*/
.content-bottom {
  height: 85%;
}

#f-list-title {
  background-color: #819ae6;
  color: white;
}
</style>
