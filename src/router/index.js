import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/radial',
        name: 'Radial',
        component: () => import(/* webpackChunkName: "radial" */ '../views/Radial.vue')
    },  {
        path: '',
        name: 'Landing',
        component: () => import(/* webpackChunkName: "landing" */ '../views/Landing.vue')
    }, {
        path: '/rings',
        name: 'Rings',
        component: () => import(/* webpackChunkName: "rings" */ '../views/Rings.vue')
    }, {
        path: '/circles',
        name: 'Circles',
        component: () => import(/* webpackChunkName: "circles" */ '../views/Circles.vue')
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '../layouts/Dashboard.vue'),
        children: [
            {
                path: '/',
                name: 'Dashboard',
                component: Home
            }
        ]
    },
    {
        path: '/wire',
        name: 'WireFrame',
        component: () => import(/* webpackChunkName: "wire" */ '../views/WireFrame.vue')
    },
    {
        path: '/auth',
        name: 'Auth',
        component: () => import(/* webpackChunkName: "dashboard" */ '../layouts/Auth.vue'),
        children: [
            {
                path: 'login',
                name: 'Login',
                component: () => import(/* webpackChunkName: "wire" */ '../views/Login.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
