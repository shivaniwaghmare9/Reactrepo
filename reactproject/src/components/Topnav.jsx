
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import img4 from "../images/images.jpeg"
const Topnav=()=>{
    return(
        <>
         <Navbar bg="light" data-bs-theme="light" id="head">
        <Container>
          <Navbar.Brand href="#home"><img src={img4} alt="icon"  className='imgnav'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home" id="content1">Home</Nav.Link>
            <Nav.Link as={Link} to="men" id="content">Men</Nav.Link>
            <Nav.Link as={Link} to="women" id="content">Women</Nav.Link>
            <Nav.Link as={Link} to="kid" id="content">Kid</Nav.Link>
            <Nav.Link as={Link} to="cartdata" id="content">CartData</Nav.Link>
            <Nav.Link as={Link} to="search" id="content">Search</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;