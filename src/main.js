import { createApp } from 'vue'
import App from './App.vue'
import './main.css';
import { ModalsPlugin } from './support/Modals';

createApp(App).use(ModalsPlugin).mount('#app')
