<!-- This is the execute button to send task-->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  did: String,
  funcs: Object
})

function execute() {
  // jump to loading page
  router.push('/loading/task')

  // get function list
  var funcs = []
  for (let f of props.funcs) {
    funcs.push(f.func)
  }

  var request = { detector_id: props.did, function_type: funcs }
  var result = []
  /*fetch('/api/task', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(request)
  })
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      //router.push(`/dash`)
      //console.log('[SUCCESS] Upload Detector')
      console.log(response)
      result = response.report_id
    })
    .catch((error) => console.error(error))
    
    router.push(`/report/${result.join(',')}`)
    */

  var myArray = [100, 200, 300, 400, 500]
  var arrayAsString = myArray.join(',')
  router.push(`/report/${arrayAsString}`)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="execute">Execute</button>
  </div>
</template>
