import { Navbar, Container, Nav } from 'react-bootstrap';
import { IoChevronForwardCircleOutline } from "react-icons/io5";

const CustomNavbar = () => {
  return (
		<Navbar bg="light" expand="lg" className='navbar-wb'>
			<Container fluid>
				<Nav className="ms-auto">
					<Nav.Link href="#"><IoChevronForwardCircleOutline size={20} /> Login</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
  );
};

export default CustomNavbar;
