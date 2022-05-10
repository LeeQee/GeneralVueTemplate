import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultRoutes from './modules/defaultRoutes'

Vue.use(VueRouter)

const router = new VueRouter({
    scrollBehavior: () => ({y: 0}),
    routes:defaultRoutes
})

export default router