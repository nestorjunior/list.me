import { FeedbackButton } from "../FeedbackButton";
import { FooterContainer, FooterContainerLinks } from "./styles";

export function Footer() {
	return (
		<>
			<FooterContainer className="footer mt-auto py-3 bg-light">
				<FooterContainerLinks>
					<span>
						<a href="/about" style={{ marginRight: "5px" }}>
							About
						</a>
						<a href="/help" style={{ marginRight: "5px" }}>
							Help Center
						</a>
						<a href="/terms" style={{ marginRight: "5px" }}>
							Service Terms
						</a>
						<a href="/privacy" style={{ marginRight: "5px" }}>
							Privacy Policy
						</a>
						<a href="/cookies" style={{ marginRight: "5px" }}>
							Cookies policy
						</a>
					</span>
				</FooterContainerLinks>
				<FeedbackButton />
			</FooterContainer>
		</>
	);
}
