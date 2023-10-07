const { createSlice } = require('@reduxjs/toolkit');


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
                alert("Product Is Already Added to Cart")
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
                    let tempQtyy = item.stockqwantity;
                    // alert(tempQtyy)
                    let tempTotalPrice = state.totalAmount;
                    if(action.payload.type === "INC"){
                        tempQty>=tempQtyy ? tempQtyy-- :tempQty++;
                        tempTotalPrice = tempQty * item.amount;
                    }
                    if(action.payload.type === "DEC"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = item.amount*tempQty  ;
                    }
                    if(action.payload.type === "NU"){
                        tempQty--;
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = item.amount*tempQty  ;
                    }
                    return {...item, quantity: tempQty, totalPrice: tempTotalPrice};
                } else {
                    return item;
                }
            });
            state.data = tempCart;
            storeInLocalStorage(state.data);
        },
        getCartTotal(state){
            state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
                // alert(cartItem.totalPrice)
                return cartTotal += cartItem.totalPrice;
            }, 0);
            state.totalItems = state.data.length;
        }
    },
    
    
});

export const { add, remove, clearCart,toggleCartQty,getCartTotal } = cartSlice.actions;
export default cartSlice.reducer;