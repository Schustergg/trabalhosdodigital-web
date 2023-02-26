import { ActionContext } from 'vuex'
import User from '@/types/userType'
import http from "@/http-common";
import ApiResult from '@/types/apiResult';
export const FileStore = {
  state: {
    user: false,
  },
  getters: {
  },
  actions: { 
    async criarArquivo(context: ActionContext<ApiResult<string>, ApiResult<string>>, data: FormData): Promise<ApiResult<string>>  {
        console.log(data);
        var response = await http.post("/file", data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        
        var result = response.data.data;
        return result;
    },  
  },
  mutations: { 
  }
}