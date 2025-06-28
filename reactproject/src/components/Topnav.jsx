
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Topnav=()=>{
    return(
        <>
         <Navbar bg="dark" data-bs-theme="dark" id="head">
        <Container>
          <Navbar.Brand href="#home">STYLISH</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topnav;