// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import NotFound from '@/views/404'
import Article from '@/views/article'
Vue.use(VueRouter)
const router = new VueRouter({
  routes: [
    { name: 'login', path: '/login', component: Login },
    { name: '',
      path: '/',
      component: Home,
      children: [
        { name: 'welcome', path: '/', component: Welcome },
        { name: 'article', path: '*', component: Article }

      ] },

    { name: '404', path: '*', component: NotFound }

  ]
})
// 加上前置守卫
router.beforeEach((to, form, next) => {
  if (to.path === '/login') return next()
  const user = window.sessionStorage.getItem('hm74-toutiao')
  if (user) return next()
  next('/login')
})
export default router
