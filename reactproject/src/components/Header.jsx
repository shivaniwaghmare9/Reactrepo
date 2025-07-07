
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    const navigate=useNavigate();
    const cartData=useSelector(state=>state.mycart.cart);
    const cartLength=cartData.length;    
    const [txtdata, setTxtData]= useState("");

    const handleSubmit=()=>{
    navigate(`searchdata/${txtdata}`)
  }
    return(
        <>
    <div className="header">
         <div id="inptag">
        <input type="text" placeholder="Search" className="inp" name="txtval" value={txtdata} 
        onChange={(e)=>{setTxtData(e.target.value)}}/>
        <Button type="submit" id="subbtn" onClick={handleSubmit}>Submit</Button>
       </div>
            <div className='icons'>
        
              <h5><FaRegUserCircle /> <br/>profile</h5>
              <h5><span style={{color:"indianred"}}>{cartLength}</span><br/><FaShoppingCart  id="carticon" onClick={()=>{navigate("/cartdata")}}/></h5> 
             
            </div> 
    </div>
        </>
    )
}
export default Header;
