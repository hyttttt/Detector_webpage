<script setup>
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'

const isLogIn = ref(true)
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Profile</template>
    <template v-slot:content></template>
  </BasePage>
</template>
