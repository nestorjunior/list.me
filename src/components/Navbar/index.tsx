import Link from '../Link/';
import { CircleChevronRight } from '../CircleChevronRight';
import { NavbarContainer, Container } from './styles'


export function Navbar() {
  return (
    <NavbarContainer>
      <Container>
				<Link to="/login"><CircleChevronRight /> Login</Link>
				<Link to="/signup"><CircleChevronRight /> Signup</Link>
      </Container>
    </NavbarContainer>
  );
}
