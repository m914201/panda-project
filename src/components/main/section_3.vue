<template>
  <div class="main-section section_3">
    <div class="item-warp">
      <article class="inner">
        <main-title
          :titleTxt="targetStep.titleTxt"
          :title="targetStep.title"
        ></main-title>
        <div class="content time-wrap">
          <div class="time-gubun">
            <div class="time-wrap">
              <div
                class="cont-wrap"
                v-for="(list, ix) in timeline"
                :key="`test_${ix}`"
              >
                <div class="date">{{ list.date }}</div>
                <div class="Neumorphism">
                  <div class="company">{{ list.cont }}</div>
                  <div class="Language">{{ list.lang }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import MainTitle from 'Components/layout/partials/MainTitle'
import { MAIN_TITLE, TIMELINE } from 'Configs/layout.js'
export default {
  components: {
    MainTitle,
  },
  data() {
    return {
      timeline: Object.freeze(TIMELINE),
    }
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
