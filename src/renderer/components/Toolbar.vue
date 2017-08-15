<template>
    <v-toolbar fixed dark class="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">{{ appname }}</v-toolbar-title>

        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
    export default {
        name: 'Toolbar',
        computed: {
            appname() {
                return this.$store.state.appname || 'Atendimento'
            }
        }
    }
</script>