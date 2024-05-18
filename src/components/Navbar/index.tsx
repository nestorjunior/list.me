import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavbarContainer, Container } from './styles'

export function Navbar() {
  return (
    <NavbarContainer>
      <Container>
				<Button color='primary' variant="contained" sx={{ marginRight: 1 }} endIcon={<ArrowForwardIosIcon />}>Login</Button>
				<Button color='primary' variant="contained" sx={{ marginRight: 1 }} endIcon={<ArrowForwardIosIcon />}>Signup</Button>
      </Container>
    </NavbarContainer>
  );
}
