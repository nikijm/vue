import Vue from 'vue'
import Router from 'vue-router'
import Reg from '@/components/Reg';
import Login from '@/components/Login';
import Test from '@/components/Test';
import StuElement from '@/components/student/StuElement';

Vue.use(Router)

export default new Router({
// mode:'history',
  routes: [{
      path: '/',
      component: Reg
  },
  {
      path: '/reg',
      component: Reg
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/student',
    component: StuElement
  },
  {
    path: '/test',
    component: Test
  }
  ]
})
