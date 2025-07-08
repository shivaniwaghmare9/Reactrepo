import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice=createSlice({
    name:"mycard",
    initialState:{
        card:[]
    },
    
    reducers:{
        addCart:(state,actions)=>{
          const mydata= state.card.filter((key)=>key.id==actions.payload.id);
            if (mydata.length>=1)
            {
               toast.error("This Product Aleready Added!!");
            }
            else 
            {
                state.card.push(actions.payload);
            }
    
        },
        decreMent:(state,actions)=>{
            for(var i=0; i<state.card.length; i++)
            {
              if(state.card[i].id==actions.payload.id){
                if(state.card[i].qnty<=1)
                {
                 toast.warning("Quantity not less then 0");
                }
                else
               {
                state.card[i].qnty--;
               }
            }
        }
        },
        increMent:(state,actions)=>{
            for(var i=0; i<state.card.length; i++)
            {
              if(state.card[i].id==actions.payload.id)
              {
                state.card[i].qnty++;
               }
            }
        },
        reMove:(state,actions)=>{
            state.card=state.card.shfilter(item=>item.id!=actions.payload.id)
            toast.error("Product successful deleted !!");
        }
    }
})
export const{addCart,decreMent,increMent,reMove}=cartSlice.actions;
export default cartSlice.reducer;