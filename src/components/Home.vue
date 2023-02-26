<template>
    <v-container class="fill-height mx-0 my-0 py-0 px-0" fluid>
        <v-toolbar :elevation="0" color="secondary" fixed>
            <v-toolbar-title>
                <v-img :src="logoImg" width="300px" class="mt-4" @click="$router.push('/')"/>
            </v-toolbar-title>
            
            <v-spacer v-if="!isMobile"></v-spacer>
            <v-btn
                :size="isMobile ? 'x-small' : 'default'"
                class="mr-2"
                variant="outlined"
                @click="$router.push('/login')"
            > Entrar </v-btn>
            <v-btn
                :size="isMobile ? 'x-small' : 'default'"
                variant="tonal"
                @click="$router.push('/login')"
                color="primary"
            > Criar conta </v-btn>
        </v-toolbar>
        <v-container fluid class="main-container"> 
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex align-center justify-start mt-8 pt-8">
                            <div class="principal-title">Uma nova era de <span class="primary">trabalho</span> começou. </div>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12" class="d-flex align-center justify-start">
                            <div class="principal-subtitle">Bem vindo a maior plataforma brasileira de trabalhos <span class="primary">digitais.</span> </div>
                        </v-col>
                    </v-row>
                    <v-row class="py-8">    
                        <v-col class="d-flex align-center justify-start" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                            <v-autocomplete
                                placeholder="Pesquise profissionais por categoria"
                                item-title="nome"
                                item-value="id"
                                variant="outlined"
                                v-model="categoriaId"
                                :items="categorias"
                                @update:modelValue="carregarProfissionais()">
                                <template v-slot:label>
                                <span class="label-autocomplete">
                                    Pesquise profissionais por categoria
                                </span>

                                </template>
                            </v-autocomplete>
                        </v-col>
                    </v-row>
                </v-col>
                <v-col class="d-flex align-center justify-start" cols="12" xs="12" sm="12" md="12" lg="6" xl="6">
                    <v-img :src="homeImg" height="400px"> </v-img>
                </v-col>
            </v-row>

        </v-container>
        <v-container fluid class="second-container">
            <v-row class="d-flex align-center justify-center py-4 mb-2 px-2">
                <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <div class="about-title">Remoto. Flexível. Digital. </div>
                </v-col>
            </v-row>
            <v-row class="d-flex align-center justify-center mb-8">    
                <v-col class="d-flex align-center justify-center mx-4" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card 
                        flat
                        color="secondary"
                        class="fill-width rounded-lg">
                        <template v-slot:title>
                            <v-card-title class="card-title">Talento qualificado </v-card-title>
                        </template>
                        <v-card-text class="mx-4 my-4"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas faucibus magna ultricies fermentum posuere.
                            Pellentesque commodo nisi ac lacus consequat, in dignissim mauris porttitor.
                            Maecenas egestas interdum molestie.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="d-flex align-center justify-center mx-4" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card 
                        flat
                        color="secondary"
                        class="fill-width rounded-lg">
                        <template v-slot:title>
                            <v-card-title class="card-title">Variedade de habilidades </v-card-title>
                        </template>
                        <v-card-text class="mx-4 my-4"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas faucibus magna ultricies fermentum posuere.
                            Pellentesque commodo nisi ac lacus consequat, in dignissim mauris porttitor.
                            Maecenas egestas interdum molestie.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="d-flex align-center justify-center">    
                <v-col class="d-flex align-center justify-center mx-4" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card 
                        flat
                        color="secondary"
                        class="fill-width rounded-lg">
                        <template v-slot:title>
                            <v-card-title class="card-title">Escalabilidade e agilidade </v-card-title>
                        </template>
                        <v-card-text class="mx-4 my-4">  
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas faucibus magna ultricies fermentum posuere.
                            Pellentesque commodo nisi ac lacus consequat, in dignissim mauris porttitor.
                            Maecenas egestas interdum molestie.
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col class="d-flex align-center justify-center mx-4" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                    <v-card 
                        flat
                        color="secondary"
                        class="fill-width rounded-lg">
                        <template v-slot:title>
                            <v-card-title class="card-title">Remoto e Flexível </v-card-title>
                        </template>
                        <v-card-text class="mx-4 my-4"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Maecenas faucibus magna ultricies fermentum posuere.
                            Pellentesque commodo nisi ac lacus consequat, in dignissim mauris porttitor.
                            Maecenas egestas interdum molestie.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container fluid class="third-container">
            <v-row class="d-flex align-center justify-center">
                <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="4" xl="4">
                    <v-img :src="homeImg2" height="400px"> </v-img>
                </v-col>
                <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="4" xl="4">
                    <v-card flat color="secondary">
                        <v-card-text class="text-third-section">
                            Desenvolvedores, Editores de Vídeos, Editores de foto, Marketeiros, Coprodutores, Redatores publicitários, 
                            Social Media, Gestores de Tráfego, Tradutores, Secretárias virtuais <span class="primary">e muito mais!</span>
                        </v-card-text>
                        <v-card-text class="text-third-section">
                            Todas as <span class="primary">profissões do digital</span> em um só lugar.
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-footer class="footer" color="secondary">
            <v-col class="text-center mt-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>Trabalhos do Digital</strong>
            </v-col>
        </v-footer>  
    </v-container>
</template>

<script lang="ts">

import { defineComponent, onMounted } from "vue";
import { mapGetters } from 'vuex';
import homeImg from '@/assets/home.svg';
import homeImg2 from '@/assets/home1.svg';
import logo from '@/assets/logo.png';
export default defineComponent({ 
    computed: {
        isMobile() {
        return this.$vuetify.display.mobile;
        }
    },
    data() {
        return {
            homeImg: homeImg,
            homeImg2: homeImg2,
            logoImg: logo,
            show: false,
            categoriaId: "",
            categorias: [],
            profissional: "",
            profissionais: [ "Copywriters", "Desenvolvedores", "Gestores de Tráfego", "Social Media", "Suportes", "Secretárias virtuais" ]
        }
    },
    methods: {
        async carregarProfissionais (){
            await this.$store.commit('setCategoriaSelecionada', this.categoriaId);
            this.$router.push("/resultados");
        },
    },
    created () {
        setInterval(() => {
            this.show = false;
            const currentIndex = this.profissionais.indexOf(this.profissional);
            const nextIndex = (currentIndex + 1) % this.profissionais.length;
            this.profissional = this.profissionais[nextIndex];
            this.show = true;
        }, 3000)
    },
    async mounted() {
        this.categorias = await this.$store.dispatch('buscarCategorias');
    },
})
</script>



<style>

* {
    font-family: "Aileron";
  }

.profissionais {
    animation: example 3s infinite;

}

.label-autocomplete {
    font-size: 18px;
}

.primary {
    color: #8b5fed;
}

.principal-title {
    font-size: 42px;
}
.principal-subtitle {
    font-size: 32px;
}

.about-title {
    font-weight: 400;
    font-size: 68px;
}

.v-card-text.text-third-section {
    font-size: 20px;
    text-align: justify;
    line-height: 2.25rem !important;
}

.v-card-title .card-title {
    margin-top: 10px;
    font-size: 30px;
    text-align: center;
}


.main-container {
    background-color: #f9f4f5;
}

.second-container {
    background-color: #ede2f2;
    padding-bottom: 80px !important;;
}

.third-container {
    background-color: #f9f4f5;
}

.footer {
    background-color: #f9f4f5;
}

@media only screen and (min-width: 889px) {
    .main-container {
        padding: 10px 80px 100px 100px !important;
        background-color: #f9f4f5;
    }

   
}

@media only screen and (min-width: 1590px) {
    .main-container {
        padding: 20px 150px 150px 150px !important;
        background-color: #f9f4f5;
    }

}

</style>


