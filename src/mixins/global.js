export default {
  data() {
    return {
      offsets: [],
      contOffset: [],
      ScrollY: 0,
      window: {
        width: 0,
        height: 0,
      },
      windowWid: false,
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
        if (Y >= OFFSET[3] && Y < OFFSET[4]) this.navState = 'Project'
        if (Y >= OFFSET[4] && Y < OFFSET[5]) this.navState = 'Additional'
        if (Y >= OFFSET[5]) this.navState = 'Footer'

        if (Y + OFFSET[1] >= CONTOFFSET[0] + OFFSET[1]) this.invasion = 'Skill'
      },
    },
    window: {
      deep: true,
      handler() {
        if (this.window.width < 1023) {
          this.windowWid = false
          console.log('false')
        } else {
          this.windowWid = true
          console.log('true')
        }
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
    handleResize() {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    },
  },
  computed: {
    headerStyle() {
      if (!this.windowWid) {
        if (
          this.navState == 'Home' ||
          this.navState == 'Project' ||
          this.navState == 'Footer'
        ) {
          return 'background-color: rgba(255,255,255,0.5);'
        } else {
          return 'background-color: rgba(0,0,0,0.5);'
        }
      }
    },
    headerColor() {
      if (!this.windowWid) {
        if (
          this.navState == 'Home' ||
          this.navState == 'Project' ||
          this.navState == 'Footer'
        ) {
          return 'color:#000;'
        } else {
          return 'color:#fff;'
        }
      }
    },
  },
  created() {},
}
