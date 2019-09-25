import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import '@/styles/common.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import '@/styles/formsize.scss' // 覆盖了element-ui的部分样式，将table、input字体和间距调小了，不喜欢的可以注释掉这行
import '@/styles/index.scss' // global css
import App from './App'
import router from './router/routers'
import permission from './components/permission'
import store from './store'

import '@/icons' // icon
import './router/index' // permission control

Vue.use(mavonEditor)
Vue.use(permission)
Vue.use(ElementUI, { locale })
// Vue.use(require('vue-moment'))
Vue.config.productionTip = false
require('babel-polyfill')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
