import { createSlice } from "@reduxjs/toolkit";

const ThemeSlice=createSlice({
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
export const{changeColor}=ThemeSlice.actions;
export default ThemeSlice.reducer;