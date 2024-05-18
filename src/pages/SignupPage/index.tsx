
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Signup } from "../../components/Signup";

export function SignupPage() {
	return(
		<>
			<div className="container-fluid p-x-0">
				<Navbar/>
				<Header height="250px"/>
				<Signup />
				<Footer/>
			</div>
		</>
	)
}
