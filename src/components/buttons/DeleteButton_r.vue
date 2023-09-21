<!-- This is the delete report button -->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  rid: String
})

function removeReport() {
  router.push('/loading/dash')

  /*fetch(`/api/report/${props.rid}`, {
    method: 'DELETE'
  })
    .then((response) => {
      router.push(`/dash`)
    })
    .catch((error) => console.error(error))*/
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeReport()">Delete</button>
  </div>
</template>
