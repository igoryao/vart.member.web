// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css'

import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import axios from './http'
import VueMaterial from 'vue-material'

import router from './router'


Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.prototype.axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
