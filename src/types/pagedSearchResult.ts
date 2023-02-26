export interface PagedSearchResult<T> {
    searchResult: T[];
    pageSize: number;
    pageCount: number;
    pageIndex: number;
    totalRecords: number;
}