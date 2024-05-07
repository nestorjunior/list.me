import Link from '../Link/';
import { IconCircleChevronRight, IconSun, IconMoon } from '../Icons';
import { NavbarContainer, Container } from './styles'


export function Navbar() {
  return (
    <NavbarContainer>
      <Container>
				<Link to="/login"><IconCircleChevronRight /> Login</Link>
				<Link to="/signup"><IconCircleChevronRight /> Signup</Link>
				<IconSun />
      </Container>
    </NavbarContainer>
  );
}
