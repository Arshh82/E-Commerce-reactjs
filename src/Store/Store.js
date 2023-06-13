import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducers/cartSlice";
import productReducer from "../Reducers/productSlice"
import modalReducer from "../Reducers/modalSlice";

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
        modal: modalReducer,
    },
})

export default store;