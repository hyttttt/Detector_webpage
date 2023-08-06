<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  uid: String,
  did: Number,
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
