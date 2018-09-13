import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import '@/common/css/reset.scss';
import '@/common/css/base.scss';
import '@/common/css/variable.scss';
// @import 'font-awesome/scss/font-awesome.scss';
import '@/common/fonts/icon.scss';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
