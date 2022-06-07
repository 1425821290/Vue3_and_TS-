export function setToken( token: string ) {
    return localStorage.setItem('token', JSON.stringify(token))
}

export function getToken() {
    return JSON.parse(localStorage.getItem('token') || JSON.stringify(""))
}

export function clearToken() {
    return localStorage.clear()
}