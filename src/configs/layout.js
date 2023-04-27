export const GNB_LIST = [
  { title: 'Home', on: false },
  { title: 'Skill', on: false },
  { title: 'TimeLine', on: false },
  { title: 'Project', on: false },
  { title: 'Additional', on: false },
  { title: 'Footer', on: false },
]

export const MAIN_TITLE = {
  SKILL: {
    title: 'skill',
    titleTxt: 'MY SKILLS',
  },
  TIMELINE: {
    title: 'timeline',
    titleTxt: 'TIME LINE',
  },
  PROJECT: {
    title: 'project',
    titleTxt: 'PROJECT',
  },
  ADDITONAL: {
    title: 'additional',
    titleTxt: 'ADDITONAL',
  },
  FOOTER: {
    title: 'footer',
    titleTxt: 'FOOTER',
  },
}

export const SKILLS = [
  {
    title: 'Language',
    content: [
      { name: 'Javascript', icon: 'javascript', level: '70' },
      { name: 'jQuery', icon: 'jQuery', level: '90' },
    ],
  },
  {
    title: 'Front',
    content: [
      { name: 'Vue', icon: 'vue', level: '80' },
      { name: 'HTML5', icon: 'html', level: '90' },
      { name: 'PHP', icon: 'php', level: '90' },
      { name: 'CSS3(SCSS)', icon: 'css', level: '90' },
    ],
  },
  {
    title: 'Back',
    content: [{ name: 'Java(JSP)', icon: 'java', level: '80' }],
  },
  {
    title: 'DB',
    content: [{ name: 'MariaDB', icon: 'mariaDb', level: '80' }],
  },
]

export const TIMELINE = [
  {
    date: '2020. 10 ~' + `<br />` + '2021. 04',
    cont: '그린컴퓨터아카데미 웹디자이너 과정 수료',
    lang: 'HTML5, jQuery, CSS',
  },
  {
    date: '2021. 04. 30',
    cont: '웹디자인기능사 자격증 취득',
    lang: 'HTML5, jQuery, CSS',
  },
  {
    date: '2021. 05 ~' + `<br />` + ' 2021. 12',
    cont: '(주)유스코어',
    lang: 'PHP, JavaScript, jQuery, CSS',
  },
  {
    date: '2021. 05 ~' + `<br />` + ' 2021. 12',
    cont: '(주)골프유닷넷 웹사이트 유지보수',
    lang: 'PHP, JavaScript, jQuery, CSS',
  },
  {
    date: '2022. 01 ~',
    cont: '(주)HOGOO153',
    lang: 'VUE, JavaScript, jQuery, SCSS',
  },
  {
    date: '2022. 10',
    cont: '(주)탑코리아서비스 홈페이지 제작',
    lang: 'VUE, JavaScript, jQuery, SCSS',
  },
  {
    date: '2022. 12 ~',
    cont: '(주)마키노차야 웹사이트 유지보수',
    lang: 'PHP, JavaScript, jQuery, CSS',
  },
]

export const PROJECT = [
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
]
