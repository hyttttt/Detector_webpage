<script setup>
import Navbar from '../components/Navbar.vue'
import LogInButton from '../components/buttons/LogInButton.vue'
</script>

<template>
  <Navbar>
    <template v-slot:log-btn><LogInButton /></template>
  </Navbar>
  <h1>This is an about page</h1>
</template>
