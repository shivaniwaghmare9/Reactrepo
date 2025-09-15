
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
// import img4 from "../images/images.jpeg"
// const Topnav=()=>{
//     return(
//         <>
//          <Navbar bg="light" data-bs-theme="light" id="head">
//         <Container>
//           <Navbar.Brand href="#home"><img src={img4} alt="icon"  className='imgnav'/></Navbar.Brand>
//           <Nav className="me-auto w-100 d-flex justify-content-center align-items-center">
//             <Nav.Link as={Link} to="home" id="content1">Home</Nav.Link>
//             <Nav.Link as={Link} to="men" id="content">Men</Nav.Link>
//             <Nav.Link as={Link} to="women" id="content">Women</Nav.Link>
//             <Nav.Link as={Link} to="kid" id="content">Kid</Nav.Link>
//             <Nav.Link as={Link} to="sortData" id="content">SortData</Nav.Link>
//             <Nav.Link as={Link} to="cartdata" id="content">CartData</Nav.Link>
//             <Nav.Link as={Link} to="search" id="content">Search</Nav.Link>
//             <Nav.Link as={Link} to="wishlist" id="content">Wishlist</Nav.Link>
            
        
          
//          </Nav>
//         </Container>
//       </Navbar>
//         </>
//     )
// }
// export default Topnav;

import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Header=()=>{
    const navigate=useNavigate();
    const cartData=useSelector(state=>state.mycard.card);
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
        <Button type="submit" id="subbtn" onClick={handleSubmit}>Search</Button>
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
