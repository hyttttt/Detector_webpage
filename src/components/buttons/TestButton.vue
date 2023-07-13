<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  uid: Number,
  did: Number
})

const router = useRouter()
function testPage() {
  router.push(`/task/${props.uid}/${props.did}`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="testPage">Test</button>
  </div>
</template>
