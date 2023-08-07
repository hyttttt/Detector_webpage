<!-- This is the view report button -->

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  did: String
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
