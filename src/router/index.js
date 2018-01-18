import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: []
    },
    {
      path:'/test',
      name: 'test',
      component: function (resolve) {
        require(['@/components/test'], resolve)
      }
    }
  ]
})
