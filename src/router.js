import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Luxury from './views/home/HomeMainLuxury.vue'
import Play from './views/home/Play.vue'
import Travel from './views/home/Travel.vue'
import Brand from './views/brand/Brand.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      redirect: '/home/luxury',
      component: Home,
      children:[
        {
          path: 'luxury',
          component: Luxury 
        },
        {
          path: 'play',
          component: Play
        },
        {
          path: 'travel',
          component: Travel
        }
      ]
    },
    {
      path: '/brand',
      component: Brand,
    },
  ]
})
