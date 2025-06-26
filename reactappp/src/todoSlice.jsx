import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        taskDelete:(state,actions)=>{
            state.task=state.task.filter(items=>items.id!==actions.payload.id)
        }
    }
})
export const{addTask,taskDelete}=todoSlice.actions;
export default todoSlice.reducer;