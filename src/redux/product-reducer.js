import { productsAPI } from "../api/api";
import {
    deleteFlow,
    getMenuData,
    toggleBtnPreloader,
    toggleLoader,
    TOGGLE_BTN_PRELOADER,
    TOGGLE_PRODUCT_LOADER,
} from "./helper";
import { setProductModalState } from "./modal-reducer";

const SET_PRODUCTS = "SET_PRODUCTS";
const DELETE_PRODUCT = "DELETE_PRODUCT";
const EDIT_PRODUCT = "EDIT_PRODUCT";
const SET_CURRENT_CATEGORY = "SET_CURRENT_CATEGORY";

let initialState = {
    products: [],
    currentCategory: null,
    isFetching: false,
    loaderOnModalBtn: false,
};

const productReducer = (state = initialState, action) => {
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
        case SET_CURRENT_CATEGORY:
            return {
                ...state,
                currentCategory: action.currentCategory,
            };
        case TOGGLE_PRODUCT_LOADER:
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
export const setProducts = (products, isNewProduct) => ({
    type: SET_PRODUCTS,
    products,
    isNewProduct,
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
export const setCurrentCategory = (currentCategory) => ({
    type: SET_CURRENT_CATEGORY,
    currentCategory,
});

export const getProducts = () => {
    return getMenuData(productsAPI.getProducts, setProducts, "product");
};

export const getOneCategoryProducts = (categoryId) => async (dispatch) => {
    try {
        dispatch(toggleLoader(true));
        let response = await productsAPI.getOneCategoryProducts(categoryId);
        dispatch(toggleLoader(false));
        dispatch(setProducts(response.data, false));
    } catch (error) {
        console.error(error);
    }
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

export const deleteProduct = (productId) => async (dispatch) => {
    deleteFlow(
        productsAPI.deleteProduct.bind(productsAPI),
        deleteProductFromState,
        productId,
        dispatch
    );
};

export default productReducer;
