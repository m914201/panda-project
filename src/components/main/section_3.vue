<template>
  <div class="main-section section_2">
    <div class="item-warp">
      <article class="inner">
        <main-title
          :titleTxt="targetStep.titleTxt"
          :title="targetStep.title"
        ></main-title>
        <div class="content skill-wrap">
          <div class="time-gubun"></div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import MainTitle from 'Components/layout/partials/MainTitle'
import { MAIN_TITLE } from 'Configs/layout.js'
export default {
  components: {
    MainTitle,
  },
  data() {
    return {}
  },
  props: {},
  computed: {
    targetStep() {
      return MAIN_TITLE['TIMELINE']
    },
  },
  methods: {},
  async created() {},
  updated() {},
}
</script>

<style></style>
