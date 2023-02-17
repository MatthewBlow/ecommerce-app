import { createSlice } from '@reduxjs/toolkit';

// THIS IS USING REDUX TOOLKIT, NOT PURE REDUX
// Slice for cart containing the reducers and state for the cart

const intialState = {
        products: [],
        quantity: 0,
        total: 0,
  }

const cartSlice = createSlice({
    name: "cart",
    initialState:{
        products: [],
        quantity: 0,
        total: 0,
    },
    reducers:{
        // This will add a product to the cart, increasing quantity by 1
        // This will also add the product information (action.payload)
        // This will update the total based on the payload price * quantity
        addProduct:(state, action) =>{
            state.quantity += 1;
            state.products.push(action.payload)
            state.total += action.payload.price * action.payload.quantity;
        },
         // This will clear the cart to its inital state
        clearCart:(state) =>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }, 
        resetState: () => intialState
    }
});

export const { addProduct, clearCart, resetState, decreseQuantity, increaseQuantity } = cartSlice.actions
export default cartSlice.reducer;