import { productsAPI } from "../api/api";
import TOGGLE_BTN_PRELOADER from "./auth-reducer";
import { setCategoryModalState } from "./modal-reducer";

const SET_PRODUCTS = "SET_PRODUCTS";
const SET_CATEGORIES = "SET_CATEGORIES";
const GET_CERTAIN_CATEGORY = "GET_CERTAIN_CATEGORY";
const TOGGLE_LOADER = "TOGGLE_LOADER";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const EDIT_CATEGORY = "EDIT_CATEGORY";

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
                products: action.products,
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
            dispatch(setCategoryModalState(false));
            dispatch(setCategories(response.data, true));
        } catch (err) {
            console.error("Error: " + err);
        }
    };
};
export const editCategory = (categoryId, name, image, restoranId) => {
    return async (dispatch) => {
        try {
            dispatch(toggleBtnPreloader(true));
            await productsAPI.editCategory(categoryId, name, image, restoranId);
            dispatch(toggleBtnPreloader(false));
            dispatch(setCategoryModalState(false));
            dispatch(editCategoryFromState(categoryId, name, image));
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
