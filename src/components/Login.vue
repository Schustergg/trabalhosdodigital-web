<template>
            <v-toolbar absolute :elevation="0" color="terciary" fixed class="mb-0 pb-0">
                <v-toolbar-title @click="$router.push('/')">
                    <v-img :src="logoImg" width="300px" class="mt-4"/>
                </v-toolbar-title>
            </v-toolbar>
            <v-container class="d-flex align-center justify-center fill-height login mx-0 my-0 py-0 px-0" fluid>
                <v-row class="d-flex align-center justify-center mx-0 my-0 px-0 py-0">
                    <v-col class="d-flex align-center justify-center mt-0 pt-0" cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <v-card :width="'90%'" class="mx-auto" color="secondary" title="Faça seu Login">
                            <v-divider></v-divider>
                            <v-card-text>
                            <p class="mb-4">Entre com seu email e senha:</p>
                            <v-form>
                                <v-text-field
                                            outline
                                            label="Email"
                                            type="text"
                                            variant="outlined"
                                            v-model="dadosUsuario.email"></v-text-field>
                                <v-text-field
                                            outline
                                            hide-details
                                            label="Senha"
                                            type="password"
                                            variant="outlined"
                                            v-model="dadosUsuario.password"></v-text-field>
                            </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn 
                                    
                                    @click="login()">
                                    Entrar
                                </v-btn>
                                <v-btn 
                                    color="primary"
                                    @click="$router.push('/criar-conta')">
                                    Criar conta
                                </v-btn>
                            </v-card-actions>
                        </v-card> 
                    </v-col>
                    <v-col class="hidden-sm-and-down mr-0 mt-0 mb-0" cols="12" xs="12" sm="12" md="6" lg="6" xl="6">
                        <div class="title-login">Profissionalize seu negócio, conquiste clientes <span class="primary">e venda mais!</span></div>
                        <v-img height="500px" :src="loginImg"></v-img>
                    </v-col>
                </v-row>
        </v-container>
</template>

<script lang="ts">

import { defineComponent } from "vue";
import { mapGetters } from 'vuex';
import logo from '@/assets/logo.png';
import login from '@/assets/login.svg';
export default defineComponent({ 
    data() {
        return {
            logoImg: logo,
            loginImg: login,
            dadosUsuario: {
                email: "",
                password: ""
            }
        }
    },
    computed: {
        ...mapGetters(["getUser"])
    },
    methods: {
        async login() {
            var response = await this.$store.dispatch('login', this.dadosUsuario);
            if (response.isSuccess) { 
                console.log("passssssou")
                this.$router.push("/dashboard/" + response.data.userToken.id);
            }
        },
    }
})
</script>

<style scoped>
.login-form {
    background-color: #f9f4f5;
}
.login {
    background-color: #ede2f2;
}

.primary {
    color: #8b5fed;
}

.title-login {
    text-align: center;
    font-size: 24px;
}
</style>