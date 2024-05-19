import { Button } from '@mui/material';
import { NavbarContainer, Container } from './styles';

export function Navbar() {
  
  return (
    <NavbarContainer>
      <Container>
        <Button color="secondary">
          Login
        </Button>
        <Button color="secondary">
          Signup
        </Button>
      </Container>
    </NavbarContainer>
  );
}
