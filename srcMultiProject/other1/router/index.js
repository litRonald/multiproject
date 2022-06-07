import Vue from 'vue'
import Router from 'vue-router'
import hello from '@srcmult/view/index.vue'
import tshello from '@srcmult/view/tshello.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: hello //路由视口显示 组件
    },
    {
      path: '/',
      name: '',
      component: tshello //路由视口显示 组件
    }
  ]
})


