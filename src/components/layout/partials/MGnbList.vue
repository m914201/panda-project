<template>
  <ul>
    <li
      v-for="(list, idx) in gnbList"
      :key="`gnb_${idx}`"
      :ref="list.title"
      @click="scrollInto(list.title)"
      :class="[{ on: list.on || list.title == navState }]"
    >
      <a href="javascript:void(0);" :style="headerColor">{{ list.title }}</a>
    </li>
  </ul>
</template>

<script>
import { GNB_LIST } from 'Configs/layout.js'
export default {
  data() {
    return {
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
      if (this.navState == 'Home') this.isActive = false
      else this.isActive = true
    },
  },
  methods: {
    scrollInto(title) {
      this.$emit('scrollInto', title)
      console.log(title)
    },
  },
}
</script>

<style></style>
