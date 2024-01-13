import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartActions"

//state in başlangıç değeri olmalı;
const initialState = {
    cartItems : []
}

export const cartReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            //state.csrtItems.push(action.payload) bu kod çalışmaz çünkü returne state referansı gönderilir, değer gönderimini kabul etmez.
            //state değişimi !!!
            //state is immutable olduğundan orjinal array değiştirilemez.
            return { ...state, cartItems:[ ...state.cartItems, action.payload]}
        case REMOVE_FROM_CART:
            return { ...state, cartItems:[ ...state.cartItems.filter(i=>i.id !== action.payload) ]}
        case CLEAR_CART:
            return { ...state, cartItems:[]}
        default:
            return { ...state, cartItems:[]}
    }
}