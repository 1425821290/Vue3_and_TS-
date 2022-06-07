import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '@/views/login/index.vue'
import Home from '@/views/home/index.vue'
import NotFound from '@/views/404.vue'
import Layout from '@/Layout/index.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: "/home",
        children: [
            {
                path: 'home',
                component: Home,
            }
        ]
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/404',
        component: NotFound
    },
    {
        path: '/:pathMatch(.*)', 
        redirect: '/404',
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
