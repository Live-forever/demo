import Vue from 'vue'
import Router from 'vue-router'
import entryindex from '@/components/entry/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'entryindex',
      component: entryindex
    }
  ]
})
