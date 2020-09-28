import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    userId: null,
    username: null,
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

const setUserData = (username, password) => ({
    type: SET_USER_DATA,
    payload: {username, password}
})



export const login = (username, password) => {
    return async dispatch => {
        let response = await authAPI.login(username, password)
    }
}

export default authReducer