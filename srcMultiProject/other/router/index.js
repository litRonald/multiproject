
import first from '@srcmult/view/first'
import second from '@srcmult/view/second';
import third from '@srcmult/view/third';
import fourth from '@srcmult/view/fourth';

import Vue from 'vue'
import Router from 'vue-router'
import { pageRoutes } from '@/base/router/index.js'

// pageRoutes 就是公共的路由;

Vue.use(Router)

const routeM = [{
  path: '/',
  name: '',
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
},]

// 合并公共区域的路由
const routes = routeM.concat(pageRoutes)

// 构造路由对象 并暴露出去
const router = new Router({
  routes
})
export default router


