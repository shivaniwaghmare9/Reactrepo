
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/ColorSlice"
const store=configureStore({
    reducer:{
        mycolor:themeReducer
    }
})
export default store;