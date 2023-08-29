<!-- This is the delete detector button -->

<script setup>
const props = defineProps({
  did: String
})

function removeDetector(d) {}
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeDetector(d)">Delete</button>
  </div>
</template>
