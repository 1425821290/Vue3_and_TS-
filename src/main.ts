import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { getToken } from './utils/auth';

const whiteList = ['/login']


router.beforeEach((to, from, next) => {
    const hasToken = getToken()
    if (hasToken) {
        if (to.path === "/login") {
            next("/")
        } else {
            store.dispatch("getInfoAction")
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})

createApp(App).use(store).use(router).use(Antd).mount('#app')
