<template>
  <ul>
    <li
      v-for="(list, idx) in gnbList"
      :key="`gnb_${idx}`"
      :ref="list.title"
      @click="scrollInto(list.title)"
      @mouseover="NavEvent('Over', list)"
      @mouseleave="NavEvent('Leave', list)"
      :class="[{ on: list.on || list.title == navState }, { active: isActive }]"
    >
      <a href="javascript:void(0);">{{ list.title }}</a>
    </li>
  </ul>
</template>

<script>
import { GNB_LIST } from 'Configs/layout.js'
export default {
  data() {
    return {
      isActive: false,
      gnbList: JSON.parse(JSON.stringify(GNB_LIST)),
    }
  },
  props: {
    navState: {
      type: String,
    },
  },
  watch: {
    navState() {
      if (this.navState == 'Home' || this.navState == 'About Me')
        this.isActive = false
      else this.isActive = true
    },
  },
  methods: {
    NavEvent(gubun, list) {
      if (gubun == 'Over') list.on = true
      if (gubun == 'Leave') list.on = false
    },
    scrollInto(title) {
      this.$emit('scrollInto', title)
    },
  },
}
</script>

<style></style>
