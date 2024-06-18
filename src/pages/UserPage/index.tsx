import Box from "@mui/material/Box";
import { AddNewItem } from "../../components/AddNewItem";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { ProductList } from "../../components/ProductList";
import { MainContainer, WrapContainer } from "./styles";

export function UserPage() {
	return (
		<>
			<WrapContainer>
				<Navbar />
				<MainContainer>
					<Box
						width="100%"
						maxWidth={900}
						display="flex"
						flexDirection="column"
						justifyContent="center"
						boxSizing="border-box"
					>
						<AddNewItem />
						<ProductList />
					</Box>
				</MainContainer>
				<Footer />
			</WrapContainer>
		</>
	);
}
