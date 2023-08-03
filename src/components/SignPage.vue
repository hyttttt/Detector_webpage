<script setup></script>

<template>
  <div class="container-fluid">
    <div class="row" id="bg">
      <div class="col"></div>
      <div class="col-8 text-center" id="welcome-text">
        <h1 style="font-weight: bold">Welcome</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged.
        </p>
      </div>
      <div class="col"></div>
      <div class="w-100"></div>
      <div class="col"></div>
      <div class="col">
        <slot name="sign-area"></slot>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<style scoped>
#bg {
  height: 60vh;
  margin: 1%;
  border-radius: 10px;
  background-color: #4287f5;
}

#welcome-text {
  color: aliceblue;
  margin: 5% 0%;
}
</style>
