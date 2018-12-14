<template>
    <p> List </p>
</template>

<script>

import { mapActions } from 'vuex'

export default {
    name: 'ContactList',

    methods: {
        ...mapActions([
            'getContacts'
        ])
    },
    created() {
        this.getContacts();
    }

}
</script>

<style>

</style>
