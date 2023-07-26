<script setup>
import Navbar from '../components/Navbar.vue'
import LogInButton from '../components/buttons/LogInButton.vue'
</script>

<template>
  <Navbar>
    <template v-slot:log-btn><LogInButton /></template>
  </Navbar>
  <h1>This is home page</h1>
  <div class="container">
    <div class="row">
      <div class="col">col 1</div>
      <div class="col">col 2</div>
      <div class="w-100"></div>
      <div class="col">col 3</div>
      <div class="col">col 4</div>
    </div>
  </div>
</template>
