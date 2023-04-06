<template>
  <div class="main-section section_1">
    <div class="item-warp">
      <div id="glassmorphism">
        <vue-typer
          class="typing-display"
          :text="[
            '조금 느리지만 멈추지 않고,',
            '멈추지 않고 꾸준히,',
            '항상 앞을 보며 성실히 걷고 있습니다.',
            '같이 걸으실래요?',
          ]"
          :repeat="0"
          :shuffle="false"
          initial-action="typing"
          :pre-type-delay="500"
          :type-delay="70"
          :pre-erase-delay="800"
          :erase-delay="100"
          erase-style="select-back"
          :erase-on-complete="false"
          caret-animation="blink"
        ></vue-typer>
      </div>
      <div class="background-wrap">
        <div class="background-cont"></div>
      </div>
      <div id="section_animation">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div id="Walking"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin)
export default {
  data() {
    return {}
  },
  computed: {},
  methods: {},
  created() {},
}
</script>

<style scoped></style>
