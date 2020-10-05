import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    token: null,
    status: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
    
        default:
            return state
    }
}

const setUserData = (userId, token, username, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, token, username, isAuth}
})

export const login = (username, password) => {
    return async dispatch => {
        let response = await authAPI.login(username, password)
        let { id, token, status } = response.data
        dispatch(setUserData(id, token, status, true))
    }
}

export const logout = () => {
    console.log("SUCCESS");
    return dispatch => {
        dispatch(setUserData(null, null, null, false))
    }
}

export default authReducer