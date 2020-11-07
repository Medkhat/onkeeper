import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import productReducer from "./product-reducer";
import personalReducer from "./personal-reducer";
import authReducer from "./auth-reducer";
import ThunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import modalReducer from "./modal-reducer";
import categoryReducer from "./category-reducer";

let reducers = combineReducers({
    productReducer,
    categoryReducer,
    personalReducer,
    authReducer,
    appReducer,
    modalReducer,
    form: formReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(ThunkMiddleware))
);

export default store;
