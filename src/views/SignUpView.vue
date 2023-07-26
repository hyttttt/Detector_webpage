<script setup>
import SignPage from '../components/SignPage.vue'
</script>

<template>
  <SignPage>
    <template v-slot:sign-area
      ><div class="card">
        <div class="card-body">
          <h4 class="card-title text-center">Sign up</h4>
          <form>
            <div class="form-group">
              <label for="name-input">Name</label>
              <input type="text" class="form-control" id="name-input" />
            </div>
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
            <div class="form-group">
              <label for="password-confirm">Confirm password</label>
              <input type="password" class="form-control" id="password-confirm" />
            </div>
            <button type="submit" class="btn btn-primary btn-lg btn-block">Sign up</button>
          </form>
          <br />
          <ul class="list-inline">
            <li class="list-inline-item text-muted">Already have an account?</li>
            <li class="list-inline-item"><a href="/signIn">Sign in</a></li>
          </ul>
        </div>
      </div></template
    >
  </SignPage>
</template>
