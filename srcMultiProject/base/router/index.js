import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@base/view/HelloWorld'


Vue.use(Router)

export const pageRoutes = [{
  path: '/',
  name: 'public',
  component: HelloWorld
}]
export default pageRoutes


