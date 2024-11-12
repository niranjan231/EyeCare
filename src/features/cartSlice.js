import { createSlice } from "@reduxjs/toolkit";
import Product from "../Product";
// import removeCard from "../Navbar/Modal2"
const initialState = {
    cart : [],
items : Product,
totalQuantaty:0,
totalPrice : 0,

}


export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        handleAddToCart: (state,action)=>{
            state.cart.push(action.payload);
        },
        removeCard : (state,action)=>{
            state.cart = state.cart.filter(x => x.id != action.payload.id)
        }
        
    },
    
}) 


export default cartSlice.reducer;
export const  {handleAddToCart , removeCard} = cartSlice.actions;
