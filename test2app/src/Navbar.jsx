

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
const Navbar=()=>{
    return(
        <>
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="style">Style</Nav.Link>
            <Nav.Link as={Link} to="about">About</Nav.Link>
            <Nav.Link as={Link} to="faculty">Faculty</Nav.Link>
            <Nav.Link as={Link} to="course">OurCourse</Nav.Link>
            <Nav.Link as={Link} to="contact">Contact Us</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
        </>
    )
}
export default Navbar;