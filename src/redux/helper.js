export const TOGGLE_LOADER = "TOGGLE_LOADER";
export const TOGGLE_BTN_PRELOADER = "TOGGLE_BTN_PRELOADER";

export const toggleLoader = (isFetching) => ({
    type: TOGGLE_LOADER,
    isFetching,
});
export const toggleBtnPreloader = (loaderOnModalBtn) => ({
    type: TOGGLE_BTN_PRELOADER,
    loaderOnModalBtn,
});

export const getMenuData = (requestType, action) => {
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

export const deleteFlow = async (apiMethod, fromState, id, dispatch) => {
    try {
        let response = await apiMethod(id);
        if (response.status >= 200 && response.status <= 400)
            dispatch(fromState(id));
    } catch (err) {
        console.error(err);
    }
};
