import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';

export function NavigationBar () {
  return (
    <Navbar bg="light" expand="lg" className="navbar-wb">
      <Container fluid>
        <Nav className="ms-auto">
          <Nav.Link href="/login">
						<FontAwesomeIcon icon={faCircleChevronRight} /> Login
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
