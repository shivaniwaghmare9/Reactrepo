
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./Slices/themeSlice"
const store=configureStore({
    reducer:{
        mycolor:themeReducer
    }
})
export default store;