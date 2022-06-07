import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ElementUI from '@/components/element-ui';
import testcom from '@/components/testcomponent';

import first from '@/components/first'
import second from '@/components/second';
import third from '@/components/third';
import fourth from '@/components/fourth';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: first //路由视口显示 组件
    },{
      path: '/second',
      name: 'second',
      component: second //HelloWorld
    },{
      path: '/third',
      name: 'third',
      component: third //HelloWorld
    },{
      path: '/fourth',
      name: 'fourth',
      component: fourth //HelloWorld
    },{
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: testcom //HelloWorld
    },

  ]
})
