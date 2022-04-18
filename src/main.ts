import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import router from '@/router/index';
import App from './App.vue'

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount('#app')