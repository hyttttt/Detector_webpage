<!-- This is the execute button to send task-->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  did: String,
  funcs: Object
})

// check if analysis done every 10 sec
function checkExeDone(ids) {
  var time = 0
  console.log('check')

  var interval = setInterval(function () {
    fetch(`http://140.118.155.18:8000/api/report/${ids[0]}`, {
      method: 'GET',
      credentials: 'include'
    })
      .then((response) => response.json())
      .then((response) => {
        if (response != null) {
          router.push(`/report/${ids.join(',')}`) // jump to report page
          clearInterval(interval)
          console.log('get report, clear interval')
          return
        }
      })
      .catch((error) => console.error(error))

    time += 10
    console.log(time + 'sec')
  }, 10000)
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
      console.log('report id')
      console.log(result)
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
