<!-- This is the upload detector button -->

<script setup>
import { ref } from 'vue'

const fileInput = ref()

function addDetector() {
  // test upload
  console.log(fileInput.value.files[0])

  /* post /detector [parameters:file] */
  /*var formData = new FormData()
  formData.append('file', fileInput.value.files[0])

  fetch('/detector', {
    method: 'POST',
    body: formData
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.error(error))*/
}
</script>

<template>
  <input type="file" ref="fileInput" style="display: none" @change="addDetector" />
  <button class="btn btn-primary" @click="$refs.fileInput.click()">Add</button>
</template>
