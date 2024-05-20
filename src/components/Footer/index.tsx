import { FeedbackButton } from "../FeedbackButton"
import { FooterContainer } from "./styles"

export function Footer() {
  return(
		<>
			<hr />
			<FooterContainer className="footer mt-auto py-3 bg-light">
				<div className="container text-center" style={{ display: 'flex', flexDirection: 'column' }}>
					{/* <h5>Wishbox 2024, All rights reserved.</h5>
					<hr/> */}
					<span>
						<a href="/about" style={{ marginRight: '5px' }}>About</a>
						<a href="/help" style={{ marginRight: '5px' }}>Help Center</a>
						<a href="/terms" style={{ marginRight: '5px' }}>Service Terms</a>
						<a href="/privacy" style={{ marginRight: '5px' }}>Privacy Policy</a>
						<a href="/cookies" style={{ marginRight: '5px' }}>Cookies policy</a>
					</span>
				</div>
				<FeedbackButton />
			</FooterContainer>
		</>
  )
}