// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./assets/css/mypage.css"

Vue.config.productionTip = false

/* eslint-disable no-new */
// Vue.component("wph-specialty-today",{
//   template:"<div><h3>今日t</h3><img/></div>"
// })

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
