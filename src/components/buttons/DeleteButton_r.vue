<script setup>
const props = defineProps({
  uid: Number,
  rid: Number
})
</script>

<template>
  <div>
    <button type="button" class="btn btn-danger" @click="removeReport(r)">Delete</button>
  </div>
</template>
