import { ActionContext } from 'vuex'
import User from '@/types/userType'
import http from "@/http-common";
import ApiResult from '@/types/apiResult';
import Categoria from '@/types/categoriaType';
export const CategoriaStore = {
  state: {
    user: false,
  },
  getters: {
  },
  actions: { 
    async buscarCategorias(context: ActionContext<ApiResult<Categoria>, ApiResult<Categoria>>, data: User): Promise<ApiResult<Array<Categoria>>>  {

        var response = await http.get("/categorias");
        var result = response.data.data;
        return result;
    },  
  },
  mutations: { 
  }
}