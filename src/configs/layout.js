export const GNB_LIST = [
  { title: 'Home', on: false },
  { title: 'Skill', on: false },
  { title: 'TimeLine', on: false },
  { title: 'Project', on: false },
  // { title: 'Additional', on: false },
  { title: 'About Me', on: false },
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
  // ADDITONAL: {
  //   title: 'additional',
  //   titleTxt: 'ADDITONAL',
  // },
  ABOUTME: {
    title: 'aboutMe',
    titleTxt: 'ABOUT ME',
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
      { name: 'PHP', icon: 'php', level: '60' },
      { name: 'CSS3(SCSS)', icon: 'css', level: '90' },
    ],
  },
  {
    title: 'Back',
    content: [{ name: 'Java(JSP)', icon: 'java', level: '50' }],
  },
  {
    title: 'DB',
    content: [{ name: 'MariaDB', icon: 'mariaDb', level: '50' }],
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
        url: 'http://panda-wdg.co.kr/sidmool.html',
        ico: ['awesome', 'fa-solid', 'fa-house'],
      },
      {
        name: 'Github',
        url: 'https://github.com/m914201/panda-wdg',
        ico: ['awesome', 'fa-brands', 'fa-github'],
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
        url: 'http://panda-wdg.co.kr/train.html',
        ico: ['awesome', 'fa-solid', 'fa-house'],
      },
      {
        name: 'Github',
        url: 'https://github.com/m914201/panda-wdg',
        ico: ['awesome', 'fa-brands', 'fa-github'],
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
        url: 'http://panda-wdg.co.kr/semicolon.html',
        ico: ['awesome', 'fa-solid', 'fa-house'],
      },
      {
        name: 'Github',
        url: 'https://github.com/m914201/panda-wdg',
        ico: ['awesome', 'fa-brands', 'fa-github'],
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
        url: 'http://www.topkoreaservice.co.kr',
        ico: ['awesome', 'fa-solid', 'fa-house'],
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
        url: 'https://h.panda.pe.kr',
        ico: ['awesome', 'fa-solid', 'fa-house'],
      },
      {
        name: 'Github',
        url: 'https://github.com/m914201/panda-project',
        ico: ['awesome', 'fa-brands', 'fa-github'],
      },
    ],
  },
]

export const INTRODUCT =
  '출발은 조금 늦었지만' +
  `<br />` +
  '안되면 될 때까지 포기를 모르는 끈기,' +
  `<br />` +
  '남들보다 뛰어나다는 생각은 버리고 누구보다 많이 뛸 생각으로' +
  `<br />` +
  '내가 할 일이다, 한번 시작하면 끝을 보자는 책임감으로' +
  `<br />` +
  '항상 성실하게 앞으로 걸어나가는 프론트엔드 개발자가 되겠습니다.'

export const ABOUT_ME = [
  {
    title: 'Name',
    cont: '임진혁',
  },
  {
    title: 'Email',
    cont: 'm914201@naver.com',
  },
  {
    title: 'Phone',
    cont: '010.  4283.  3060',
  },
  {
    title: 'Age',
    cont: '1994.  03.  06',
  },
  {
    title: 'Address',
    cont: '서울시 강서구 가로공원로88길 7-20',
  },
]
