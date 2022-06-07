// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@srcmult/router'

Vue.config.productionTip = false

console.log(router)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
     App,
  },
  template: '<App/>',
  fullscreenLoading: false,
  methods: {
    openFullScreen() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
})
