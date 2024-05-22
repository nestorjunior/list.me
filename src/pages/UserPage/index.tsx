import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { MainContainer, CustomStack } from './styles';
import { ProductList } from "../../components/ProductList";
import { AddNewItem } from "../../components/AddNewItem";

export function UserPage() {
	return(
		<>
			<div className="container-fluid px-0">
				<Navbar/>
				<MainContainer>
					<CustomStack>
						<AddNewItem/>
						<ProductList />
					</CustomStack>
				</MainContainer>
				<Footer/>
			</div>
		</>
	)
}