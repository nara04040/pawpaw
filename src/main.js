import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')

// window.Kakao.init('e4a4cf7ce258fe989377dc3f43315fc2')
