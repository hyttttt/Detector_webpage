<!-- This is the bar chart -->
<!-- props data in and it will draw the chart automatically-->

<script setup>
const props = defineProps({
  bar_data: Object /*[{ id: String,
                        value: Number,
                        name: String,
                        x: Number,
                        y: Number,
                        width: Number,
                        height: Number,
                        fill: String
                        },
                        ...
                      ] */,

  bar_caption: Object /*[{ id: String,
                          x: Number,
                          y: Number,
                          width: Number,
                          height: Number,
                          fill: String
                          },
                          ...
                        ] */,
  bar_caption_x: Number,
  bar_caption_name: String,
  bar_height: Number,
  bar_width: Number
})
</script>

<template>
  <div id="barchart">
    <svg width="100%" :height="bar_height">
      <!-- bar chart start -->
      <rect
        v-for="i in bar_data"
        :key="i.id"
        :x="i.x"
        :y="i.y"
        :width="i.width"
        :height="i.height"
        :fill="i.fill"
      />
      <text v-for="i in bar_data" :key="i.id" :x="i.x" :y="i.y">{{ i.value }}</text>
      <!-- bar chart end -->
      <!-- bar chart caption start -->
      <rect
        v-for="i in bar_caption"
        :key="i.id"
        :x="i.x"
        :y="i.y"
        :width="i.width"
        :height="i.height"
        :fill="i.fill"
      />
      <text stroke="#000" :y="20" :x="bar_caption_x">{{ bar_caption_name }}</text>
      <text v-for="i in bar_caption" :x="i.x + i.width + 10" :y="i.y + i.height - 5">
        {{ i.id }}
      </text>
      <!-- bar chart caption end -->
    </svg>
  </div>
</template>

<style scoped>
#barchart {
  margin-top: 5%;
  padding: 5%;
  border: solid;
  border-width: 1px;
  border-color: rgb(210, 208, 208);
}
</style>
