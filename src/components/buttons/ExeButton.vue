<!-- This is the execute button to send task-->

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  did: String,
  func: Object
})

const router = useRouter()
function execute() {
  router.push(`/report`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="execute">Execute</button>
  </div>
</template>
