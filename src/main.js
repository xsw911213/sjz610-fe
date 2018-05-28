// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios'

import host from '../config/host'

import 'swiper/dist/css/swiper.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

import VueTouch from 'vue-touch'

Vue.use(VueTouch)
// console.log(VueTouch)

Vue.use(VueAwesomeSwiper, /* { default global options } */)


Vue.prototype.axios = axios
Vue.prototype.host = host

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
