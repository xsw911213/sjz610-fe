import Vue from 'vue'
import Router from 'vue-router'

const Index = resolve => require(['../views/Index'], resolve);

const Map = resolve => require(['../views/Map'], resolve);

const Signin = resolve => require(['../views/Signin'], resolve);

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    },
    
  ]
})
