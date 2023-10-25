<!-- This is the execute button to send task-->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  did: String,
  funcs: Object
})

function checkExeDone(ids) {
  var done = false

  while (!done) {
    fetch(`http://140.118.155.18:8000/api/report/${ids[0]}`, {
      method: 'GET',
      credentials: 'include'
    })
      .then((response) => {
        done = true
      })
      .catch((error) => console.error(error))
  }

  // jump to report page
  router.push(`/report/${ids.join(',')}`)
}

function execute() {
  // jump to loading page
  router.push('/loading/task')

  // get function list
  var funcs = []
  for (let f of props.funcs) {
    funcs.push(f.func)
  }

  // post task
  var request = { detector_id: props.did, function_type: funcs }
  var result = []

  fetch('http://140.118.155.18:8000/api/task', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      for (var i = 0; i < response.length; i++) {
        result.push(response[i].report_id)
      }

      checkExeDone(result)
    })
    .catch((error) => console.error(error))
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="execute">Execute</button>
  </div>
</template>
