<script setup>
import BasePage from '../components/BasePage.vue'
import { ref } from 'vue'

const isLogIn = ref(true)

// list of leaders
const leader_list = ref([])

function refresh_leader(dataset) {
  leader_list.value = []

  fetch(`http://140.118.155.18:8000/api/leaderboard/${dataset}`, {
    method: 'GET',
    credentials: 'include'
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      for (var i = 0; i < response.length; i++) {
        leader_list.value.push({
          rank: i + 1,
          uid: response[i].user_id,
          uname: response[i].user_name,
          score: response[i].accuracy
        })
      }

      console.log('response')
      console.log(response)
      console.log('leader_list')
      console.log(leader_list)
    })
    .catch((error) => console.error(error))
}
refresh_leader()

// list of samples
const sample_list = ref([])
const empty = ref(true)

fetch('http://140.118.155.18:8000/api/dataset', {
  method: 'GET',
  credentials: 'include'
})
  .then((response) => {
    return response.json()
  })
  .then((response) => {
    for (var i = 0; i < response.length; i++) {
      sample_list.value.push({
        name: response[i].dataset_name,
        select: false,
        class: 'dropdown-item'
      })
    }

    if (sample_list.value.length != 0) {
      select_sample(sample_list.value[0].name)
      empty.value = false
    }
  })
  .catch((error) => console.error(error))

function select_sample(name) {
  for (let i = 0; i < sample_list.value.length; i++) {
    if (sample_list.value[i].name == name) {
      sample_list.value[i].select = true
      sample_list.value[i].class = 'dropdown-item active'
    } else {
      sample_list.value[i].select = false
      sample_list.value[i].class = 'dropdown-item'
    }
  }

  refresh_leader(name)
}
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Leaderboard</template>
    <template v-slot:content>
      <!-- Select sample button start -->
      <div class="row container-fluid" id="btn-row">
        <div v-if="empty" class="btn-group dropright">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sample None&nbsp
          </button>
        </div>
        <div v-else class="btn-group dropright">
          <button
            type="button"
            class="btn dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sample {{ sample_list.filter((s) => s.select == true)[0].name }}&nbsp
          </button>
          <div class="dropdown-menu">
            <a
              v-for="s in sample_list"
              :key="s.name"
              :class="s.class"
              @click="select_sample(s.name)"
              >{{ s.name }}</a
            >
          </div>
        </div>
      </div>
      <!-- Select sample button end -->

      <div class="row">
        <!-- Average ranking start -->
        <div class="col">
          <div class="card">
            <div class="card-header">
              <h5>Top 50</h5>
              <h6 class="text-muted">Sort by accuracy</h6>
            </div>
            <div class="leader-list">
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="row text-muted">
                    <div class="col">Ranking</div>
                    <div class="col">User</div>
                    <div class="col">Score</div>
                  </div>
                </li>
                <li class="list-group-item" v-for="l in leader_list" :key="l.uid">
                  <div class="row">
                    <div class="col">{{ l.rank }}</div>
                    <div class="col">{{ l.uname }}</div>
                    <div class="col">{{ l.score }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Average ranking end -->

        <!-- Testing time ranking start -->
        <div class="col">
          <!-- <div class="card">
            <div class="card-header">
              <h5>Top 50</h5>
              <h6 class="text-muted">Sort by total testing time</h6>
            </div>
            <div class="leader-list">
              <ul class="list-group">
                <li class="list-group-item">
                  <div class="row text-muted">
                    <div class="col">Ranking</div>
                    <div class="col">User</div>
                    <div class="col">Score</div>
                  </div>
                </li>
                <li class="list-group-item" v-for="l in leader_list" :key="l.uid">
                  <div class="row">
                    <div class="col">{{ l.rank }}</div>
                    <div class="col">{{ l.uid }}</div>
                    <div class="col">{{ l.score }}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div> -->
        </div>
        <!-- Testing time ranking end -->

        <!-- Record start -->
        <!--<div class="col">
           <h4 style="color: white">Your record</h4>
          <div class="row">
            <div class="col record-card">
              <div class="card" id="best-avg-card">
                <div class="card-body">
                  <h6 class="card-title">Best ranking</h6>
                  <p class="card-subtitle" style="font-size: small">by average of metrics</p>
                  <br />
                  <h1 class="text-center">123</h1>
                </div>
              </div>
            </div>
            <div class="col record-card">
              <div class="card" id="best-time-card">
                <div class="card-body">
                  <h6 class="card-title">Best ranking</h6>
                  <p class="card-subtitle" style="font-size: small">by total testing time</p>
                  <br />
                  <h1 class="text-center">123</h1>
                </div>
              </div>
            </div>
            <div class="w-100"></div>
            <div class="col record-card">
              <div class="card" id="curr-avg-card">
                <div class="card-body">
                  <h6 class="card-title">Current ranking</h6>
                  <p class="card-subtitle" style="font-size: small">by average of metrics</p>
                  <br />
                  <h1 class="text-center">456</h1>
                </div>
              </div>
            </div>
            <div class="col record-card">
              <div class="card" id="curr-time-card">
                <div class="card-body">
                  <h6 class="card-title">Current ranking</h6>
                  <p class="card-subtitle" style="font-size: small">by total testing time</p>
                  <br />
                  <h1 class="text-center">456</h1>
                </div>
              </div>
            </div>
          </div> 
        </div>-->
        <!-- Record end -->
      </div>
    </template>
  </BasePage>
</template>

<style scoped>
#best-avg-card {
  background-color: #b2cbf3;
  color: white;
}

#best-time-card {
  background-color: #8ab2f2;
  color: white;
}

#curr-avg-card {
  background-color: #b2cbf3;
  color: white;
}

#curr-time-card {
  background-color: #8ab2f2;
  color: white;
}

.record-card {
  margin-top: 5%;
}

#btn-row {
  margin-bottom: 1%;
}
.btn {
  background-color: whitesmoke;
  font-weight: 500;
  font-size: large;
}
.card-header {
  font-weight: bold;
  font-size: large;
}
.leader-list {
  height: 65vh;
  overflow-y: scroll;
}

.dropdown-menu {
  height: 200px;
  overflow-y: scroll;
}

.card {
  border-radius: 10px;
  border: 0;
}
</style>
