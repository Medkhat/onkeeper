let initialState = {
    categoryModalState: false,
    productsModalState: false,
    deleteCategoryModalState: false,
    deleteProductModalState: false,
};
const SET_CATEGORY_MODAL_STATE = "SET_CATEGORY_MODAL_STATE";
const SET_PRODUCT_MODAL_STATE = "SET_PRODUCT_MODAL_STATE";
const DELETE_CATEGORY_MODAL_STATE = "DELETE_CATEGORY_MODAL_STATE";
const DELETE_PRODUCT_MODAL_STATE = "DELETE_PRODUCT_MODAL_STATE";
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_MODAL_STATE:
            return {
                ...state,
                categoryModalState: action.modalState,
            };
        case DELETE_CATEGORY_MODAL_STATE:
            return {
                ...state,
                deleteCategoryModalState: action.modalState,
            };
        case SET_PRODUCT_MODAL_STATE:
            return {
                ...state,
                productsModalState: action.modalState,
            };
        case DELETE_PRODUCT_MODAL_STATE:
            return {
                ...state,
                deleteProductModalState: action.modalState,
            };
        default:
            return state;
    }
};
export const setCategoryModalState = (modalState) => ({
    type: SET_CATEGORY_MODAL_STATE,
    modalState,
});
export const setDeleteCategoryModalState = (modalState) => ({
    type: DELETE_CATEGORY_MODAL_STATE,
    modalState,
});
export const setProductModalState = (modalState) => ({
    type: SET_PRODUCT_MODAL_STATE,
    modalState,
});
export const setDeleteProductModalState = (modalState) => ({
    type: DELETE_PRODUCT_MODAL_STATE,
    modalState,
});
export default modalReducer;
