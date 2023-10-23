<!-- This is the upload detector button -->

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const fileInput = ref()

function addDetector() {
  router.push('/loading/dash')

  var formData = new FormData()
  formData.append('file', fileInput.value.files[0])

  fetch('/api/detector', {
    method: 'POST',
    body: formData,
    credentials: "include"
  })
    .then((response) => {
      router.push(`/dash`)
      console.log('[SUCCESS] Upload Detector')
      console.log(response)
    })
    .catch((error) => console.error(error))
}
</script>

<template>
  <input type="file" ref="fileInput" style="display: none" @change="addDetector" />
  <button class="btn btn-primary" @click="$refs.fileInput.click()">Add</button>
</template>
