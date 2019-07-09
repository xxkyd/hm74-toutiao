import Vue from 'vue'
import App from './App.vue'

// 安装element-ui
import ELEMENT from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ELEMENT)

Vue.config.productionTip = false

// 职责1：导入项目需要依赖的资源（包css...）
// 职责2：初始化根实例 new Vue() 选项 render 作用是把某一个组件渲染在你指定的容器内

new Vue({
  render: h => h(App)
}).$mount('#app')
