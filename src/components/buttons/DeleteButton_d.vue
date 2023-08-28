<!-- This is the delete detector button -->

<script setup>
const props = defineProps({
  did: String
})

function removeDetector(d) {
  fetch('/api/report')
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.error(error))
  /*.then((response) => response.json())*/
  /*.then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.error(error)
    })*/
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeDetector(d)">Delete</button>
  </div>
</template>
