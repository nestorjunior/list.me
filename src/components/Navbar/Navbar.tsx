import Link from '../Link/Link';
import { CircleChevron } from '../CircleChevron/CircleChevron';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
	background: var(--white-100);
	padding: 10px 5px;
`

const Container = styled.div`
	display: flex;
	justify-content: flex-end;
`

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
