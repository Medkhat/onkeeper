import { productsAPI } from "../api/api";
import def_prod from "../img/def_prod.png";

const ADD_CATEGORY_ITEM = "ADD_CATEGORY_ITEM";
const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const GET_CERTAIN_CATEGORY = "GET_CERTAIN_CATEGORY";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const UPDATE_NEW_PRODUCT_TITLE = "UPDATE_NEW_PRODUCT_TITLE";
const UPDATE_NEW_PRODUCT_PRICE = "UPDATE_NEW_PRODUCT_PRICE";
const UPDATE_NEW_PRODUCT_DESC = "UPDATE_NEW_PRODUCT_DESC";
const SET_MODAL_STATE = "SET_MODAL_STATE";

let initialState = {
    categories: [],
    products: [],
    newProductTitle: "",
    newProductPrice: "",
    newProductDesc: "",
    currentCategory: 1,
    isFetching: false,
    modalState: false,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CATEGORY_ITEM: {
            return {
                ...state,
                categories: [...state.categories, action.categories],
            };
        }
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
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
        case ADD_NEW_PRODUCT:
            let newProduct = {
                id: 100,
                name: state.newProductTitle,
                body: state.newProductDesc,
                status: 1,
                unit: 1,
                price: state.newProductPrice,
                image: def_prod,
                category: 1,
            };
            return {
                ...state,
                products: [...state.products, newProduct],
                newProductTitle: "",
                newProductPrice: "",
                newProductDesc: "",
            };
        case UPDATE_NEW_PRODUCT_TITLE:
            return {
                ...state,
                newProductTitle: action.actionKey,
            };
        case UPDATE_NEW_PRODUCT_PRICE:
            return {
                ...state,
                newProductPrice: action.actionKey,
            };
        case UPDATE_NEW_PRODUCT_DESC:
            return {
                ...state,
                newProductDesc: action.actionKey,
            };
        case SET_MODAL_STATE:
            return {
                ...state,
                modalState: action.modalState,
            };
        default:
            return state;
    }
};

export const addCatItem = () => ({
    type: ADD_CATEGORY_ITEM,
});
export const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products: products,
});
export const setCategories = (categories) => ({
    type: SET_CATEGORIES,
    categories: categories,
});
export const getCertainCategory = (currentCategory) => ({
    type: GET_CERTAIN_CATEGORY,
    currentCategory: currentCategory,
});
export const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    isFetching,
});
export const changeNewProductForm = (type, actionKey) => ({ type, actionKey });
export const addNewProduct = () => ({ type: ADD_NEW_PRODUCT });
export const setModalState = (modalState) => ({
    type: SET_MODAL_STATE,
    modalState,
});

const getMenuData = (requestType, action) => {
    return async (dispatch) => {
        dispatch(toggleLoader(true));
        let response = await requestType();
        dispatch(toggleLoader(false));
        dispatch(action(response.data));
    };
};

export const getProducts = () => {
    return getMenuData(productsAPI.getProducts, setProducts);
};

export const getCategories = () => {
    return getMenuData(productsAPI.getCategories, setCategories);
};

export default menuReducer;
