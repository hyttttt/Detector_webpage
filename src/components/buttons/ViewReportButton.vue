<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  uid: String,
  did: Number
})

const router = useRouter()
function testPage() {
  router.push(`/report`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="testPage">View</button>
  </div>
</template>
