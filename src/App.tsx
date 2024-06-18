import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes";
import { GlobalStyles } from "./styles/GlobalStyles";
import "@fontsource/lato/300.css";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";

export function App() {
	return (
		<Router>
			<div className="App">
				<div className="container-fluid p-0">
					<GlobalStyles />
					<AppRoutes />
				</div>
			</div>
		</Router>
	);
}
