<template>
  <div class="main-section section_2">
    <div class="item-warp">
      <article class="inner">
        <main-title
          :titleTxt="targetStep.titleTxt"
          :title="targetStep.title"
        ></main-title>
        <div class="content skill-wrap">
          <div
            class="skill-gubun"
            v-for="(list, idx) in skills"
            :key="`skills_${idx}`"
          >
            <div class="title-con">{{ `&#35;` + list.title }}</div>
            <div
              v-for="(cont, ix) in list.content"
              :key="`cont_${ix}`"
              class="cont-wrap"
            >
              <div class="categories">
                <div class="icon" :style="langImg(cont.icon)">아이콘</div>
                <span>{{ cont.name }}</span>
              </div>
              <div class="Fullbar">
                Fullbar
                <div class="filled_bar" :style="barWidth(cont.level)">
                  filledbar
                </div>
              </div>
              <animated-number
                :value="cont.level"
                :duration="500"
                :formatValue="formatToPrice"
                v-if="invasion == 'Skill'"
              />
              &#37;
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import MainTitle from 'Components/layout/partials/MainTitle'
import { MAIN_TITLE, SKILLS } from 'Configs/layout.js'
import AnimatedNumber from 'animated-number-vue'
export default {
  components: {
    MainTitle,
    AnimatedNumber,
  },
  data() {
    return {
      MAIN_TITLE: Object.freeze(MAIN_TITLE),
      skills: Object.freeze(SKILLS),
      wd: '0',
    }
  },
  props: {
    invasion: {
      type: String,
    },
  },
  computed: {
    targetStep() {
      return MAIN_TITLE['SKILL']
    },
  },
  methods: {
    langImg(icon) {
      let URL = 'asset/image/ico/'
      return `background-image: url(${URL + icon + '.png'});`
    },
    barWidth(wd) {
      if (this.invasion == 'Skill')
        return `width:${wd + `%`};transition:width ${wd / 40 + `s`};`
      else return `width:${0 + `%`};`
    },
  },
  async created() {
    console.log(this.invasion)
  },
  updated() {},
}
</script>

<style></style>
