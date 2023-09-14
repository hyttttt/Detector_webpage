<!-- This is the execute button to send task-->

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

const props = defineProps({
  did: String,
  funcs: Object
})

function execute() {
  router.push('/loading/task')

  var funcs = []
  for (let f of props.funcs) {
    funcs.push(f.func)
  }

  var request = { detector_id: props.did, function_type: funcs }

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
    })
    .catch((error) => console.error(error))
    */

  //console.log(request)
  // console.log('click' + request.detector_id)
  //console.log(props.funcs[0].func)
}
</script>

<template>
  <div>
    <button type="button" class="btn btn-primary" @click="execute">Execute</button>
  </div>
</template>
