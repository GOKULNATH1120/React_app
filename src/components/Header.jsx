import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home" className="me-0"> {/* Add "me-0" to align brand to the left */}
        <b className="fs-3">LOGOIPUSIM</b>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto"> {/* Use mx-auto to center align the Nav items */}
          <NavDropdown title="Services" id="dropdown-1">
            <NavDropdown.Item href="#action/3.1">Service 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Service 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Company" id="dropdown-2">
            <NavDropdown.Item href="#action/3.5">Action 5</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.6">Action 6</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.7">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Case Studies</Nav.Link>
          <Nav.Link href="#three">Blog</Nav.Link>
          <NavDropdown title="Resources" id="dropdown-5">
            <NavDropdown.Item href="#action/5.1">Action 12</NavDropdown.Item>
            <NavDropdown.Item href="#action/5.2">Action 13</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  <section className="rectangle-section-12">
  <Container className="d-flex align-items-center justify-content-between">
    <div className="client-support">
      <p>Client Support <i className="bi bi-arrow-right"></i></p>
      <p className="phone-number">Phone: 123-456-7890</p>
    </div>
    <Button variant="dark">Contact Us</Button>
  </Container>
</section>
</div>




  )
}

export default Header