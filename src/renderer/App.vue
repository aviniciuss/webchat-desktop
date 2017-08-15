<template>
  <div id="app">
    <v-app>
      <toolbar></toolbar>
      <main>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
      </main>
    </v-app>
  </div>
</template>

<script>
  import Toolbar from './components/Toolbar'

  export default {
    name: 'webchat-desktop',
    components: {
      Toolbar
    },
    methods: {
      isNotLogged() {
        return !this.$storage.getItem('webchat_token')
      }
    },
    sockets: {
      'ping-agents': function() {
          if(this.$storage.getItem('webchat_token')) {
            this.$socket.emit('agent-connected', this.$store.state.user)
          }
      }
    },
    mounted() {
      if(this.isNotLogged()) {
        this.$router.push('/login')
      } else {
        const user = this.$storage.getItem('webchat_user')
        this.$store.dispatch('changeUser', JSON.parse(user))
      }
    },
  }
</script>

<style src="../../node_modules/vuetify/dist/vuetify.min.css" type="text/css"></style>

