import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Reducers/cartSlice";
import productReducer from "../Reducers/productSlice"

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        product: productReducer,
    },
})

export default store;