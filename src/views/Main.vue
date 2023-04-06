<template>
  <div class="page-item-wrap" ref="page-item-wrap" @mouseWheelHandle="onScroll">
    <main-header @scrollInto="scrollInto" :navState="navState"></main-header>
    <section_1 class="section section_1 fullpage" ref="Skill"></section_1>
    <!--<section_2 class="section section_2 fullpage" ref="TimeLine"></section_2>
    <section_4 class="section section_4 fullpage" ref="TimeLine"></section_4> -->
  </div>
</template>

<script>
import MainHeader from 'Components/layout/MainHeader'
import section_1 from 'Components/main/section_1'
export default {
  components: {
    MainHeader,
    section_1,
    // section_2,
    // section_4,
  },
  mixins: [],
  data() {
    return {
      navState: 'Home',
    }
  },
  methods: {
    scrollInto(title) {
      this.$refs[title].$el.scrollIntoView({ behavior: 'smooth' })
    },
  },
  mounted() {
    this.ScrollY = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    this.calculateSectionOffsets()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style></style>
