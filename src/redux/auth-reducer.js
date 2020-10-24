import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
export const TOGGLE_PRELOADER = "TOGGLE_PRELOADER";

let initialState = {
    userId: null,
    token: null,
    status: null,
    isAuth: false,
    isFetching: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case TOGGLE_PRELOADER:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        default:
            return state;
    }
};

const setUserData = (userId, token, username, isAuth) => ({
    type: SET_USER_DATA,
    payload: { userId, token, username, isAuth },
});

const togglePrelader = (isFetching) => ({
    type: TOGGLE_PRELOADER,
    isFetching,
});

export const authMe = () => {
    return async (dispatch) => {
        let response = await authAPI.authMe();
        if (response.statusText === "OK") {
            let { id, token, status } = response.data;
            dispatch(setUserData(id, token, status, true));
        }
    };
};

export const login = (username, password) => {
    return async (dispatch) => {
        dispatch(togglePrelader(true));
        let response = await authAPI.login(username, password);
        if (response.statusText === "OK") {
            let { id, token, status } = response.data;
            localStorage.setItem("token", token);
            dispatch(togglePrelader(false));
            dispatch(setUserData(id, token, status, true));
        }
    };
};

export const logout = () => {
    return (dispatch) => {
        dispatch(setUserData(null, null, null, false));
    };
};

export default authReducer;
