export default class PagedRequest {
    GlobalFilter: string;
    PageSize: number;
    PageIndex: number;
    SortField: string;
    CategoriaId: string;

    constructor(globalFilter: string, pageSize: number, pageIndex: number, sortField: string, categoriaId: string) {
        this.GlobalFilter = globalFilter;
        this.PageSize = pageSize;
        this.PageIndex = pageIndex;
        this.SortField = sortField;
        this.CategoriaId = categoriaId;
      }
}   