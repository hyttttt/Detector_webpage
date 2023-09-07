<script setup>
import ExeButton from '../components/buttons/ExeButton.vue'
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

const funcs = ref([
  { func: 'Normal Samples', check: false },
  { func: 'Sequence-based AEs', check: false },
  { func: 'Structure-based AEs', check: false },
  { func: 'Cross-arch Samples', check: false }
])
</script>

<template>
  <BasePage :isLogIn="isLogIn"
    ><template v-slot:title>Select functions</template>
    <template v-slot:content
      ><div class="row">
        <div class="col-6">
          <!-- function list start -->
          <div class="card" style="border-radius: 10px">
            <div class="card-header">Select Functions</div>
            <ul class="list-group" id="f-list">
              <li v-for="f in funcs" :key="f.func" class="list-group-item">
                <input type="checkbox" v-model="f.check" />
                <span>&nbsp;{{ f.func }}</span>
              </li>
            </ul>
          </div>
          <!-- function list end -->

          <div id="exe-btn"><ExeButton /></div>
        </div>
      </div> </template
  ></BasePage>
</template>

<style scoped>
#exe-btn {
  margin-top: 5%;
}
</style>
