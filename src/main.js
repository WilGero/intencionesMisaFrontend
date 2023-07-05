
import axios from 'axios'
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
createApp(App).use(router).mount('#app')

createApp(App).use(VueAxios, axios)