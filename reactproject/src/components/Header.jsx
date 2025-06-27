

import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
const Header=()=>{
    
    return(
        <>
         <div id="header">
            <div> 
                <h1 id="title">MINISTORE</h1> 
            </div>
            
            <div>
                <h6 className="h6">Become a<br/> suplier</h6>
             <h6 className="h6">Investor<br/> Relations</h6>
              
             <h4><FaRegUserCircle /> <br/>profile</h4>
             
            <h4><FaShoppingCart /><br/>cart</h4> 
            </div>
             
           </div>
        </>
    )
}
export default Header;
