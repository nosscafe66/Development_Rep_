import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< Updated upstream

createApp(App).use(router).use(router).mount('#app')
=======
//import axios from 'axios'  //axiosを使う場合、main.jsでimportする。

//Vue.config.productionTip = false
//Vue.prototype.$axios = axios  //axiosを使う場合、main.jsでこの行の追記が必要

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
>>>>>>> Stashed changes
