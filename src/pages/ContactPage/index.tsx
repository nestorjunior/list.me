import { ContactUs } from "../../components/ContactUs";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { MainContainer } from "./styles";

export function ContactPage() {
	return (
		<>
			<div>
				<Navbar />
				<MainContainer>
					<ContactUs />
				</MainContainer>
				<Footer />
			</div>
		</>
	);
}
