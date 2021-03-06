import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
/** 导入全局样式表 */
import './assets/css/global.css'
import './assets/fonts/iconfont.css'

import axios from 'axios'

// 配置请求的根路径
axios.default.baseUrl = 'http://www.baidu.com'
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
