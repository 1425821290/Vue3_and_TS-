export interface UserStateType {
    token: string,
    avatar_url: string
}

export interface StoreStateType {
    user: UserStateType
}