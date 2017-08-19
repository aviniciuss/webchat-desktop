<template>
    <v-app>
      <navigator-drawer></navigator-drawer>

      <toolbar></toolbar>
      
      <main>
        <v-container fluid>
        </v-container>
      </main>
    </v-app>
</template>

<script>
  import Toolbar from './layout/Toolbar'
  import NavigatorDrawer from './layout/NavigatorDrawer'

  export default {
    components: {
      Toolbar,
      NavigatorDrawer
    },
    sockets: {
      'ping-agents': function() {
        this.$socket.emit('agent-connected', this.$store.state.user)
      }
    },
  }
</script>
