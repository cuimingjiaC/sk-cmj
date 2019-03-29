import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import Luxury from './views/home/HomeMainLuxury.vue'
import Play from './views/home/Play.vue'
import Travel from './views/home/Travel.vue'
import Brand from './views/brand/Brand.vue'
import Products from './views/products/Products.vue'
import ProductDetail from './views/products/ProductDetail.vue'
import Bag from './views/bag/Bag.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    {
      path: '/products/:key',
      component: Products,
      children:[
        {
          path: ':id',
          component: ProductDetail
        }
      ]
    },
    {
      path: '/proDetail/:id',
      component: ProductDetail,
    },
    {
      path: '/bag',
      component: Bag,
    },
  ]
})
