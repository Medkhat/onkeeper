import { createStore, combineReducers } from "redux";
import menuReducer from "./menu-reducer";
import personalReducer from "./personal-reducer";

let reducers = combineReducers({
  menuReducer: menuReducer,
  personalReducer: personalReducer
})

let store = createStore(reducers)

export default store