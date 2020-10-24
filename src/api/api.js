import * as axios from "axios";

// const token = localStorage.getItem("token");

// const headers = {
//     Authorization: `Token ${token}`,
// };

const instance = axios.create({
    withCredentials: true,
    baseURL: "http://admin07.pythonanywhere.com",
    // headers: JSON.stringify(headers),
});

export const productsAPI = {
    getProducts() {
        return instance
            .get(`/admin_rest/products/`)
            .then((response) => response);
    },
    getCategories() {
        return instance
            .get(`/admin_rest/restoran/1/category/`)
            .then((response) => response);
    },
    addCategory(name, image, restoran = 1) {
        return instance.post(`/admin_rest/category/`, {
            name,
            image,
            restoran,
        });
    },
    editCategory(categoryId, name, image, restoran = 1) {
        return instance.put(`/admin_rest/category/${categoryId}`, {
            name,
            image,
            restoran,
        });
    },
    deleteCategory(categoryId) {
        return instance.delete(`/admin_rest/category/${categoryId}/`);
    },
};

export const authAPI = {
    authMe() {
        return instance.post(`/user/login`, {
            username: "User1",
            password: "users",
        });
    },
    login(username, password) {
        return instance.post(`/user/login`, { username, password });
    },
};
