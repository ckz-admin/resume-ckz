import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import resume from '@/components/resume'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/resume'
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/resume',
      name: 'resume',
      component: resume
    }
  ]
})
