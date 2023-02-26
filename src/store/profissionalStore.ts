import { ActionContext } from 'vuex'
import User from '@/types/userType'
import http from "@/http-common";
import ApiResult from '@/types/apiResult';
import Profissional from '@/types/profissionalType';
import PagedRequest from '@/types/PagedRequest';
import { PagedSearchResult } from '@/types/pagedSearchResult';
import { AnyARecord } from 'dns';
import { AxiosResponse } from 'axios';
export const ProfissionalStore = {
  state: {
  },
  getters: {
  },
  actions: { 
    async buscarProfissionais(context: ActionContext<ApiResult<PagedSearchResult<Profissional>>, ApiResult<PagedSearchResult<Profissional>>>, data: PagedRequest): Promise<PagedSearchResult<Profissional>> {

        data.CategoriaId = context.getters.getCategoriaId;
          
        var response = await http.get<any, AxiosResponse<ApiResult<PagedSearchResult<Profissional>>, any>>("/profissionais/", { params: data });

        var result = response.data.data;

        return result;
        
    },  
    async buscarProfissional(context: ActionContext<ApiResult<Profissional>, ApiResult<Profissional>>, id: string): Promise<Profissional> {

      var response = await http.get<any, AxiosResponse<ApiResult<Profissional>, any>>("/profissionais/" + id,);

      var result = response.data.data;
      return result;
      
  },  
  },
  mutations: { 
  }
}