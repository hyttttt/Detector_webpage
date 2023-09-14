<script setup>
import ExeButton from '../components/buttons/ExeButton.vue'
import BasePage from '../components/BasePage.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const isLogIn = ref(true)

const props = defineProps({
  load: Boolean
})

const loading = ref(false)
if (props.load) loading.value = true

const funcs = ref([
  { func: '00', check: false },
  { func: '09', check: false },
  { func: '12', check: false },
  { func: '1b', check: false }
])

// get detector id from url
const route = useRoute()
const did = ref(route.params.did)
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Select functions</template>
    <template v-slot:content
      ><div class="row">
        <div class="col-6">
          <!-- function list start -->
          <div v-if="loading" class="card" style="border-radius: 10px">
            <div class="d-flex justify-content-center">
              <div class="spinner-border text-primary m-5" role="status">
                <span class="sr-only">Loading...</span>
              </div>
            </div>
          </div>
          <div v-else class="card" style="border-radius: 10px">
            <div class="card-header">Select Functions</div>
            <ul class="list-group" id="f-list">
              <li v-for="f in funcs" :key="f.func" class="list-group-item">
                <input type="checkbox" v-model="f.check" />
                <span>&nbsp;{{ f.func }}</span>
              </li>
            </ul>
          </div>
          <!-- function list end -->

          <div id="exe-btn">
            <ExeButton :did="did" :funcs="funcs.filter((f) => f.check == true)" />
          </div>
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped>
#exe-btn {
  margin-top: 5%;
}
</style>
