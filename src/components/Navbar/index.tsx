import { useLocation } from "react-router-dom";
import { LogoSecondary } from "../LogoSecondary";
import NotificationBell from "../NotificationBell";
import { UserMenu } from "../UserMenu";
import { Container, NavbarContainer } from "./styles";

export function Navbar() {
	const location = useLocation();

	const renderLogo = () => {
		if (location.pathname !== "/") {
			return <LogoSecondary />;
		}
		return null;
	};

	return (
		<NavbarContainer>
			<Container>
				{renderLogo()}
				<a href="/login" style={{ marginRight: "5px" }}>
					Login
				</a>
				<a href="/signup" style={{ marginRight: "5px" }}>
					Signup
				</a>
				<NotificationBell />
				<UserMenu />
			</Container>
		</NavbarContainer>
	);
}
