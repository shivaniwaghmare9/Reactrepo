import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCart:(state,actions)=>{
            state.cart.filter((key)=>key.id==actions.payload.id)
        }
    }
})
export const{addCart}=cartSlice.actions;
export default cartSlice.reducer;