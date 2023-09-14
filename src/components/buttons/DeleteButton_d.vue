<!-- This is the delete detector button -->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  did: String
})

function removeDetector() {
  router.push('/loading/dash')

  fetch(`/api/detector/${props.did}`, {
    method: 'DELETE'
  })
    .then((response) => {
      router.push(`/dash`)
      console.log('[SUCCESS] Delete Detector')
      console.log(response)
    })
    .catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeDetector()">Delete</button>
  </div>
</template>
