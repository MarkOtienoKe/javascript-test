import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BusSeat from '@/components/BusSeat'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BusSeat',
      component: BusSeat,
      mode: 'hash'
    }
  ]
})
