<script setup>
import BasePage from '../components/BasePage.vue'
</script>

<template>
  <BasePage>
    <template v-slot:title>About</template>
    <template v-slot:content>This is about page</template>
  </BasePage>
</template>

<style scoped></style>
