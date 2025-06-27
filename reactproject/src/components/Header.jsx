

import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
    
    return(
        <>
         <div className="header">
             <div>
              <h4><FaRegUserCircle /> <br/>profile</h4>
              <h4><FaShoppingCart /><br/>cart</h4> 
             </div>
             
            
             
           </div>
        </>
    )
}
export default Header;
