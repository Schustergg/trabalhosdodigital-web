export default interface ApiResult<T> {
    isSuccess: boolean,
    message: string,
    errors: Array<string>,
    data: T
}