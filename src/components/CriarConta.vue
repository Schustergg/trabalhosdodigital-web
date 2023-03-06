<template>
    <v-toolbar absolute :elevation="0" color="terciary" fixed class="mb-0 pb-0">
        <v-toolbar-title @click="$router.push('/')">
            <v-img :src="logoImg" width="300px" class="mt-4"/>
        </v-toolbar-title>
    </v-toolbar>
    <v-container class="fill-height mx-0 my-0 px-0 py-0" fluid>
        <v-row class="d-flex fill-height mx-0 my-0 px-0 py-0">
            <v-col class="d-flex align-center justify-center fill-height login-background" cols="12" xs="12" sm="12" md="6" lg="12" xl="12">
                <v-card :width="'40%'" class="mx-auto" title="Criar conta" color="secondary">
                    <v-divider></v-divider>
                    <v-window v-model="step">
                        <v-window-item :value="1">
                            <checkout/>
                        </v-window-item>
                        <v-window-item :value="1">
                            <v-form ref="formStepOne" class="px-2 py-2">
                                <v-text-field
                                    label="Email"
                                    type="text"
                                    variant="outlined"
                                    class="my-2"
                                    :rules="[rules.required, rules.email]"
                                    v-model="dadosUsuario.email"></v-text-field>
                                <v-text-field
                                    class="my-2"
                                    label="WhatsApp"
                                    variant="outlined"
                                    v-mask="'(##) #####-####'"
                                    :rules="[rules.required]"
                                    v-model="dadosUsuario.whatsapp"></v-text-field>
                                <v-text-field
                                    class="my-2"
                                    label="Instagram"
                                    type="text"
                                    variant="outlined"
                                    :rules="[rules.required]"
                                    v-model="dadosUsuario.instagram"></v-text-field>    
                                <v-file-input
                                    class="my-4 ml-2"
                                    accept="image/png, image/jpeg"
                                    label="Foto do Perfil"
                                    prepend-icon="mdi-camera"
                                    variant="outlined"
                                    :rules="[rules.fileRequired]"
                                    @update:modelValue="criarArquivo($event)"
                                    ></v-file-input>
                                <v-autocomplete
                                    class="my-4"
                                    label="Categoria"
                                    item-title="nome"
                                    item-value="id"
                                    variant="outlined"
                                    :rules="[rules.required]"
                                    v-model="dadosUsuario.categoriaId"
                                    :items="categorias"></v-autocomplete>
                            </v-form>
                        </v-window-item>
                        <v-window-item :value="2">
                            <v-card flat class="pb-4 px-4" min-height="500px" color="secondary"> 
                                <v-form ref="formStepTwo" class="px-2 py-2">
                                    <v-card-text class="px-0">
                                        <span class="form-text mt-4">
                                            O título e apresentação do seu perfil, é a primeira coisa que o cliente vai ler na listagem de profissionais.
                                            Aproveite para criar um texto chamativo que se destaque entre os outros. 
                                        </span>
                                    </v-card-text>
                                    <v-text-field
                                        variant="outlined"
                                        label="Título do seu Perfil"
                                        type="text"
                                        :rules="[rules.required,
                                            v => v.length <= 50 || 'Campo deve ter menos que 50 caracteres.']"
                                        :counter="50"
                                        class="mb-3"
                                        v-model="dadosUsuario.titulo"></v-text-field>
                                    <v-textarea
                                        variant="outlined"
                                        label="Apresentação do seu perfil"
                                        :rules="[rules.required,
                                            v => v.length <= 250 || 'Campo deve ter menos que 250 caracteres.']"
                                        :counter="250"
                                        v-model="dadosUsuario.apresentacao"></v-textarea>
                                </v-form>
                            </v-card>
                        </v-window-item>
                        <v-window-item :value="3">
                            <v-card flat class="pb-4 px-4" min-height="500px" color="secondary"> 
                                <v-card-title class="pl-0">Descrição do Trabalho</v-card-title>
                                <v-card-text class="px-0">
                                    <span class="form-text mt-4">
                                        Esse é o texto principal do seu perfil.
                                        Aproveite essa região para fazer seu pitch de vendas, falar melhor sobre como você trabalha, valores, pacotes e promoções. 
                                    </span>
                                </v-card-text>
                                <QuillEditor v-model:content="dadosUsuario.descricaoTrabalho" style="height:400px;" theme="snow" contentType="html" />
                            </v-card>
                        </v-window-item>
                        <v-window-item :value="4">
                            <v-card flat class="pb-4 px-4" min-height="500px" color="secondary"> 
                                <v-card-title class="pl-0">Descrição do Profissional</v-card-title>
                                <v-card-text class="px-0">
                                    <span class="form-text mt-4">
                                        Aproveite essa região para falar sobre você como profissional, suas experiências, currículo, portifólio e valores.  
                                    </span>
                                </v-card-text>
                                <QuillEditor v-model:content="dadosUsuario.descricaoProfissional" style="height:400px;" theme="snow" contentType="html" />
                            </v-card>
                        </v-window-item>
                        <v-window-item :value="5">
                            <v-card flat class="py-4 px-4" min-height="200px" color="secondary"> 
                            <v-form ref="formPassword" class="px-2 py-2">
                                <v-text-field
                                    variant="outlined"
                                    label="Senha"
                                    type="password"
                                    :rules="[rules.required]"
                                    v-model="dadosUsuario.password"></v-text-field>
                                <v-text-field
                                    class="mt-4"
                                    variant="outlined"
                                    label="Confirmar Senha"
                                    type="password"
                                    :rules="[rules.required]"
                                    v-model="dadosUsuario.confirmPassword"></v-text-field>    
                                </v-form>
                            </v-card>
                        </v-window-item>
                        <v-window-item :value="6">
                            <div class="pa-4 text-center">
                            <h3 class="form-text mb-2">
                                Conta criada com sucesso!
                            </h3>
                            <span class="form-text">Seu perfil já está disponível para milhares de contratantes.</span>
                            </div>
                        </v-window-item>
                        </v-window>
                    <v-divider></v-divider>
                    <v-card-actions>
                    <v-btn
                        :disabled="step === 1"
                        text
                        @click="step--"
                    >
                        Voltar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        v-if="!(step === 5) && !(step === 6)"
                        color="primary"
                        depressed
                        @click="next()"
                    >
                        Próximo
                    </v-btn>
                    <v-btn
                        v-if="(step === 5)"
                        color="primary"
                        depressed
                        @click="criarConta()"
                    >
                        Criar Conta
                    </v-btn>
                    <v-btn
                        v-if="step === 6"
                        color="primary"
                        depressed
                        @click="$router.push('/login')"
                    >
                        Entre na plataforma
                    </v-btn>
                    </v-card-actions>
                </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>


<script lang="ts" setup>
import Checkout from "./Checkout.vue"
</script>

<script lang="ts">

import { analyzeMetafile } from "esbuild";
import { defineComponent, onMounted } from "vue";
import { mapGetters } from 'vuex';
import logo from '@/assets/logo.png';

export default defineComponent({
data() {
    return {
        logoImg: logo,
        categorias: [],
        step: 1,
        fotoPrincipal: [],
        dadosUsuario: {
            email: "",
            password: "",
            titulo: "",
            apresentacao: "",
            confirmPassword: "",
            descricaoTrabalho: "",
            descricaoProfissional: "",
            instagram: "",
            whatsapp: "",
            instagramLink: "",
            fotoPrincipal: "",
            categoriaId: "" 
        },
        rulesFile: [
            (value: { size: number; }): true | "Avatar size should be less than 2 MB!" => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
        ],
        rules: {
          fileRequired: (value : File[]) => { 
            var file =  value[0];
            return !!file || 'Campo obrigatório'
          },
          required: (value: any) => !!value || 'Campo Obrigatório.',
          email: (value: string) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Email inválido.'
          },
          length: (value: string, length: number) => {
            return value.length <= length || 'Campo deve ter menos que '+ length +' caracteres.'
          }
        }
    }
},
computed: {
    ...mapGetters(["getUser"])
},
methods: {
    async next() {
        if (this.step === 1) {
            const { valid } = await this.$refs.formStepOne.validate();
            if (valid) this.step = 2;
            return;
        } 

        if (this.step === 2) {
            const { valid } = await this.$refs.formStepTwo.validate();
            if (valid) this.step = 3;
            return;
        }

        if (this.step === 3) {
            if (this.dadosUsuario.descricaoTrabalho != "") this.step = 4;
            return;
        }

        if (this.step === 4) {
            if (this.dadosUsuario.descricaoProfissional != "") this.step = 5;
            return;
        }

        if (this.step === 5) {
            const { valid } = await this.$refs.formPassword.validate();
            if (valid) this.step = 6;
            return;
        }
        
    },
    async criarConta() {
        var response = await this.$store.dispatch('createUser', this.dadosUsuario);
        if (response.isSuccess) this.step++;
    },
    async criarArquivo(files : File[]): Promise<void> {
        var file =  files[0];
        
        const formData = new FormData();
        formData.append('File', file);

        var response = await this.$store.dispatch('criarArquivo', formData);

        this.dadosUsuario.fotoPrincipal = response;
    }
},
async mounted() {
    this.categorias = await this.$store.dispatch('buscarCategorias');
},
})
</script>

<style>

.login-background {
background-color: #ede2f2;
}

.form-text {
    font-size: 18px;
    font-weight: 400;
}

.ql-container{
  min-height: inherit;
}

</style>