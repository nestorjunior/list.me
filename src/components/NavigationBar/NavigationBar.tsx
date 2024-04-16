import { Navbar, Container, Nav } from 'react-bootstrap';
import { IoChevronForwardCircleOutline } from 'react-icons/io5';

export function NavigationBar () {
  return (
    <Navbar bg="light" expand="lg" className="navbar-wb">
      <Container fluid>
        <Nav className="ms-auto">
          <Nav.Link href="/login">
            <IoChevronForwardCircleOutline size={20} /> Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
