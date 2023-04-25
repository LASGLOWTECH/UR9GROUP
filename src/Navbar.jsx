import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
function CONTACTUS() {
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg"  id="bakd" className='d-flex justify-content-center ' variant="dark">
      <Container>
        <Navbar.Brand> <img className=" img1" src="/hem.png" alt="hem"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
       
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className=" nav-links ms-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <Nav.Link href="/About">ABOUT</Nav.Link>
            <Nav.Link href="/Contact">CONTACT</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CONTACTUS;