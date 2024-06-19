import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { GlobalStyles } from "./styles/GlobalStyles";

// biome-ignore lint: Vite default code line
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<GlobalStyles />
		<App />
	</React.StrictMode>,
);
