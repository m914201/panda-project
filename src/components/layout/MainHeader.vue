<template>
  <header>
    <div class="rela">
      <div class="l-wrap">
        <a href="javascript:void(0)" class="btn-home">
          <img src="" />
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
export default {
  props: {
    navState: {
      type: String,
    },
  },
  components: {
    GnbList,
  },
  methods: {
    scrollInto(title) {
      this.$emit('scrollInto', title)
    },
  },
}
</script>

<style></style>
