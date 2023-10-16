<!-- This is a testing page as a playgorund -->

<script setup>
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'

console.log('github callback success')
</script>

<template>
  <BasePage>
    <template v-slot:title>Callback</template>
    <template v-slot:content>
      <div class="card" style="height: 80vh">
        <div class="card-body"></div>
      </div>
    </template>
  </BasePage>
</template>
