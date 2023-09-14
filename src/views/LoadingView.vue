<script setup>
import BasePage from '../components/BasePage.vue'
import DashboardView from './DashboardView.vue'
import TaskView from './TaskView.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

// determine which loading page from url
var urlString = window.location.href
var url = new URL(urlString)
var pathParts = url.pathname.split('/')
var page = pathParts[pathParts.length - 1]

const dash = ref(false)
const task = ref(false)

if (page == 'dash') {
  dash.value = true
} else if (page == 'task') {
  task.value = true
}
</script>

<template>
  <div v-if="dash"><DashboardView :load="dash"></DashboardView></div>
  <div v-else-if="task"><TaskView :load="task"></TaskView></div>
  <div v-else><BasePage></BasePage></div>
</template>

<style scoped>
#row-statistic {
  margin-bottom: 3%;
}

.card {
  border-radius: 10px;
}
</style>
