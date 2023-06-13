const { createSlice } = require('@reduxjs/toolkit');

// const initialState = {
//     carts:[],
//     quantity:0,
// }


const cartSlice = createSlice({
    name: 'cart',
    initialState : [],
    reducers: {
        add(state, action) {
            // let find = state.product.findIndex((product) => product.Id === action.payload.id);
            // if (find >= 0){
            //     state.cart[find].stockqwantity += 1;
            // }
            // else{
                
            // }
            const find = state.findIndex(item=>item.id===action.payload.id)
            if(find>=0){
                
            }else{
                // const tempvar = {...action.payload, quantity:3}
                state.push(action.payload);
            }
            
        },
        remove(state, action) {
            return state.filter((item) => item.id !== action.payload);
        },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;