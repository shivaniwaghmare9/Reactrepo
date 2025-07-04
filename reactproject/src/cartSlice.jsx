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
    
        },
        decreMent:(state,actions)=>{
            for(var i=0; i<state.cart.length; i++)
            {
              if(state.cart[i].id==actions.payload.id){
                if(state.cart[i].qnty<=1)
                {
                 toast.warning("Quantity not less then 0");
                }
                else
               {
                state.cart[i].qnty--;
               }
            }
        }
        },
        increMent:(state,actions)=>{
            for(var i=0; i<state.cart.length; i++)
            {
              if(state.cart[i].id==actions.payload.id)
              {
                state.cart[i].qnty++;
               }
            }
        },
        reMove:(state,actions)=>{
            state.cart=state.cart.filter(item=>item.id!=actions.payload.id)
        }
    }
})
export const{addCart,decreMent,increMent,reMove}=cartSlice.actions;
export default cartSlice.reducer;