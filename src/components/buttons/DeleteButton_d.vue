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
    method: 'DELETE',
    headers: { Authorization: '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' }
  })
    .then((response) => {
      router.push(`/dash`)
    })
    .catch((error) => console.error(error))
}
</script>
<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeDetector()">Delete</button>
  </div>
</template>
