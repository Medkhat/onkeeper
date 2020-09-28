import * as axios from "axios"

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://admin07.pythonanywhere.com/admin_rest'
})

export const productsAPI = {
    getProducts() {
        return instance.get(`/products/`).then(response => response)
    },
    getCategories() {
        return instance.get(`/category/`).then(response => response)
    }
}

export const authAPI = {
    login(username, password) {
        return instance.post(`/user/login/`, {username, password})
    }
}