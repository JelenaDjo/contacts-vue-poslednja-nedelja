// import axios from 'axios';
import http from './http-service'

class ContactsService {
   
    getContacts( page = 1) {
        return http.get('/contacts', {params: { page }}) // ovde smo umesto axios stavili http 
            .then(({ data }) => data)
    }
}


const contactsService = new ContactsService()

export default contactsService