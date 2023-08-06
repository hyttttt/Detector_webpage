<script setup>
import LogOutButton from './buttons/LogOutButton.vue'
import LogInButton from './buttons/LogInButton.vue'

const props = defineProps({
  isLogIn: Boolean
})
</script>

<template>
  <div class="container-fluid" id="navbar-top">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" style="color: aliceblue" href="#"><slot name="title"></slot></a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto"></ul>
        <a href="/"><img src="../assets/user.png" class="icons" /></a>
        <a>&nbsp;&nbsp;</a>
        <a href="/"><img src="../assets/settings.png" class="icons" /></a>
        <a>&nbsp;&nbsp;</a>
        <a href="/"><img src="../assets/bell.png" class="icons" /></a>
        <a>&nbsp;&nbsp;&nbsp;</a>

        <p v-if="isLogIn"><LogOutButton /></p>
        <p v-else><LogInButton /></p>
      </div>
    </nav>
  </div>
</template>

<style scoped>
#navbar-top {
  font-family: 'Noto Sans';
  font-weight: bold;
  color: aliceblue;
  background-color: #4287f5;
}

.icons {
  width: 24px;
  padding: 10%;
  margin: 10%;
}
</style>
