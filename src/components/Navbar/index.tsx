import { Link as RouterLink, useLocation } from 'react-router-dom';
import { NavbarContainer, Container } from './styles';
import { LogoSmaller } from '../LogoSmaller';
import { Link } from '@mui/material';

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
        <Link 
          component={RouterLink} 
          to="/login" 
          color="primary"
          display="flex"
          alignItems="center"
          style={{ textDecoration: 'none', marginRight: 16 }}
        >
          Login
        </Link>
        <Link 
          component={RouterLink} 
          to="/signup" 
          color="primary"
          display="flex"
          alignItems="center"
          style={{ textDecoration: 'none' }}
        >
          Signup
        </Link>
      </Container>
    </NavbarContainer>
  );
}
