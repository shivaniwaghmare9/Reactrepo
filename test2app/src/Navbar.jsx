

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Topbar=()=>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
         <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">


            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="theme">Theme Change App</Nav.Link>
            <Nav.Link as={Link} to="counter">Counter App</Nav.Link>
            <Nav.Link as={Link} to="todo">Todo App</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Topbar;