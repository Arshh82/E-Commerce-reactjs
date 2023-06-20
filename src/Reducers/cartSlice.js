const { createSlice } = require('@reduxjs/toolkit');

// const initialState = {
//     carts:[],
//     quantity:0,
// }


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data:[],
        totalItems: 0,
        totalAmount: 0,
        deliveryCharge: 1000,
        totalItems: 0,
    },
    
    reducers: {
        add(state, action) {
            // let find = state.product.findIndex((product) => product.Id === action.payload.id);
            // if (find >= 0){
            //     state.cart[find].stockqwantity += 1;
            // }
            // else{
                
            // }
            const find = state.data.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                alert("It Is Already Added to cart")
            }else{
                // const tempvar = {...action.payload, quantity:3}
                state.data.push(action.payload);
            }
            
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
    
    
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;