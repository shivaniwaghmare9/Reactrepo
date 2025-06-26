
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "./todoSlice";
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
        <td>{key.work}</td>
       </tr>
      </>
    )
  })
  return(
    <>
     <h1>ToDo App!</h1>
     Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
     <button onClick={()=>{dispatch(addTask({work:txt}))}}>Add</button>
     <br/>
     <table border="1" width="300px">
      <tr>
        <th>Sno</th>
        <th>Task</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;