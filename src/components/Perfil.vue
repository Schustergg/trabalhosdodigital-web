<template>
     <v-container class="fill-height mx-0 my-0 px-0 py-0 perfil" fluid>
        <v-toolbar :elevation="0" color="secondary" fixed class="mb-8 pb-8">
            <v-toolbar-title @click="$router.push('/')">
                <v-img :src="logoImg" width="300px" class="mt-4"/>
            </v-toolbar-title>
            <v-spacer v-if="!isMobile"></v-spacer>
            <v-btn
                :size="isMobile ? 'x-small' : 'default'"
                class="mr-2"
                variant="outlined"
                @click="$router.push('/resultados')"
            > Voltar para Resultados </v-btn>
        </v-toolbar>
        <v-row class="d-flex justify-center mx-0 my-0 px-0 py-0">
            <v-col class="d-flex align-center justify-center" v-if="loading" cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
                <v-progress-circular :size="100" indeterminate>
                </v-progress-circular>
            </v-col>
            <v-col v-else class="d-flex align-start justify-center" cols="12" xs="12" sm="12" md="12" lg="8" xl="8"> 
                <v-card flat width="100%" color="secondary">
                        <v-row class="d-flex align-center justify-center">
                            <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12"> 
                                <v-avatar
                                    class="ma-3"
                                    size="150">
                                    <v-img cover :src="profissional.fotoPrincipal"></v-img>
                                </v-avatar>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex align-center justify-center">
                            <v-card flat width="100%" color="secondary">
                                <v-tabs
                                    v-model="tab"
                                    color="primary"
                                    align-tabs="center">
                                    <v-tab :value="1">Sobre o Trabalho</v-tab>
                                    <v-tab :value="2">Sobre o Profissional</v-tab>
                                </v-tabs>
                                <v-window v-model="tab">
                                    <v-window-item
                                        :key="1"
                                        :value="1"
                                    >
                                        <v-container fluid>
                                        <v-row class="d-flex align-center justify-center">
                                            <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12"> 
                                                <v-card flat color="secondary">
                                                    <v-card-text  v-html="profissional.descricaoTrabalho"></v-card-text>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12"> 
                                                <v-card flat color="secondary">
                                                    <v-card-actions>
                                                        <v-btn 
                                                            size="large"
                                                            elevation="1" 
                                                            block variant="tonal" 
                                                            @click="redicionarWhatsapp()"
                                                            color="green">
                                                            <v-icon class="mr-1" icon="mdi-whatsapp"></v-icon>
                                                            Fale com o profissional no Whatsapp
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                        </v-container>
                                    </v-window-item>
                                    <v-window-item
                                        :key="2"
                                        :value="2"
                                    >
                                        <v-container fluid>
                                            <v-row class="d-flex align-center justify-center">
                                                <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12"> 
                                                    <v-card flat color="secondary">
                                                        <v-card-text  v-html="profissional.descricaoProfissional"></v-card-text>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                            <v-row>
                                            <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12"> 
                                                <v-card flat color="secondary">
                                                    <v-card-actions>
                                                        <v-btn 
                                                            size="large"
                                                            elevation="1" 
                                                            block variant="tonal" 
                                                            @click="redicionarInstagram()"
                                                            color="#a70576">
                                                            <v-icon class="mr-1" icon="mdi-instagram"></v-icon>
                                                            Conheça o Instagram do Profissional
                                                        </v-btn>
                                                    </v-card-actions>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                        </v-container>
                                    </v-window-item>
                                </v-window>
                            </v-card>
                        </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Profissional from '@/types/profissionalType';
import logo from '@/assets/logo.png';
export default defineComponent({ 
    computed: {
        isMobile() {
             return this.$vuetify.display.mobile;
        }
    },
    data() {
        return {
            tab: 1,
            logoImg: logo,
            loading: false,
            profissional: {},
        }
    },
    methods: {
        redicionarWhatsapp(): void {
            window.open(
                'https://wa.me/' + this.profissional.whatsapp,
                '_blank' 
            );
        },
        redicionarInstagram(): void {
            window.open(
                'https://' + this.profissional.instagram,
                '_blank' 
            );
        },
    },  
    async mounted() {
        this.loading = true;

        this.profissional = await this.$store.dispatch('buscarProfissional', 
                this.$route.params.id
        );

        this.loading = false;
    }

})

</script>

<style>

.perfil {
    background-color: #f9f4f5;
}

</style>