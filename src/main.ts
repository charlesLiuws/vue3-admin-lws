import { createApp } from 'vue'
import router from './router/index';
import ElementPlus from 'element-plus';
import store from './store'
import App from './App.vue'
import 'normalize.css/normalize.css'
import '@/styles/index.scss'
import 'virtual:svg-icons-register'
import initSvgIcon from '@/icons/index'
createApp(App)
    .use(store)
    .use(ElementPlus)
    .use(initSvgIcon)
    .use(router)
    .mount('#app')