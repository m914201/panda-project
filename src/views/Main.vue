<template>
  <div class="page-item-wrap" ref="page-item-wrap" @mouseWheelHandle="onScroll">
    <main-header @scrollInto="scrollInto" :navState="navState"></main-header>
    <section_1 class="section section_1 fullpage" ref="Home"></section_1>
    <section_2
      class="section section_2 fullpage"
      ref="Skill"
      :invasion="invasion"
    ></section_2>
    <section_3
      class="section section_2 fullpage"
      ref="TimeLine"
      :invasion="invasion"
    ></section_3>
  </div>
</template>

<script>
import MainHeader from 'Components/layout/MainHeader'
import section_1 from 'Components/main/section_1'
import section_2 from 'Components/main/section_2'
import section_3 from 'Components/main/section_3'
export default {
  components: {
    MainHeader,
    section_1,
    section_2,
    section_3,
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
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style></style>
