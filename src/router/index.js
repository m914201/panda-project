import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      //메인 페이지
      {
        path: '/',
        name: 'main',
        component: () => import('Views/Main'),
      },
      {
        path: '/DataBase',
        name: 'dataBase',
        component: () => import('Components/DataBase.vue'),
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

//라우터 중복 오류 대응 위한 코드
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => {
    if (err.name !== 'NavigationDuplicated') throw err
  })
}

export default router
