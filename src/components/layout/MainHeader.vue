<template>
  <header>
    <div class="rela">
      <div class="l-wrap">
        <a href="javascript:void(0)" class="btn-home">
          <svg-logo :class="[{ on: navState !== 'Home' }]"></svg-logo>
          <p :class="[{ on: navState !== 'Home' }]">LJH Portfolio</p>
        </a>
      </div>
      <div class="gnb-item-wrap">
        <gnb-list @scrollInto="scrollInto" :navState="navState"></gnb-list>
      </div>
    </div>
  </header>
</template>

<script>
import GnbList from 'Components/layout/partials/GnbList'
import SvgLogo from 'Components/svg/SvgLogo'
export default {
  props: {
    navState: {
      type: String,
    },
  },
  components: {
    GnbList,
    SvgLogo,
  },
  methods: {
    scrollInto(title) {
      this.$emit('scrollInto', title)
    },
  },
}
</script>

<style></style>
