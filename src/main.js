import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// 职责1：导入项目需要的依赖资源（包css 。。。）
// 职责2：初始化根实例 new Vue()选项render 作用是把某一个app组件渲染在你指定的容器$mount('#app')内
new Vue({
  render: h => h(App)
}).$mount('#app')
