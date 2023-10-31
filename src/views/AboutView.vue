<script setup>
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'

const isLogIn = ref(true)
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>About</template>
    <template v-slot:content>
      <div class="card" style="border-radius: 10px">
        <div class="card-body">
          <div class="card-title"><h5>Introduction</h5></div>
          <p>
            This is a platform for evaluating the effectiveness of malware detection tools. It
            allows users to upload their own detectors and runs them against a set of pre-defined
            datasets. The platform calculates various metrics to evaluate the performance of the
            detectors and provides users with detailed reports.
          </p>
          <div class="card-title">
            <h5>Motivation - Addressing the Challenge of Adversarial Attacks</h5>
          </div>
          <p>
            Adversarial attacks modify malicious software subtly, enabling it to function normally
            while confusing AI-based malware detectors. These altered samples, called adversarial
            examples, make detectors less reliable, and lead to misidentification of malicious
            software as benign.
          </p>
          <div class="card-title"><h5>Features</h5></div>
          <ul>
            <li>
              Third-party GitHub login - Sign in using your GitHub account directly to access the
              platform.
            </li>
            <li>
              Diverse adversarial attack examples - Test your detectors with different types of
              datasets to enhance evaluation efficiency.
            </li>
            <li>
              Personalized reports - Receive detailed evaluation reports according to your tested
              detectors, including the execution time. Also, you can compare different reports for a
              comprehensive understanding.
            </li>
            <li>
              Detector and report management - View all your uploaded detectors and tested reports
              on the dashboard, easily update or delete specific detectors and reports as needed.
            </li>
            <li>
              Leaderboard - Compare with other users based on different samples, encouraging benign
              competition and driving advancements in malicious software detection.
            </li>
          </ul>
          <div class="card-title"><h5>Simple Usage Process</h5></div>
          <ol>
            <li>GitHub login</li>
            <li>Upload detector</li>
            <li>Test detector</li>
            <li>Receive testing report</li>
            <li>Compare detection reports</li>
            <li>Select leaderboard samples</li>
            <li>View leaderboard rankings</li>
          </ol>
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped></style>
