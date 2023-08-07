<!-- This is the detector test button -->
<!-- click and go to choose functions -->

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  did: String
})

const router = useRouter()
function testPage() {
  router.push(`/task/${props.did}`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="testPage">Test</button>
  </div>
</template>
