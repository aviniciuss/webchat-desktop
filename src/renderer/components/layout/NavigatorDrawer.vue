<template>
    <v-navigation-drawer light permanent clipped>
        <v-list dense>
            <v-subheader>CLIENTES</v-subheader>
            <v-list-tile v-for="client in clients" :key="client.name">
                <v-list-tile-content>
                    <v-list-tile-title>{{ client.name }}</v-list-tile-title>
                    <v-list-tile-sub-title>
                        <small>{{ client.date }}</small>
                    </v-list-tile-sub-title>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>    
    export default {
        name: 'NavigatorDrawer',
        data() {
            return {
                clients: []
            }
        },
        mounted() {
            setTimeout(() => this.getClients(), 2000)
        },
        methods: {
            getClients() {                
                this.$http.get('/api/clients', { headers: { 'Authorization': `Bearer ${this.$store.state.user.token}` } })
                    .then(response => this.clients = response.data.data)
                    .catch(error => console.log(error))
            }
        },
        sockets: {
            'client-connected': function (client) {
                this.getClients()
            }
        }
    }
</script>