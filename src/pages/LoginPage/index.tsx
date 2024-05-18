import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Navbar } from "../../components/Navbar";
import { Login } from "../../components/Login"

export function LoginPage () {
	return(
		<>
			<div className="container-fluid">
				<Navbar/>
				<Header height="250px"/>
				<Login />
				<Footer/>
			</div>
		</>
	)
}