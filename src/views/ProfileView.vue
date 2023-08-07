<script setup>
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

const userName = ref('example_user_123')
const email = ref('name@example.com')
const fname = ref('user_first_name')
const lname = ref('user_last_name')
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Profile</template>
    <template v-slot:content>
      <div class="row">
        <div class="col">
          <div id="profile-top">
            <img
              src="../assets/search.jpg"
              style="
                width: 90px;
                height: 90px;
                border-radius: 50px;
                position: absolute;
                left: 50%;
                transform: translate(-50%, 100%);
              "
            />
          </div>
          <div id="profile-bottom">
            <h4>{{ userName }}</h4>
            <small>{{ email }}</small>
          </div>
        </div>
        <div class="col-8">
          <div class="card" style="border-radius: 10px">
            <div class="card-body">
              <h5 class="card-title text-muted">Edit profile</h5>
              <div class="row">
                <div class="col-8">
                  <form>
                    <div class="form-group">
                      <label for="form-input-user">User name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form-input-user"
                        :placeholder="userName"
                      />
                    </div>
                    <div class="form-group">
                      <label for="form-input-email">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="form-input-email"
                        :placeholder="email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="form-input-fname">Fisrt name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form-input-fname"
                        :placeholder="fname"
                      />
                    </div>
                    <div class="form-group">
                      <label for="form-input-fname">Last name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="form-input-lname"
                        :placeholder="lname"
                      />
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </BasePage>
</template>

<style scoped>
#profile-top {
  height: 150px;
  background-color: #b8c8ec;
  border-radius: 10px 10px 0 0;
}

#profile-bottom {
  height: 200px;
  background-color: white;
  border-radius: 0 0 10px 10px;
  text-align: center;
  padding-top: 15%;
}
</style>
