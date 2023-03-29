<template>
  <div class="main-section section_1">
    <div class="item-warp">
      <div id="glassmorphism"></div>
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
