<template>
    <v-layout row justify-center wrap>
        <v-flex xs10>
            <v-text-field name="email" label="E-mail" type="email" v-model="user.email" required/>
            <v-text-field name="password" label="Senha" type="password" v-model="user.password" required/>
        </v-flex>
        <v-flex xs10 class="text-xs-right">
            <v-btn primary dark @click.native="login">Entrar</v-btn>
        </v-flex>
    </v-layout>
</template>


<script>
    export default {
        name: 'Login',
        data() {
            return {
                user: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login() {
                this.$http.post('http://127.0.0.1:8000/api/authenticate', this.user)
                    .then((response) => {
                        const user = response.data.user
                        const token = response.data.token

                        this.$storage.setItem('webchat_token', token)
                        this.$storage.setItem('webchat_user', JSON.stringify(user))

                        this.$store.dispatch('changeUser', user)
                        this.$socket.emit('agent-connected', user)

                        this.$router.push('/app')
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        }
    }
</script>
