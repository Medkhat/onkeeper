import { productsAPI } from "../api/api";
import {
    deleteFlow,
    getMenuData,
    toggleBtnPreloader,
    toggleLoader,
    TOGGLE_BTN_PRELOADER,
    TOGGLE_CATEGORY_LOADER,
} from "./helper";
import { setProducts } from "./product-reducer";
import {
    setCategoryModalState,
    setDeleteCategoryModalState,
} from "./modal-reducer";

const SET_CATEGORIES = "SET_CATEGORIES";
const DELETE_CATEGORY = "DELETE_CATEGORY";
const EDIT_CATEGORY = "EDIT_CATEGORY";

let initialState = {
    categories: [],
    isFetching: false,
    loaderOnModalBtn: false,
};

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case TOGGLE_CATEGORY_LOADER:
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
const setCategories = (categories, isNewCategory) => ({
    type: SET_CATEGORIES,
    categories,
    isNewCategory,
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

export const getCategories = () => {
    return getMenuData(productsAPI.getCategories, setCategories, "category");
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

export const deleteCategory = (categoryId) => async (dispatch) => {
    deleteFlow(
        productsAPI.deleteCategory.bind(productsAPI),
        deleteCategoryFromState,
        setDeleteCategoryModalState,
        categoryId,
        dispatch
    );
};

export default categoryReducer;
