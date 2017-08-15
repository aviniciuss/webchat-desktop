<template>
    <v-toolbar fixed dark class="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">{{ appname }}</v-toolbar-title>

        <v-spacer></v-spacer>

        <menu-more-vert></menu-more-vert>
    </v-toolbar>
</template>

<script>
    import MenuMoreVert from './MenuMoreVert.vue'

    export default {
        name: 'Toolbar',
        computed: {
            appname() {
                return this.$store.state.appname || 'Atendimento'
            }
        },
        components: {
            MenuMoreVert
        }
    }
</script>