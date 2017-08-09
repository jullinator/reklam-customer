import './state/App'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './components/Root.vue'
import router from './router'


Vue.use(VueRouter)

new Vue({
  el:'#app',
  render:h=>h(Root),
  router
})
