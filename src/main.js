import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
//import { BootstrapVue, BootstrapVueIcons,IconsPlugin } from 'bootstrap-vue'
import 'bootstrap';


/**
 * @Bootstrap-vue and bootstrap css
 * */
import 'bootstrap/dist/css/bootstrap.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)
// Vue.use(IconsPlugin)

createApp(App).use(store).use(router).mount('#app')
