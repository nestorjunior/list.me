import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
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
        <Button color="secondary" component={Link} to="/login">
          Login
        </Button>
        <Button color="secondary" component={Link} to="/signup">
          Signup
        </Button>
      </Container>
    </NavbarContainer>
  );
}
