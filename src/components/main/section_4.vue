<template>
  <div class="main-section section_4">
    <div class="item-warp">
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
import { MAIN_TITLE } from 'Configs/layout.js'
import { Carousel3d, Slide } from 'vue-carousel-3d'

export default {
  data() {
    return {
      slides: [
        {
          name: '시드물',
          cont: '그린컴퓨터 아카데미 재원 중 제작한 포트폴리오 웹페이지',
          date: '2021. 01. 18 - 2021. 02. 11',
          img: 'sidmool',
          lang: [
            { name: 'HTML5', icon: 'html' },
            { name: 'jQuery', icon: 'jQuery' },
            { name: 'CSS', icon: 'css' },
          ],
          function: [{ name: 'publishing' }, { name: 'design' }],
          link: [
            {
              name: 'Hamepage',
              url: '',
              ico: '',
            },
          ],
        },
        {
          name: '철도박물관',
          cont: '그린컴퓨터 아카데미 재원 중 제작한 포트폴리오 웹페이지',
          date: '2021. 02. 12 - 2021. 02. 26',
          img: 'train',
          lang: [
            { name: 'HTML5', icon: 'html' },
            { name: 'jQuery', icon: 'jQuery' },
            { name: 'CSS', icon: 'css' },
          ],
          function: [{ name: 'publishing' }, { name: 'design' }],
          link: [
            {
              name: 'Hamepage',
              url: '',
              ico: '',
            },
          ],
        },
        {
          name: '세미콜론',
          cont: '그린컴퓨터 아카데미 재원 중 제작한 포트폴리오 웹페이지',
          date: '2021. 03. 02 - 2021. 03. 19',
          img: 'semicolon',
          lang: [
            { name: 'HTML5', icon: 'html' },
            { name: 'jQuery', icon: 'jQuery' },
            { name: 'CSS', icon: 'css' },
          ],
          function: [{ name: 'publishing' }, { name: 'design' }],
          link: [
            {
              name: 'Hamepage',
              url: '',
              ico: '',
            },
          ],
        },
        {
          name: '탑코리아서비스',
          cont: '(주)HOGOO153 재직 중 계열사 홈페이지 제작 의뢰를 받아 제작한 웹페이지',
          date: '2022. 10',
          img: 'topkoreaservice',
          lang: [
            { name: 'VUE', icon: 'vue' },
            { name: 'Javascript', icon: 'javascript' },
            { name: 'Java(JSP)', icon: 'java' },
            { name: 'MariaDB', icon: 'mariaDb', level: '80' },
            { name: 'CSS(SCSS)', icon: 'css' },
          ],
          function: [{ name: 'front' }, { name: 'back' }, { name: 'design' }],
          link: [
            {
              name: 'Hamepage',
              url: '',
              ico: '',
            },
          ],
        },
        {
          name: '개인 포트폴리오',
          cont: '프론트엔드 개발자 포트폴리오 웹사이트 개발',
          date: '2023. 03 - 2021. 04',
          img: 'portfolio',
          lang: [
            { name: 'VUE', icon: 'vue' },
            { name: 'Javascript', icon: 'javascript' },
            { name: 'CSS(SCSS)', icon: 'css' },
          ],
          function: [{ name: 'front' }, { name: 'design' }],
          link: [
            {
              name: 'Hamepage',
              url: '',
              ico: '',
            },
            {
              name: 'Github',
              url: '',
              ico: '',
            },
          ],
        },
      ],
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
