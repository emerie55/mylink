import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Edit from '../views/Edit'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

    {
        path: '/about',
        name: 'About',
        component: About,
    },

    {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit,
        props: true,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router