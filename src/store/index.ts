import User from '../types/userType'
import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { UserStore } from './userStore'
import { CategoriaStore } from './categoriaStore'
import { ProfissionalStore } from './profissionalStore'
import { FileStore } from './fileStore'

interface storeTypes extends User {}
export const key: InjectionKey<Store<storeTypes>> = Symbol()

export const store = createStore<storeTypes>({
  getters: {
    getErrorAlert(state: any): Boolean {
      return state.errorAlert
    },
    getErrorMessage(state: any): Boolean {
      return state.errorMessage
    },
    getCategoriaId(state:any): string {
      return state.categoriaSelecionada;
    }
  },
  state: {
    errorAlert: false,
    errorMessage: "",
    successMessage: "",
    successAlert: false,
    categoriaSelecionada: "",
  },
  mutations: {
    setErrorAlert(state: Boolean, data: Boolean): void {
      state.errorAlert = data
    },
    setErrorMessage(state: string, data: string): void {
      state.errorMessage = data
    },
    setSuccessAlert(state: Boolean, data: Boolean): void {
      state.successAlert = data
    },
    setSuccessMessage(state: string, data: string): void {
      state.successMessage = data
    },
    setCategoriaSelecionada(state: string, data: string): void {
      state.categoriaSelecionada = data
    },
  },
  modules: {
    UserStore,
    CategoriaStore,
    ProfissionalStore,
    FileStore
  },
})
