import Vue from 'vue'
import App from './App.vue'

// 安装element-ui
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 默认索引：文件夹下存在index.js index.vue index.json默认加载这些文件
// 如果同时存在三种（顺序index.js index.vue index.json）
// 在使用vue-cli的时候 @符号在路径中作为前缀使用的时候，代表src目录
import router from '@/router'

import components from '@/components'
// 导入axios
import axios from '@/api/axios'
// 导入axios
// 导入全局样式
import '@/styles/index.less'
// 基准路径
/* axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
// token认证
axios.defaults.headers = {
  Authorization: 'Bearer' + JSON.parse(window.sessionStorage.getItem('hm74-toutiao')).token
} */

Vue.use(components)
Vue.prototype.$http = axios

Vue.use(ELEMENT)

Vue.config.productionTip = false

// 职责1：导入项目需要依赖的资源（包css...）
// 职责2：初始化根实例 new Vue() 选项 render 作用是把某一个组件渲染在你指定的容器内

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
