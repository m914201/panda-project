<template>
  <div class="main-section section_1">
    <div class="item-warp">
      <div id="glassmorphism">
        <vue-typer
          class="typing-display"
          :text="[
            '안되면 될 때까지,',
            '누구보다 많이 뛰어서,',
            '한번 시작하면 끝을 보자',
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
      <div class="stars">
        <div class="star" v-for="(star, idx) in 50" :key="`star_${idx}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  components: {
    // popup,
  },
  computed: {},
  methods: {},
  async created() {},
  updated() {},
}
</script>

<style></style>
