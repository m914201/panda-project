<template>
  <div class="main-section section_4">
    <div class="item-wrap">
      <article class="inner">
        <main-title
          :titleTxt="targetStep.titleTxt"
          :title="targetStep.title"
        ></main-title>
        <div class="content">
          <div class="project-gubun">
            <div class="project-wrap">
              <carousel-3d class="cont-wrap">
                <slide
                  v-for="(slide, i) in slides"
                  :key="`slide_${i}`"
                  :index="i"
                >
                  <div class="cont-con">
                    <div class="photo-con" :style="projectImg(slide.img)"></div>
                    <div class="txt-con">
                      <div class="title">
                        <h4>{{ slide.name }}</h4>
                        <p>{{ slide.cont }}</p>
                      </div>
                      <div class="function-cont">
                        <p>{{ `#개발기간 : ` + slide.date }}</p>
                        <div class="function-wrap">
                          <p>#개발직무</p>
                          <div class="function-list">
                            <div
                              v-for="(list, ix) in slide.function"
                              :key="`list_${ix}`"
                            >
                              {{ list.name }}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="skills">
                        <p>#기술스텍</p>
                        <div>
                          <div
                            class="ico-wrap"
                            v-for="(list, ix) in slide.lang"
                            :key="`list_${ix}`"
                          >
                            <div class="ico" :style="langImg(list.icon)"></div>
                            {{ list.name }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="txt-btm">
                    <a
                      href=""
                      v-for="(list, i) in slide.link"
                      :key="`list_${i}`"
                    >
                      {{ list.name }}
                      {{ list.url }}
                      {{ list.ico }}
                    </a>
                  </div>
                </slide>
              </carousel-3d>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import MainTitle from 'Components/layout/partials/MainTitle'
import { MAIN_TITLE, PROJECT } from 'Configs/layout.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  data() {
    return {
      slides: Object.freeze(PROJECT),
    }
  },
  components: {
    MainTitle,
    Carousel3d,
    Slide,
  },
  computed: {
    targetStep() {
      return MAIN_TITLE['PROJECT']
    },
  },
  methods: {},
}
</script>

<style></style>
