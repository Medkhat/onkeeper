import { productsAPI } from "../api/api";
import TOGGLE_BTN_PRELOADER from "./auth-reducer";
import { setCategoryModalState, setProductModalState } from "./modal-reducer";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const GET_CERTAIN_CATEGORY = "GET_CERTAIN_CATEGORY";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const EDIT_CATEGORY = "EDIT_CATEGORY";
const EDIT_PRODUCT = "EDIT_PRODUCT";

let initialState = {
    categories: [],
    products: [],
    newProductTitle: "",
    newProductPrice: "",
    newProductDesc: "",
    currentCategory: 1,
    isFetching: false,
    loaderOnModalBtn: false,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.isNewProduct
                    ? [...state.products, action.products]
                    : action.products,
            };
        case EDIT_PRODUCT:
            return {
                ...state,
                products: state.products.map((item) => {
                    if (item.id === action.productId) {
                        item = { id: action.productId, ...action.payload };
                    }
                    return item;
                }),
            };
        case DELETE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(
                    (item) => item.id !== action.productId
                ),
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.isNewCategory
                    ? [...state.categories, action.categories]
                    : action.categories,
            };
        case EDIT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map((item) => {
                    if (item.id === action.categoryId) {
                        item.name = action.name;
                        item.image = action.image;
                    }
                    return item;
                }),
            };
        case DELETE_CATEGORY:
            return {
                ...state,
                categories: state.categories.filter(
                    (item) => item.id !== action.categoryId
                ),
            };
        case GET_CERTAIN_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };
        case TOGGLE_LOADER:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case TOGGLE_BTN_PRELOADER:
            return {
                ...state,
                loaderOnModalBtn: action.loaderOnModalBtn,
            };
        default:
            return state;
    }
};
const setProducts = (products, isNewProduct) => ({
    type: SET_PRODUCTS,
    products,
    isNewProduct,
});
const setCategories = (categories, isNewCategory) => ({
    type: SET_CATEGORIES,
    categories,
    isNewCategory,
});
const editProductFromState = (
    productId,
    name,
    body,
    status,
    unit,
    price,
    image,
    category
) => ({
    type: EDIT_PRODUCT,
    productId,
    payload: { name, body, status, unit, price, image, category },
});
const deleteProductFromState = (productId) => ({
    type: DELETE_PRODUCT,
    productId,
});
const editCategoryFromState = (categoryId, name, image) => ({
    type: EDIT_CATEGORY,
    categoryId,
    name,
    image,
});
const deleteCategoryFromState = (categoryId) => ({
    type: DELETE_CATEGORY,
    categoryId,
});
export const getCertainCategory = (currentCategory) => ({
    type: GET_CERTAIN_CATEGORY,
    currentCategory: currentCategory,
});
const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    isFetching,
});
const toggleBtnPreloader = (loaderOnModalBtn) => ({
    type: TOGGLE_BTN_PRELOADER,
    loaderOnModalBtn,
});
const getMenuData = (requestType, action) => {
    return async (dispatch) => {
        try {
            dispatch(toggleLoader(true));
            let response = await requestType();
            dispatch(toggleLoader(false));
            dispatch(action(response.data, false));
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    };
};

export const getProducts = () => {
    return getMenuData(productsAPI.getProducts, setProducts);
};

export const getCategories = () => {
    return getMenuData(productsAPI.getCategories, setCategories);
};

export const addProduct = (
    name,
    body,
    status,
    unit,
    price,
    image,
    categoryId
) => async (dispatch) => {
    try {
        dispatch(toggleBtnPreloader(true));
        let response = await productsAPI.addProduct(
            name,
            body,
            status,
            unit,
            price,
            image,
            categoryId
        );
        dispatch(toggleBtnPreloader(false));
        dispatch(setProductModalState(false));
        dispatch(setProducts(response.data, true));
    } catch (error) {
        console.error(error);
    }
};
export const editProduct = (
    productId,
    name,
    body,
    status,
    unit,
    price,
    image,
    categoryId
) => async (dispatch) => {
    try {
        dispatch(toggleBtnPreloader(true));
        let response = await productsAPI.editProduct(
            productId,
            name,
            body,
            status,
            unit,
            price,
            image,
            categoryId
        );
        dispatch(toggleBtnPreloader(false));
        dispatch(setProductModalState(false));
        if (response.status >= 200 && response.status <= 400)
            dispatch(
                editProductFromState(
                    productId,
                    name,
                    body,
                    status,
                    unit,
                    price,
                    image,
                    categoryId
                )
            );
    } catch (error) {
        console.error(error);
    }
};

export const addCategory = (name, image, restoranId) => {
    return async (dispatch) => {
        try {
            dispatch(toggleBtnPreloader(true));
            let response = await productsAPI.addCategory(
                name,
                image,
                restoranId
            );
            dispatch(toggleBtnPreloader(false));
            dispatch(setCategoryModalState(false));
            dispatch(setCategories(response.data, true));
        } catch (err) {
            console.error(err);
        }
    };
};
export const editCategory = (categoryId, name, image, restoranId) => {
    return async (dispatch) => {
        try {
            dispatch(toggleBtnPreloader(true));
            let response = await productsAPI.editCategory(
                categoryId,
                name,
                image,
                restoranId
            );
            dispatch(toggleBtnPreloader(false));
            dispatch(setCategoryModalState(false));
            if (response.status >= 200 && response.status <= 400)
                dispatch(editCategoryFromState(categoryId, name, image));
        } catch (err) {
            console.error(err);
        }
    };
};

const deleteFlow = async (apiMethod, fromState, id, dispatch) => {
    try {
        let response = await apiMethod(id);
        if (response.status >= 200 && response.status <= 400)
            dispatch(fromState(id));
    } catch (err) {
        console.error(err);
    }
};

export const deleteProduct = (productId) => async (dispatch) => {
    deleteFlow(
        productsAPI.deleteProduct.bind(productsAPI),
        deleteProductFromState,
        productId,
        dispatch
    );
};
export const deleteCategory = (categoryId) => async (dispatch) => {
    deleteFlow(
        productsAPI.deleteCategory.bind(productsAPI),
        deleteCategoryFromState,
        categoryId,
        dispatch
    );
};

export default menuReducer;
