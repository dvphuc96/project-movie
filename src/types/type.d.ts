// declare file (type.d.ts)

declare type ApiResponse<T> = {
    statusCode: number;
    message: string
    content: T  // generic type
}