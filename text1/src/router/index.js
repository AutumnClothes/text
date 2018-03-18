import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js'
// import iView from 'iview'
// Vue.use(iView)
Vue.use(Router)
const router = new Router({
  routes: routes
})
export default router