import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";

export const rootReducer = combineReducers({
    cart: cartReducer
});

//boilerplate : basmakalıp kodlardır genelde burası