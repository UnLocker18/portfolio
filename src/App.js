import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Navbar, Container, Nav, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <MainNav />
      <Container className="d-flex pt-4 px-0">
        <Col lg={5} className="px-0 mt-5">
          <h1>A cool headline, seriously, find one that is cool.</h1>
          <h6 className="mt-4 color-gray">Even cooler subheadline</h6>
        </Col>
        <Col lg={7} className="home-img" >
          {/* <img src="svg/home-img.svg"/> */}
        </Col>
      </Container>
    </>
  );
}

function MainNav() {
  return (
    <Navbar className="bg-darkblue py-3" variant="dark">
      <Container>
        <Navbar.Brand className="logo">
          <span>G</span><span class="logo-hidden">ianluca</span><span>G</span><span class="logo-hidden">arganese</span>
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link className="mr-3">Home</Nav.Link>
          <Nav.Link className="mr-3">My work</Nav.Link>
          <Nav.Link className="mr-3">About me</Nav.Link>
          <Nav.Link>Contacts</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
