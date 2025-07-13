
import { useSelector,useDispatch } from "react-redux";
import { changeColor } from "../Slices/ColorSlice";
import { useState } from "react";
const Theme=()=>{
    const clr=useSelector(state=>state.mycolor.color)
    const dispatch=useDispatch();
    const[txt,setTxt]=useState("")
    return(
        <>
         <h3>ThemeChange</h3>
         Enter Color: <input type="text" value={txt} onChange={(e)=>{setTxt(e.target.value)}}/><br/><br/>
         <div style={{color:clr}}>

         </div>
        </>
    )
}
export default Theme;