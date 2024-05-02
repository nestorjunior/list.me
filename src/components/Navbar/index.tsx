import Link from '../Link/';
import { CircleChevron } from '../CircleChevron/CircleChevron';
import { NavbarContainer, Container } from './styles'


export function Navbar() {
  return (
    <NavbarContainer>
      <Container>
				<Link to="/login"><CircleChevron /> Login</Link>
				<Link to="/signup"><CircleChevron /> Signup</Link>
      </Container>
    </NavbarContainer>
  );
}
