import axios, {AxiosRequestConfig} from 'axios'
import { message } from 'ant-design-vue';
import store from '../store/index'
import { getToken } from './auth';

interface NewAxiosRequestConfig extends AxiosRequestConfig {
    headers?: any
}

const http = axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000
})

http.interceptors.request.use(
    (config: NewAxiosRequestConfig) => {
        if (store.state.user.token !== "") {
            config.headers['Authorization'] = getToken()
        }

        return config
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

http.interceptors.response.use(
    response => {
        const res = response.data

        if (res.code !== 200) {
            message.error(res.message);

            if (res.code === 401) {
                store.dispatch("resetTokenAction")
            }
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        message.error(error.message);
        return Promise.reject(new Error(error.message || 'Error'))
    }
)

export default http
