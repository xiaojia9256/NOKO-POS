// import from 引入使用
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-default/index.css'


// 设置引入使用 ElementUI
Vue.config.productionTip = false
Vue.use(ElementUI)

// 定义使用 路由 模板
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
