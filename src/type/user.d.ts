export interface LoginType {
    username: string
    password: string
}

export interface HttpResponse {
    code: number
    message: string
} 

export interface LoginResponse extends HttpResponse {
    token?: string
}

export interface UserInfoType extends HttpResponse {
    data: {
        id: number
        avatar_url: string
    }
}