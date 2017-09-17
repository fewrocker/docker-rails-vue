/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import Vue from 'vue/dist/vue.esm'
import Axios from 'axios'
import Qs from 'qs'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-default/index.css'
import '../src/styles/style.scss'
import Staffs from '../src/components/staffs.vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

Vue.use(ElementUI, { locale })

const axios = Axios.create({
  headers: { 
    'X-CSRF-Token': document.querySelector("meta[name=csrf-token]").content
  },
  paramsSerializer: function(params) {
    return Qs.stringify(params, {arrayFormat: 'brackets'})
  }
})
Vue.prototype.$http = axios

const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/staffs', component: Staffs },
  { path: '/bar', component: Bar }
]
const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
