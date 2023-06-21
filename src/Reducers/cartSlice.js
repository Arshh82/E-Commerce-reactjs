const { createSlice } = require('@reduxjs/toolkit');

// const initialState = {
//     carts:[],
//     quantity:0,
// }
const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    } else {
        return [];
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data))
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        data:fetchFromLocalStorage(),
        totalItems: 0,
        totalAmount: 0,
        deliveryCharge: 1000,
        
    },
    
    reducers: {
        // add(state, action) {
            
        //     const find = state.data.findIndex(item=>item.id===action.payload.id)
        //     if(find>=0){
        //         alert("It Is Already Added to cart")
        //     }else{
        //         // const tempvar = {...action.payload, quantity:3}
        //         state.data.push(action.payload);
        //         storeInLocalStorage(state.data);
        //     }
            
        // },
        add(state, action){
            const tempItem = state.data.find(item => item.id === action.payload.id);
            if(tempItem){
                const tempCart = state.data.map(item => {
                    if(item.id === action.payload.id){
                        let newQty = item.quantity + action.payload.quantity;
                        let newTotalPrice = newQty * item.price;
                        return { ...item, quantity: newQty, totalPrice: newTotalPrice };
                    } else {
                        return item;
                    }
                });
                state.data = tempCart;
                storeInLocalStorage(state.data);
            } else {
                state.data.push(action.payload);
                storeInLocalStorage(state.data);
            }
        },
        remove(state, action) {
            const tempCart = state.data.filter(item => item.id !== action.payload);
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
        clearCart(state){
            state.data = [];
            storeInLocalStorage(state.data);
        },
        toggleCartQty(state, action){
            const tempCart = state.data.map(item => {
                if(item.id === action.payload.id){
                    let tempQty = item.quantity;
                    let tempTotalPrice = item.totalPrice;
                    if(action.payload.type === "INC"){
                        tempQty++;
                        tempTotalPrice = tempQty * item.price;
                    }
                    if(action.payload.type === "DEC"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.price;
                    }
                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
                } else {
                    return item;
                }
            });
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
    },
    
    
});

export const { add, remove, clearCart,toggleCartQty } = cartSlice.actions;
export default cartSlice.reducer;