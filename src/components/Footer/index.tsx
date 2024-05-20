import { FeedbackButton } from "../FeedbackButton"
import { FooterContainer } from "./styles"

export function Footer() {
  return(
		<>
			<hr />
			<FooterContainer className="footer mt-auto py-3 bg-light">
				<div className="container text-center" style={{ display: 'flex', flexDirection: 'column' }}>
					<span>
						<a href="#" style={{ marginRight: '5px' }}>About</a>
						<a href="#" style={{ marginRight: '5px' }}>Help Center</a>
						<a href="#" style={{ marginRight: '5px' }}>Service Terms</a>
						<a href="#" style={{ marginRight: '5px' }}>Privacy Policy</a>
						<a href="#" style={{ marginRight: '5px' }}>Cookies policy</a>
					</span>
					<span>Wishbox 2024, All rights reserved.</span>
				</div>
				<FeedbackButton />
			</FooterContainer>
		</>
  )
}