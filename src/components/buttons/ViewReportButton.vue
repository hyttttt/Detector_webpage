<!-- This is the view report button -->

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  rid: String
})

const router = useRouter()
function testPage() {
  router.push(`/report/${props.rid}`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="testPage">View</button>
  </div>
</template>
