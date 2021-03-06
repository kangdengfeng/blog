// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'src/assets/style/base.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import Http from 'src/assets/js/Http'
import VueSimplemde from 'vue-simplemde'
import 'simplemde/dist/simplemde.min.css'

Vue.config.productionTip = false

Vue.use(ElementUI, {size: 'small'})
Vue.use(VueSimplemde)

Vue.prototype.$Http = Http

router.beforeEach(async (to, from, next) => {
  if (to.fullPath !== '/login' && to.fullPath !== '/register') {
    if (!localStorage.getItem('Authorization')) {
      return next('/login')
    }
  }
  document.title = to.meta.title
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
