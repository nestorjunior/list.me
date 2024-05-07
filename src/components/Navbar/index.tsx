import Link from '../Link/';
import { IconCircleChevronRight } from '../Icons';
import { NavbarContainer, Container } from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <Container>
				<Link to="/login"><IconCircleChevronRight /> Login</Link>
				<Link to="/signup"><IconCircleChevronRight /> Signup</Link>
      </Container>
    </NavbarContainer>
  );
}
