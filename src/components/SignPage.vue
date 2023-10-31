<!-- This is the base page for sign in and sign up page -->

<template>
  <div class="container-fluid">
    <div class="row" id="bg">
      <div class="col"></div>
      <div class="col-8 text-center" id="welcome-text">
        <h2 style="font-weight: bold">Welcome to</h2>
        <h1 style="font-weight: bold">Malware Detector Evaluation Platform</h1>
        <p>
          MDEP, Malware Detector Evaluation Platform, a cutting-edge malware detection evaluation
          platform. Upload your own detectors and measure their performance against predefined
          datasets, generating detailed reports with key metrics. Stay ahead of cybersecurity
          challenges with our precise evaluation.<br />
          Let's get started!
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
  margin: 5% 0% 1% 0%;
}
</style>
