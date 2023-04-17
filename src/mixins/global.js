export default {
  data() {
    return {
      offsets: [],
      contOffset: [],
      ScrollY: 0,
    }
  },
  watch: {
    ScrollY: {
      immediate: true,
      handler() {
        let Y = this.ScrollY
        let OFFSET = this.offsets
        let CONTOFFSET = this.contOffset
        if (Y >= OFFSET[0] && Y < OFFSET[1]) this.navState = 'Home'
        if (Y >= OFFSET[1] && Y < OFFSET[2]) this.navState = 'Skill'
        if (Y >= OFFSET[2] && Y < OFFSET[3]) this.navState = 'TimeLine'
        if (Y >= OFFSET[3]) this.navState = 'Project'

        if (Y + OFFSET[1] >= CONTOFFSET[0] + OFFSET[1]) this.invasion = 'Skill'
      },
    },
  },
  methods: {
    onScroll() {
      this.ScrollY = window.pageYOffset
    },
    calculateSectionOffsets() {
      let sections = document.getElementsByClassName('section')
      let length = sections.length

      for (let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop
        this.offsets.push(sectionOffset)
      }
    },
    TitleOffsets() {
      let cont = document.getElementsByClassName('content')
      let length = cont.length

      for (let i = 0; i < length; i++) {
        let contOffset = cont[i].offsetTop
        this.contOffset.push(contOffset)
      }
    },
    formatToPrice(value) {
      return `${Number(value).toFixed(0)}`
    },
    langImg(icon) {
      let URL = 'asset/image/ico/'
      return `background-image: url(${URL + icon + '.png'});`
    },
    projectImg(icon) {
      let URL = 'asset/image/project/'
      return `background-image: url(${URL + icon + '.png'});`
    },
  },
}
