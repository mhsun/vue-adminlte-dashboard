import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/widget',
        name: 'Widget',
        component: () => import(/* webpackChunkName: "widget" */ '../views/Widget.vue')
    },
    {
        path: '/form',
        name: 'Form',
        component: () => import('../views/Form')
    },
    {
        path: '/table',
        name: 'Table',
        component: () => import('../views/Table')
    },
    {
        path: '/ui/general',
        name: 'Table',
        component: () => import('../views/UIElements')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
