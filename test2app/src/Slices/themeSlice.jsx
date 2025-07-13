import { createSlice } from "@reduxjs/toolkit";

const themeSlice=createSlice({
    name:"mycolor",
    initialState:{
        color:"red"
    },
    reducers:{
        changeColor:(state,actions)=>{
            console.log(actions.payload)
            state.color(actions.payload)
        }
    }
})
export const{changeColor}=themeSlice.actions;
export default themeSlice.reducer;