
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
    
    return(
        <>
    <div className="header">
         <div id="inptag">
        <input type="text" placeholder="Search" className="inp"/>
        <Button type="submit" id="subbtn">Submit</Button>
       </div>
            <div className='icon'>
        
              <h4><FaRegUserCircle /> <br/>profile</h4>
              <h4><FaShoppingCart /><br/>cart</h4> 
             
            </div> 
    </div>
        </>
    )
}
export default Header;
