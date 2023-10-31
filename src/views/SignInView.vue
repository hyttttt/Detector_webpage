<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import SignPage from '../components/SignPage.vue'

const sign = ref(false)

const router = useRouter()
function signIn() {
  router.push(`/dash`)
}

function GitHubLogin() {
  const client_id = 'a5dafb87355091f61843'
  const redirect_uri = 'http://140.118.155.18:8000/auth/callback'
  const scope = 'read:user,repo'
  location.href = `https://github.com/login/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scope}`
}
</script>

<template>
  <SignPage>
    <template v-slot:sign-area>
      <div class="card">
        <div class="card-body">
          <div v-if="sign">
            <h4 class="card-title text-center">Sign in</h4>
            <form>
              <div class="form-group">
                <label for="email-input">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email-input"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <label for="password-input">Password</label>
                <input type="password" class="form-control" id="password-input" />
              </div>
              <button type="submit" class="btn btn-primary btn-lg btn-block" @click="signIn">
                Sign in
              </button>
            </form>

            <br />
            <div class="text-center">
              <ul class="list-inline">
                <li class="list-inline-item text-muted">Don't have an account?</li>
                <li class="list-inline-item"><a href="/signUp">Sign up</a></li>
              </ul>
            </div>
            <div class="card-subtitle text-center text-muted">...or sign in with GitHub</div>
            <br />
            <div class="text-center">
              <img src="../assets/github.png" class="icons" @click="GitHubLogin" />
            </div>
          </div>
          <div v-else>
            <h4 class="card-title text-center">Sign in with GitHub</h4>
            <br />
            <div class="text-center">
              <img src="../assets/github.png" class="icons" @click="GitHubLogin" />
            </div>
            <br />
            <div class="card-subtitle text-center text-muted">
              <p>
                Detect, Analyze, Succeed <br />
                Precisely evaluate your malware detector
              </p>
            </div>
          </div>
        </div>
      </div>
    </template>
  </SignPage>
</template>

<style scoped>
.icons {
  width: 64px;
  cursor: pointer;
}
</style>
