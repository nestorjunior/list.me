import { Link } from "react-router-dom";
import { DescriptionContainer, LogoContainer, TitleContainer } from "./styles";

export function Logo() {
	return (
		<LogoContainer>
			<Link to="/">
				<TitleContainer>wishbox</TitleContainer>
			</Link>
			<DescriptionContainer className="ml-2">
				dream, share, connect
			</DescriptionContainer>
		</LogoContainer>
	);
}
