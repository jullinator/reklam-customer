import VueRouter from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import NoMatch from './components/NoMatch.vue'
import Register from './components/Register.vue'

const routes = [
  {path: '/', component: NoMatch},
  {path: '/login', component: Login},
  {path: '/home', component: Home},
  {path: '/register', component: Register}
]

const router = new VueRouter({
  mode:'history',
  routes
})

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    router.push({path:'/home'})
    App.userReady(user)
  }
  else {
    router.push({path:'/login'})
  }
});

export default router
