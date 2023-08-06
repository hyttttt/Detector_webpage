<script setup>
import BasePage from '../components/BasePage.vue'
import ReportCard from '../components/ReportCard.vue'
import { ref } from 'vue'

const isLogIn = ref(true)
</script>

<template>
  <BasePage :isLogIn="isLogIn">
    <template v-slot:title>Report</template>
    <template v-slot:content>
      <div class="row row-cols-1 row-cols-md-1">
        <div class="col mb-4">
          <ReportCard>
            <template v-slot:title>Normal Samples</template>
            <template v-slot:test-time>123456 ms</template
            ><template v-slot:test-sample-num>123456</template
            ><template v-slot:total-sample-num>789123</template
            ><template v-slot:acc>0.987654</template><template v-slot:fp>0.123456</template
            ><template v-slot:fn>0.123789</template><template v-slot:precision>0.987654</template
            ><template v-slot:recall>0.12346</template><template v-slot:f1>0.54887</template>
          </ReportCard>
        </div>
        <div class="col mb-4">
          <ReportCard> <template v-slot:title>Sequence-based AEs</template> </ReportCard>
        </div>
        <div class="col mb-4">
          <ReportCard> <template v-slot:title>Structure-based AEs</template> </ReportCard>
        </div>
      </div>
    </template>
  </BasePage>
</template>
