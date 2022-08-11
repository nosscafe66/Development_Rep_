// eslint-disable-next-line
/* eslint-disable */ 
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
<<<<<<< Updated upstream

createApp(App).use(router).use(router).mount('#app')
=======
//import axios from 'axios'  //axiosを使う場合、main.jsでimportする。

//Vue.config.productionTip = false
//Vue.prototype.$axios = axios  //axiosを使う場合、main.jsでこの行の追記が必要
=======
import axios from 'axios'  //axiosを使う場合、main.jsでimportする。

Vue.config.productionTip = false
Vue.prototype.$axios = axios  //axiosを使う場合、main.jsでこの行の追記が必要
>>>>>>> 08809577ae602ad705e616a27f5bf1481688292a

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
<<<<<<< HEAD
})
>>>>>>> Stashed changes
=======
})
>>>>>>> 08809577ae602ad705e616a27f5bf1481688292a
