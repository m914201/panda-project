export default {
  data() {
    return {
      offsets: [],
      ScrollY: 0,
    }
  },
  watch: {
    ScrollY: {
      immediate: true,
      handler() {
        let Y = this.ScrollY
        let OFFSET = this.offsets
        if (Y >= OFFSET[0] && Y < OFFSET[1]) this.navState = 'Home'
        if (Y >= OFFSET[1] && Y < OFFSET[2]) this.navState = 'Skill'
        if (Y >= OFFSET[2] && Y < OFFSET[3]) this.navState = 'TimeLine'
        if (Y >= OFFSET[3]) this.navState = 'Project'
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
  },
}
