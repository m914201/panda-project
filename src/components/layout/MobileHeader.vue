<template>
  <header>
    <div class="rela">
      <div id="header-top" :class="{ active: trigger }">
        <div class="l-wrap">
          <a href="javascript:void(0)" class="btn-home">
            <svg-logo
              :class="[
                { on: navState !== 'Home' && navState !== 'About Me' },
                { active: trigger },
              ]"
            ></svg-logo>
            <p
              :class="[
                { on: navState !== 'Home' && navState !== 'About Me' },
                { active: trigger },
              ]"
            >
              LJH Portfolio
            </p>
          </a>
        </div>
        <div
          class="ham-wrapp"
          @click="menuTrigger"
          :class="[{ active: trigger }]"
        >
          <svg-ham
            class="ham"
            :class="[
              { on: navState !== 'Home' && navState !== 'About Me' },
              { active: trigger },
            ]"
          ></svg-ham>
        </div>
      </div>
      <div
        class="gnb-item-wrap"
        @click="menuTrigger"
        :style="headerStyle"
        :class="[{ trigger: trigger }]"
      >
        <m-gnb-list @scrollInto="scrollInto" :navState="navState"></m-gnb-list>
      </div>
    </div>
  </header>
</template>

<script>
import MGnbList from 'Components/layout/partials/MGnbList'
import SvgLogo from 'Components/svg/SvgLogo'
import SvgHam from 'Components/svg/SvgHam'
export default {
  data() {
    return {
      trigger: false,
    }
  },
  props: {
    navState: {
      type: String,
    },
  },
  components: {
    MGnbList,
    SvgLogo,
    SvgHam,
  },
  methods: {
    scrollInto(title) {
      this.$emit('scrollInto', title)
    },
    menuTrigger() {
      this.trigger = !this.trigger
    },
  },
}
</script>

<style></style>
