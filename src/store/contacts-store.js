import ContactsService from './../services/contacts-services'

export default {
    state: {
        data: [],
        total: 0,
        per_page: 10,
        current_page: 1,
        errors: null,
    },
   
    mutations: {
        SET_ERRORS(state, payload) {
            state.errors = payload
        },
        SET_CONTACTS(state, {data, total, per_page, current_page}) {
            state = {
                ...state,
                data,
                total,
                per_page,
                current_page
            }
        }
    },
    actions: {
        async getContacts(context, payload) {
            try {
                let contactsData = await  ContactsService.getContacts(payload)
                context.commit('SET_CONTACTS', contactsData)
                
            } catch (errors) {
                context.commit( 'SET_ERRORS', errors)
            }
        }
    },
    getters: {
        getContactsData(state) {
            return state.data
        },
        getContactsPage(state) {
            return state.current_page
        },
        getTotalNumberOfContacts(state) {
            return state.total
        },
        getNumberOfContactsPerPage(state) {
            return state.per_page
        }

    },
}