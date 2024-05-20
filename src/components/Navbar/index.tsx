import { useLocation } from 'react-router-dom';
import { NavbarContainer, Container } from './styles';
import { LogoSmaller } from '../LogoSmaller';

export function Navbar() {
  const location = useLocation();

	const renderLogo = () => {
    if (location.pathname === '/login' || location.pathname === '/signup') {
      return <LogoSmaller />
    }
    return null;
  };

  return (
    <NavbarContainer>
      <Container>
				{renderLogo()}
        <a href="/login" style={{ marginRight: '5px' }}>Login</a>
				<a href="/signup" style={{ marginRight: '5px' }}>Signup</a>
      </Container>
    </NavbarContainer>
  );
}
