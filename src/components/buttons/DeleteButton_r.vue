<!-- This is the delete report button -->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  rid: String
})

function removeReport() {
  router.push('/loading/dash')

  /*fetch(`http://140.118.155.18:8000/api/report/${props.rid}`, {
    method: 'DELETE',
    credentials: 'include'
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
