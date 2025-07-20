
// import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

// const wishSlice=createSlice({
//     name:"mycardd",
//     initialState:{
//         cardd:[]
//     },
    
//     reducers:{
        
//         addCard:(state,actions)=>{
//             state.cardd=state.cardd.filter((key)=>key.id==actions.payload.id);
//             {
//                 state.cardd.push(actions.payload);
//                 toast.info("Added to wishlist!");
//             }
//         },
//         ReMove:(state,actions)=>{
//             state.cardd=state.cardd.filter(item=>item.id!=actions.payload.id)
//             toast.error("Product successful remove !!");
//         }
//     }
// })
// export const{addCard,ReMove}=wishSlice.actions;
// export default wishSlice.reducer;


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
                toast.info("Added to wishlist!");
            }
        },
        ReMove:(state,actions)=>{
            state.cardd=state.cardd.filter(item=>item.id!=actions.payload.id)
            toast.error("Product successful remove !!");
        }
    }
})
export const{addCard,ReMove}=wishSlice.actions;
export default wishSlice.reducer;