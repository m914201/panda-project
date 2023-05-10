<template>
  <div class="page-item-wrap" ref="page-item-wrap" @mouseWheelHandle="onScroll">
    <main-header
      v-if="windowWid"
      @scrollInto="scrollInto"
      :navState="navState"
    ></main-header>
    <mobile-header
      v-else
      @scrollInto="scrollInto"
      :navState="navState"
    ></mobile-header>
    <section_1 class="section fullpage" ref="Home"></section_1>
    <section_2
      class="section fullpage"
      ref="Skill"
      :invasion="invasion"
    ></section_2>
    <section_3
      class="section fullpage"
      ref="TimeLine"
      :invasion="invasion"
    ></section_3>
    <section_4
      class="section fullpage"
      ref="Project"
      :invasion="invasion"
    ></section_4>
    <!-- <section_5
      class="section fullpage"
      ref="Additional"
      :invasion="invasion"
    ></section_5> -->
    <section_6
      class="section fullpage"
      ref="About Me"
      :invasion="invasion"
    ></section_6>
  </div>
</template>

<script>
import MainHeader from 'Components/layout/MainHeader'
import MobileHeader from 'Components/layout/MobileHeader'
import section_1 from 'Components/main/section_1'
import section_2 from 'Components/main/section_2'
import section_3 from 'Components/main/section_3'
import section_4 from 'Components/main/section_4'
// import section_5 from 'Components/main/section_5'
import section_6 from 'Components/main/section_6'
export default {
  components: {
    MainHeader,
    MobileHeader,
    section_1,
    section_2,
    section_3,
    section_4,
    // section_5,
    section_6,
  },
  mixins: [],
  data() {
    return {
      navState: 'Home',
      invasion: 'Home',
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
    this.TitleOffsets()
    let vh = window.innerHeight * 0.01

    document.documentElement.style.setProperty('--vh', `${vh}px`)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
}
</script>

<style></style>
