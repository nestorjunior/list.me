import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { LoginForm } from "../components/LoginForm"

export function LoginPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<Header height="250px"/>
				<LoginForm />
				<Footer/>
			</div>
		</>
	)
}