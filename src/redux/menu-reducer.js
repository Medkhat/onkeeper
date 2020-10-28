import { productsAPI } from "../api/api";
import def_prod from "../img/def_prod.png";
import TOGGLE_BTN_PRELOADER from "./auth-reducer";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const GET_CERTAIN_CATEGORY = "GET_CERTAIN_CATEGORY";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const UPDATE_NEW_PRODUCT_TITLE = "UPDATE_NEW_PRODUCT_TITLE";
const UPDATE_NEW_PRODUCT_PRICE = "UPDATE_NEW_PRODUCT_PRICE";
const UPDATE_NEW_PRODUCT_DESC = "UPDATE_NEW_PRODUCT_DESC";
const SET_MODAL_STATE = "SET_MODAL_STATE";
const DELETE_CATEGORY = "DELETE_CATEGORY";

let initialState = {
    categories: [],
    products: [],
    newProductTitle: "",
    newProductPrice: "",
    newProductDesc: "",
    currentCategory: 1,
    isFetching: false,
    addCategoryIsFetching: false,
    modalState: false,
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.products,
            };
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.isNewCategory
                    ? [...state.categories, action.categories]
                    : action.categories,
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
                addCategoryIsFetching: action.addCategoryIsFetching,
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
const setProducts = (products) => ({
    type: SET_PRODUCTS,
    products: products,
});
const setCategories = (categories, isNewCategory, isEditedCategory) => ({
    type: SET_CATEGORIES,
    categories,
    isNewCategory,
    isEditedCategory,
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
const toggleBtnPreloader = (addCategoryIsFetching) => ({
    type: TOGGLE_BTN_PRELOADER,
    addCategoryIsFetching,
});
export const changeNewProductForm = (type, actionKey) => ({ type, actionKey });
export const addNewProduct = () => ({ type: ADD_NEW_PRODUCT });
export const setModalState = (modalState) => ({
    type: SET_MODAL_STATE,
    modalState,
});

const getMenuData = (requestType, action, isCategory) => {
    return async (dispatch) => {
        try {
            dispatch(toggleLoader(true));
            let response = await requestType();
            dispatch(toggleLoader(false));
            if (isCategory) dispatch(action(response.data, false));
            else dispatch(action(response.data));
        } catch (err) {
            console.error(`Error: ${err}`);
        }
    };
};

export const getProducts = () => {
    return getMenuData(productsAPI.getProducts, setProducts, false);
};

export const getCategories = () => {
    return getMenuData(productsAPI.getCategories, setCategories, true);
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
            dispatch(setModalState(false));
            dispatch(setCategories(response.data, true));
        } catch (err) {
            console.error("Error: " + err);
        }
    };
};
export const deleteCategory = (categoryId) => {
    return async (dispatch) => {
        try {
            let response = await productsAPI.deleteCategory(categoryId);
            if (response.status >= 200 && response.status <= 400)
                dispatch(deleteCategoryFromState(categoryId));
        } catch (err) {
            console.error("Error: " + err);
        }
    };
};

export default menuReducer;
