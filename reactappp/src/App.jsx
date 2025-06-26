
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { addTask,taskDelete,taskRebyindex,taskComplete,taskInComplete,taskEdit } from "./todoSlice";
const App=()=>{
  const data=useSelector(state=>state.todo.task);
  const dispatch=useDispatch();
  const[txt,setTxt]=useState("")
  const[btn,setBtn]=useState(true)
  const[myid,setMyid]=useState("");
  const dataEdit=(id,work)=>{
    setTxt(work)
    setBtn(false)
    setMyid(id)
  };
  const myEditData=()=>{
      dispatch(taskEdit({id:myid,work:txt}))
      setBtn(true)
  }
  let sno=0;
  const ans=data.map((key,index)=>{
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
          <span onClick={()=>{dispatch(taskRebyindex({id:index}))}}>remove</span>
        </td>
        <td>
          <span onClick={()=>{dispatch(taskComplete({id:key.id}))}}>complete</span>
        </td>
        <td>
          <span onClick={()=>{dispatch(taskInComplete({id:key.id}))}}>incomplete</span>
        </td>
        <td>
          <span onClick={()=>{dataEdit(key.id,key.work)}}>edit</span>
        </td>
       </tr>
      </>
    )
  })
  return(
    <>
     <h1>ToDo App!</h1>
     Enter Task: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
     {btn ? (
        <>
       <button onClick={()=>{dispatch(addTask({id:Date.now(),work:txt,taskStatus:false}))}}>Add</button>
       </>
     ):(
      <>
       <button onClick={myEditData}>EditSave</button>
      </>
     )}
     
     <br/>
     <table border="1" width="700px">
      <tr>
        <th>Sno</th>
        <th>Task</th>
        <th>Delete</th>
        <th>Remove</th>
        <th>Complete</th>
        <th>Incomplete</th>
        <th>Edit</th>
      </tr>
      {ans}
     </table>
    </>
  )
}
export default App;