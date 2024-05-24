import { useLocation } from 'react-router-dom';
import { NavbarContainer, Container } from './styles';
import { LogoSecondary } from '../LogoSecondary';
import { UserMenu } from '../UserMenu';
import NotificationBell from '../NotificationBell';

export function Navbar() {
  const location = useLocation();

	const renderLogo = () => {
    if (location.pathname !== '/') {
			return <LogoSecondary />
		}
    return null;
  };

  return (
    <NavbarContainer>
      <Container>
				{renderLogo()}
        <a href="/login" style={{ marginRight: '5px' }}>Login</a>
				<a href="/signup" style={{ marginRight: '5px' }}>Signup</a>
				<NotificationBell/>
				<UserMenu/>
      </Container>
    </NavbarContainer>
  );
}
