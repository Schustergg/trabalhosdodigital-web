<template>
    <v-container class="fill-height mx-0 my-0 px-0 py-0 resultados" fluid>
        <v-toolbar :elevation="0" color="secondary" fixed class="mb-8 pb-8">
            <v-row class="d-flex align-center justify-start">
                <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="3" class="ml-4">
                    <v-toolbar-title @click="$router.push('/')">
                        <v-img :src="logoImg" width="300px" class="mt-4"/>
                    </v-toolbar-title>
                </v-col>
                <v-col cols="12" xs="12" sm="12" md="12" lg="8" xl="8" class="mt-8 pt-8">
                    <v-autocomplete
                        class="mt-4"
                        placeholder="Pesquise profissionais por categoria"
                        item-title="nome"
                        item-value="id"
                        variant="outlined"
                        v-model="categoriaId"
                        :items="categorias"
                        @update:modelValue="buscarProfissionais()">
                        <template v-slot:label>
                        <span class="label-autocomplete">
                            Pesquise profissionais por categoria
                        </span>
                        </template>
                    </v-autocomplete>
                </v-col>
            </v-row>
        </v-toolbar>
        <v-row class="d-flex justify-center mx-0 my-0 px-0 py-0">
            <v-col class="d-flex align-center justify-center" v-if="loading" cols="12" xs="12" sm="12" md="12" lg="8" xl="8">
                <v-progress-circular :size="100" indeterminate>
                </v-progress-circular>
            </v-col>
            <v-col v-else cols="12" xs="12" sm="12" md="12" lg="10" xl="10" class="mx-0 my-0 px-0 py-0"> 
                <v-row class="d-flex align-center justify-start">
                    <v-col cols="12" xs="12" sm="12" md="12" lg="3" xl="2" v-for="(item, index) in profissionais" :key="item.id">
                        <v-hover v-slot="{ isHovering, props }">
                                <v-card 
                                    flat
                                    class="my-3" 
                                    v-bind="props"
                                    variant="outlined"
                                    :elevation="isHovering ? 10 : 0">
                                        <v-img cover :src="item.fotoPrincipal" height="200px"></v-img>
                                            <v-card-title v-text="item.titulo"></v-card-title>
                                            <v-card-text class="py-0" v-text="item.apresentacao"></v-card-text>
                                            <v-card-actions>
                                                <v-row class="d-flex align-center justify-center">
                                                    <v-col class="d-flex align-center justify-center" cols="12" xs="12" sm="12" md="12" lg="5" xl="6">
                                                        <v-btn
                                                            @click="$router.push('/perfil/'+ item.id);"
                                                            variant="outlined">
                                                            <v-icon class="mr-1" icon="mdi-account-circle-outline"></v-icon>
                                                            Perfil
                                                        </v-btn>
                                                    </v-col>    
                                                </v-row>
                                            </v-card-actions>
                                    </v-card>
                        </v-hover>
                    </v-col>
                </v-row>
                <div class="text-center">
                    <v-pagination
                    v-model="page"
                    :length="totalItems"
                    @update:modelValue="buscarProfissionais()"
                    circle
                    ></v-pagination>
                </div>
            </v-col>
    </v-row>
</v-container>
<v-footer class="footer" color="secondary">
    <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Trabalhos do Digital</strong>
    </v-col>
</v-footer>
</template>

<script lang="ts">

import PagedRequest from "@/types/PagedRequest";
import { defineComponent } from "vue";
import { mapGetters } from 'vuex';
import logo from '@/assets/logo.png';
export default defineComponent({ 
    data() {
        return {
            logoImg: logo,
            page: 1,
            totalItems: 0,
            loading: false,
            profissionais: [],
            categoriaId: "",
            categorias: [],
        }
    },
    methods: {
        
        async carregarProfissionais (){
            await this.$store.commit('setCategoriaSelecionada', this.categoriaId);
            this.$router.push("/resultados");
        },
        async buscarProfissionais() {
            this.loading = true;

            var pagedRequest = new PagedRequest("", 10, this.page, "", "");

            var response = await this.$store.dispatch('buscarProfissionais', {
                ...pagedRequest
            });

            this.profissionais = response.searchResult;
            this.totalItems = (response.totalRecords + 10 - 1) / 10; 

            if (this.profissionais != null) this.loading = false;
        },  
    },
    async mounted() {
       await this.buscarProfissionais();
       this.categorias = await this.$store.dispatch('buscarCategorias');
    },
})

</script>

<style>
    .resultados {
        background-color: #f9f4f5;
    }
</style>