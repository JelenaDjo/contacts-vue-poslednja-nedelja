import Vue from 'vue'
import Router from 'vue-router'

import ContactList from './components/ContactList'
import Login from './components/Auth/Login'
Vue.use(Router)

const routes = [

    {   path: '/', 
        name: 'home' ,
        component: ContactList
    },

    {
        path: '/login',
        name: 'login',
        component: Login, 
        meta: {
            guest: true
        }
    },

    // {
    //     path: '*',
    //     name: 'not-found',
    //     component: 
    // }
]

const router = new Router ({ // na ovaj router kacimo globalne guarde
    routes ,
    mode: 'history'
})
router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('token')

    console.log({ isAuthenticated })

    if (isAuthenticated && to.meta.guest ) {
        return next({ name: 'home' })
    }
    if (!isAuthenticated && !to.meta.guest) {
        return next({ name: 'login' })
    }
    return next()
})
// +'1'  === ovakp string jedinice postaje int

export default router