<!-- This is the side bar in base page-->
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function aboutPage() {
  router.push(`/about`)
}

function dashboardPage() {
  router.push(`/dash`)
}

function profilePage() {
  router.push(`/profile`)
}

function comparingPage() {
  router.push(`/comparing`)
}

function leaderboardPage() {
  router.push(`/leaderboard`)
}

function testPage() {
  router.push(`/testPage`)
}
</script>

<template>
  <div class="container-fluid" id="side-bar">
    <div class="row">
      <img src="../assets/chart-simple.png" width="24" />
      <strong>&nbsp; Detector tester</strong>
    </div>
    <div class="row" id="decorator"></div>
    <div class="row side-link"><a @click="aboutPage" class="link">About</a></div>
    <div class="row side-link"><a @click="dashboardPage" class="link">Dashboard</a></div>
    <div class="row side-link"><a @click="profilePage" class="link">Profile</a></div>
    <div class="row side-link"><a @click="comparingPage" class="link">Comparing</a></div>
    <div class="row side-link"><a @click="leaderboardPage" class="link">Leaderboard</a></div>
    <div class="row side-link"><a @click="testPage" class="link">TEST PAGE</a></div>
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

.side-link {
  margin-top: 20px;
}

.link {
  color: gray;
  cursor: pointer;
}
</style>
