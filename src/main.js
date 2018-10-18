// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//全局css
import "./assets/css/mypage.css"
import "./assets/font/publicIconfont/iconfont.css"
import "./assets/css/swiper.css"


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app></app>'
})
