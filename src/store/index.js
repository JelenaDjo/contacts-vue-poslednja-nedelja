import Vue from 'vue'
import Vuex from 'vuex'

import contastsStore from './contacts-store'
import authStore from './auth-store'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        contastsStore,
        authStore
    }
})

export default store

