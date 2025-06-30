import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCart:(state,actions)=>{
            const data=state.cart.filter((key)=>key.id==actions.payload.id)
            if(data.length>=1)
            {
                toast.warning("product already added")
            }
            else{
             state.cart.push(actions.payload)
            }
            
            
        }
    }
})
export const{addCart}=cartSlice.actions;
export default cartSlice.reducer;