
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask,taskDelete,taskComplete,taskInComplete } from "./todoSlice";
const App=()=>{
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[txt,setTxt]=useState("")
  let sno=0;
  const ans=data.map((key)=>{
    sno++;
    return(
      <>
       <tr>
        <td>{sno}</td>
        <td>{key.taskStatus ? (
        <>
         <span style={{color:"red",textDecoration:"line-through"}}>
            {key.work}
          </span>
        </>
    ):(
        <>
        {key.work}
        </>

    )}
      
      </td>
          
        <td>
          <span onClick={()=>{dispatch(taskDelete({id:key.id}))}}>delete</span>
        </td>
        <td>
          <span onClick={()=>{dispatch(taskComplete({id:key.id}))}}>complete</span>
        </td>
        <td>
          <span onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>incomplete</span>
        </td>
       </tr>
      </>
    )
  })
  return(
    <>
     <h1>ToDo App!</h1>
     Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
     <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txt,taskStatus:false}))}}>Add</button>
     <br/>
     <table border="1" width="300px">
      <tr>
        <th>Sno</th>
        <th>Task</th>
        <th>Delete</th>
        <th>Complete</th>
        <th>Incomplete</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;