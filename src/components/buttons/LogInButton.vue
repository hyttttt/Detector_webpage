<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function core() {
  router.push(`/core`)
}
</script>

<template>
  <button class="btn btn-outline-light my-2 my-sm-0" type="submit" @click="core">Log in</button>
</template>
