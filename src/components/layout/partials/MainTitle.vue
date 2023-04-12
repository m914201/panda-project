<template>
  <div class="tit" :class="title">
    <h1>{{ titleTxt }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    titleTxt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
