<template>
  <div id="app">
    <v-app>
      <router-view></router-view>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'webchat-desktop',
    methods: {
      isLogged () {
        const profile = this.getProfile()
        if(profile) {
          return profile.token
        }
        return false
      },
      getProfile () {
        return JSON.parse(this.$storage.getItem('webchat_profile'))
      }
    },
    mounted () {
      if(!this.isLogged()) {
        this.$router.push('/login')
      } else {
        const profile = this.getProfile()
        this.$store.dispatch('changeUser', profile)
      }
    }
  }
</script>

<style src="../../node_modules/vuetify/dist/vuetify.min.css" type="text/css"></style>

