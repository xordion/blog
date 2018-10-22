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
      path:'/martial_art',
      name: 'martial_art',
      component: function (resolve) {
        require(['@/components/historicalMartialArt/index'], resolve)
      }
    },
    {
      path:'/membership',
      name: 'membership',
      component: function (resolve) {
        require(['@/components/membership/index'], resolve)
      }
    },
    {
      path:'/equipment',
      name: 'equipment',
      component: function (resolve) {
        require(['@/components/equipment/index'], resolve)
      }
    },
    {
      path:'/about_us',
      name: 'about_us',
      component: function (resolve) {
        require(['@/components/aboutUs/index'], resolve)
      }
    },
  ]
})
