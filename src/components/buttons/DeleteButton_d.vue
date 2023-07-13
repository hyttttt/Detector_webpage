<script setup>
const props = defineProps({
  uid: String,
  did: Number
})
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeDetector(d)">Delete</button>
  </div>
</template>
