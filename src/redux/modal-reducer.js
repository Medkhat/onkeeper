let initialState = {
    categoryModalState: false,
    productsModalState: false,
};
const SET_CATEGORY_MODAL_STATE = "SET_CATEGORY_MODAL_STATE";
const SET_PRODUCT_MODAL_STATE = "SET_PRODUCT_MODAL_STATE";
const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_MODAL_STATE:
            return {
                ...state,
                categoryModalState: action.modalState,
            };
        case SET_PRODUCT_MODAL_STATE:
            return {
                ...state,
                productsModalState: action.modalState,
            };
        default:
            return state;
    }
};
export const setCategoryModalState = (modalState) => ({
    type: SET_CATEGORY_MODAL_STATE,
    modalState,
});
export const setProductModalState = (modalState) => ({
    type: SET_PRODUCT_MODAL_STATE,
    modalState,
});
export default modalReducer;
