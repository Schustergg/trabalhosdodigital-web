import { ActionContext } from 'vuex'
import User from '@/types/userType'
import http from "@/http-common";
import ApiResult from '@/types/apiResult';
export const UserStore = {
  state: {
    user: {},
    userIsLogged: false
  },
  getters: {
    getUser(state: any): User {
      return state.user
    },
    getUserIsLogged(state: any): User {
      return state.userIsLogged
    },
  },
  actions: {
    async login(context: ActionContext<ApiResult<User>, ApiResult<User>>, data: User): Promise<ApiResult<User>>  {

      var response = await http.post("/auth/entrar", data);
      var result = response.data;

      console.log(result);

      if (!result.isSuccess) { 
        console.log(result.errors)
        context.commit('setErrorAlert', true);
        result.errors.forEach((error: string) => {
          context.commit('setErrorMessage', error);
        });
      }
      else {
        context.commit('setUserLogged');
        localStorage.setItem('authToken', result.data.accessToken);
        context.commit('setSuccessAlert', true);
        context.commit('setSuccessMessage', "Logado com sucesso");
      }

      return result;
    },  
    async createUser(context: ActionContext<User, User>, data: User): Promise<User> {
        var response = await http.post("/auth/nova-conta", data);
        var result = response.data;
        
        if (!result.isSuccess) { 
          context.commit('setErrorAlert', true);
          result.errors.forEach((error: string) => {
            context.commit('setErrorMessage', error);
          });
        }
        else {
          context.commit('setUser', response);
          context.commit('setSuccessAlert', true);
          context.commit('setSuccessMessage', "Logado com sucesso");
        }
        
        return result;
    },
  },
  mutations: {
    setUser(state: any, data: any): void {
      state.user = data
    },
    setUserLogged(state: any): void {
      state.userIsLogged = true
    }
  },
}
