import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Navbar } from "../components/Navbar/Navbar";
import { Login } from "../components/Login/Login"

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