
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import myReducer from "./cartSlice"
import wishReducer from "./wishSlice"

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, myReducer);
const persistedReducerr = persistReducer(persistConfig, wishReducer);

const store=configureStore({
    reducer:{
     mycard:persistedReducer,
     mycardd:persistedReducerr
    }
})
export default store;
export const persistor = persistStore(store);