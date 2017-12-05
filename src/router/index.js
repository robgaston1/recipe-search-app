import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ingredients from '@/components/Ingredients'
import Search from '@/components/Search'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/ingredients',
      name: 'Ingredients',
      component: Ingredients
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    }
  ],
})
