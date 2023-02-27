<template>
    <v-container class="fill-height mx-0 my-0 px-0 py-0 dashboard" fluid>
        <v-navigation-drawer color="secondary" permanent >
            <v-toolbar :elevation="0" color="secondary" fixed>
            <v-toolbar-title @click="$router.push('/')">
                <v-img :src="logoImg" width="300px" class="mt-4"/>
            </v-toolbar-title>
            </v-toolbar>
            <v-list nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Dashboard" @click="$router.push('/dashboard')"></v-list-item>
                <v-list-item prepend-icon="mdi-account" title="Meu Perfil" @click="$router.push('/perfil/edicao/')"></v-list-item>
                <v-list-item prepend-icon="mdi-cog" title="Configurações" @click="$router.push('/configuracoes')"></v-list-item>
            </v-list>
            <template v-slot:append>
                <v-footer class="footer" fixed padless color="secondary">
                    <v-col class="text-center mt-4" cols="12">
                        {{ new Date().getFullYear() }} — <strong>Trabalhos do Digital</strong>
                    </v-col>
            </v-footer> 
            </template>
            
        </v-navigation-drawer>    
        <v-row class="d-flex justify-center mx-0 my-0 px-0 py-0">
            <v-col class="d-flex align-center justify-center" v-if="loading" cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
                <v-progress-circular :size="100" indeterminate>
                </v-progress-circular>
            </v-col>
            <v-col v-else class="d-flex align-start justify-center" cols="12" xs="12" sm="12" md="12" lg="8" xl="8"> 
                <v-card flat width="100%" color="secondary">
                        <v-row class="d-flex align-center justify-center">
                            <v-card-title class="mt-4"> Acessos no seu perfil </v-card-title>
                            
                        </v-row>
                </v-card>
            </v-col>
        </v-row>
        
 
    
    </v-container>
    
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from '@/assets/logo.png';

export default defineComponent({ 
    data() {
        return {
            logoImg: logo,
            loading: false
        }
    }
})
</script>

<style>

.dashboard {
   background-color: #f9f4f5;
}

.footer {
    font-size: 14px;
}

</style>