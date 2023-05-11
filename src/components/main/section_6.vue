<template>
  <div class="main-section section_6">
    <div class="item-wrap">
      <article class="inner">
        <main-title
          :titleTxt="targetStep.titleTxt"
          :title="targetStep.title"
        ></main-title>
        <div class="content">
          <div class="AboutMe-gubun">
            <div class="AboutMe-Top-wrap">
              <h1>
                안녕하세요, <br />
                프론트엔드 개발자를 꿈꾸는 임진혁입니다.
              </h1>
              <p v-html="introduct"></p>
              <div class="resume-wrap">
                <a
                  href="https://h.panda.pe.kr/asset/image/file/Resume.pdf"
                  target="_self"
                  download
                  >DOWNLOAD CV</a
                >
              </div>
            </div>
            <div class="AboutMe-Bottom-wrap">
              <ul>
                <li v-for="(about, idx) in aboutMe" :key="`about_${idx}`">
                  <div class="title">{{ about.title }}</div>
                  <div class="cont">{{ about.cont }}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import MainTitle from 'Components/layout/partials/MainTitle'
import { MAIN_TITLE, INTRODUCT, ABOUT_ME } from 'Configs/layout.js'

export default {
  data() {
    return {
      introduct: Object.freeze(INTRODUCT),
      aboutMe: Object.freeze(ABOUT_ME),
    }
  },
  components: {
    MainTitle,
  },
  mounted() {
    // this.read()
  },
  computed: {
    targetStep() {
      return MAIN_TITLE['ABOUTME']
    },
  },
  methods: {},
}
</script>

<style></style>
