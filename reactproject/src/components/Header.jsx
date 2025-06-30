
import Button from 'react-bootstrap/Button';

import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
const Header=()=>{
    const cartData=useSelector(state=>state.mycart.cart);
    const cartLength=cartData.length;
    return(
        <>
    <div className="header">
         <div id="inptag">
        <input type="text" placeholder="Search" className="inp"/>
        <Button type="submit" id="subbtn">Submit</Button>
       </div>
            <div className='icon'>
        
              <h5><FaRegUserCircle /> <br/>profile</h5>
              <h5>{cartLength}<FaShoppingCart /><br/>cart</h5> 
             
            </div> 
    </div>
        </>
    )
}
export default Header;
