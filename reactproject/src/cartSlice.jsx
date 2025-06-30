import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
const cartSlice=createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addCart:(state,actions)=>{
          const mydata= state.cart.filter((key)=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
               toast.error("This Product Aleready Added!!");
            }
            else 
            {
                state.cart.push(actions.payload);
            }
    
    }
    }
})
export const{addCart}=cartSlice.actions;
export default cartSlice.reducer;