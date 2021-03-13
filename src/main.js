// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Header from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import smoothScroll from 'vue-smoothscroll'

library.add(fas, far);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false
Vue.use(smoothScroll)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#Header',
  components: { Header },
})
