<!-- This is the delete report button -->

<script setup>
const props = defineProps({
  rid: String
})
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeReport(r)">Delete</button>
  </div>
</template>
