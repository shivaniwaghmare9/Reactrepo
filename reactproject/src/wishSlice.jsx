
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const wishSlice=createSlice({
    name:"mycardd",
    initialState:{
        cardd:[]
    },
    
    reducers:{
        
        addCard:(state,actions)=>{
            state.cardd=state.cardd.filter((key)=>key.id==actions.payload.id);
            {
                state.cardd.push(actions.payload);
            }
        },
        ReMove:(state,actions)=>{
            state.cardd=state.cardd.filter(item=>item.id!=actions.payload.id)
            toast.error("Product successful deleted !!");
        }
    }
})
export const{addCard,ReMove}=wishSlice.actions;
export default wishSlice.reducer;