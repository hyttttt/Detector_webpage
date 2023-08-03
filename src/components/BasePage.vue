<script setup>
import Navbar from './Navbar.vue'
import LogOutButton from './buttons/LogOutButton.vue'
import SideBar from './SideBar.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row" id="bg-top">
      <div class="col-2" style="padding: 1%">
        <SideBar />
      </div>
      <div class="col" id="content-area">
        <Navbar>
          <template v-slot:title><slot name="title"></slot></template>
          <template v-slot:log-btn><LogOutButton /></template>
        </Navbar>
        <slot name="content"></slot>
      </div>
    </div>
    <div class="row" id="bg-bottom"></div>
  </div>
</template>

<style scoped>
#bg-top {
  height: 40vh;
  background-color: #4287f5;
}

#bg-bottom {
  height: 60vh;
  background-color: aliceblue;
}

#content-area {
  margin: 1%;
}
</style>
