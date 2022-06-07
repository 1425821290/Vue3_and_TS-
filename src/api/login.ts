import { LoginType } from "@/type/user";
import http from "@/utils/http";

export const loginAPI = (loginParams: LoginType): unknown => http({
    url: '/api/login',
    method: 'post',
    data: loginParams
})

export const getInfoAPI = (): unknown => http({
    url: '/getInfo',
    method: 'get',
})

export const loginOutAPI = (): unknown => http({
    url: '/getInfo',
    method: 'get',
})