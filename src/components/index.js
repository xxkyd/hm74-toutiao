// 封装一个vue的插件 完成当前文件夹在所有的组件全局注册
// 当导入这个模块，使用vue.use（使用这个模块） vue会调用install函数，默认传入vue对象
import MyBread from '@/components/my-bread.vue'
import MyChanner from '@/components/my-channel.vue'
import MyImage from '@/components/my-image.vue'
export default {
  install (Vue) {
    // 使用Vue对象去做你的业务即可
    // 进行组件的注册
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyChanner.name, MyChanner)
    Vue.component(MyImage.name, MyImage)
  }
}
