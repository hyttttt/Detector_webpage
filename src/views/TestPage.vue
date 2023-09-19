<!-- This is a testing page as a playgorund -->

<script setup>
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'
</script>

<template>
  <BasePage>
    <template v-slot:title>Dashboard</template>
    <template v-slot:content>
      <div class="card" style="height: 80vh">
        <div class="card-body"></div>
      </div>
    </template>
  </BasePage>
</template>
