<!-- This is the comparing button to compare the selected reports-->

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  reports: Object
})

const router = useRouter()
function compare() {
  //router.push(`/report/${props.reports}`)
  //console.log(props.reports)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="compare">Compare Reports</button>
  </div>
</template>
