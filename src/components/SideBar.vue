<!-- This is the side bar in base page-->

<template>
  <div class="container-fluid" id="side-bar">
    <div class="row">
      <img src="../assets/chart-simple.png" width="24" />
      <strong>&nbsp; Detector tester</strong>
    </div>
    <div class="row" id="decorator"></div>
    <div class="row dash-link"><a href="/about">About</a></div>
    <div class="row dash-link"><a href="/dash">Dashboard</a></div>
    <div class="row dash-link"><a href="/profile">Profile</a></div>
  </div>
</template>

<style scoped>
#side-bar {
  height: 95vh;
  padding: 10% 20%;
  border-radius: 10px;
  background-color: white;
  font-family: 'Noto Sans';
  font-weight: bold;
}

#decorator {
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom-style: solid;
  border-color: gainsboro;
}

.dash-link {
  margin-top: 20px;
}

a {
  color: gray;
}
</style>
