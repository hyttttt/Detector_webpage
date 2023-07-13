<script setup>
import Navbar from '../components/Navbar.vue'
import LogOutButton from '../components/buttons/LogOutButton.vue'
</script>

<template>
  <Navbar>
    <template v-slot:log-btn><LogOutButton /></template>
  </Navbar>
  <h1>This is report page</h1>
</template>
