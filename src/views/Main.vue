<template>
  <div class="page-item-wrap" ref="page-item-wrap">
    <section_1 class="section fullpage" ref="section1"></section_1>
    <section_2 class="section fullpage" ref="section2"></section_2>
  </div>
</template>

<script>
import section_1 from 'Components/main/section_1'
import section_2 from 'Components/main/section_2'
export default {
  components: {
    section_1,
    section_2,
  },
  mixins: [],
  data() {
    return {}
  },
  mounted() {},
  computed: {},

  methods: {},
}
</script>

<style></style>
