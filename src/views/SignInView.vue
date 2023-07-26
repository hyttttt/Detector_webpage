<script setup>
import { useRouter } from 'vue-router'
import SignPage from '../components/SignPage.vue'

const router = useRouter()
function signIn() {
  router.push(`/core`)
}
</script>

<template>
  <SignPage>
    <template v-slot:sign-area
      ><div class="card">
        <div class="card-body">
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
          <ul class="list-inline">
            <li class="list-inline-item text-muted">Don't have an account?</li>
            <li class="list-inline-item"><a href="/signUp">Sign up</a></li>
          </ul>
        </div>
      </div></template
    >
  </SignPage>
</template>
