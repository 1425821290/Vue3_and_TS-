import { getInfoAPI, loginAPI } from '@/api/login'
import { LoginResponse, LoginType, UserInfoType } from '@/type/user'
import { ActionContext } from 'vuex'
import { clearToken, getToken, setToken } from '@/utils/auth'
import { UserStateType } from '@/type/store'

export default {
    state: {
        token: getToken(),
        avatar_url: ""
    },
    mutations: {
        SET_TOKEN(state: UserStateType, payload: string) {
            state.token = payload
        },
        SET_IMAGE(state: UserStateType, payload: string) {
            state.avatar_url = payload
        },
        RESET_TOKEN(state: UserStateType) {
            state.token = ""
        }
    },
    actions: {
        loginAction(state: ActionContext<UserStateType, any>, payload: LoginType) {
            return new Promise(async(resolve, reject) => {
                try {
                    const res = await loginAPI(payload) as LoginResponse
                    if (res.token !== undefined) {
                        state.commit('SET_TOKEN', res.token)
                        setToken(res.token)
                    }
                    if (res.code === 200) {
                        resolve(res)
                    }   
                } catch (error) {
                    reject(error)
                }             
            })    
        },
        getInfoAction(state: ActionContext<UserStateType, any>) {
            return new Promise(async(resolve, reject) => {
                try {
                    const res = await getInfoAPI() as UserInfoType
                    state.commit("SET_IMAGE", res.data.avatar_url)
                    resolve(res)
                } catch (error) {
                    reject(error)
                }
            })
        },
        resetTokenAction(state: ActionContext<UserStateType, any>) {
            return new Promise((resolve, reject) => {
                clearToken()
                state.commit('RESET_TOKEN')
                resolve("")
            })
        }
    }
}