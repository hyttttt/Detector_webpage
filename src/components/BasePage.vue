<!-- This is the base page for all pages after login -->

<script setup>
import Navbar from './Navbar.vue'
import SideBar from './SideBar.vue'

const props = defineProps({
  isLogIn: Boolean
})
</script>

<template>
  <div class="container-fluid">
    <div class="row" id="bg-top">
      <div class="col-2" style="padding: 1%">
        <SideBar />
      </div>
      <div class="col" id="content-area">
        <Navbar :isLogIn="isLogIn">
          <template v-slot:title><slot name="title"></slot></template>
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
