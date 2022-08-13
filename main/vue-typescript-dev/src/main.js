import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import Vue from 'vue'
//import App from './App'
//import router from './router'
//

//定数化
const app = createApp(App).use(router).use(router)
//マウント
app.mount('#app')