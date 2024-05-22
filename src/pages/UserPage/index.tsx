import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProductList } from "../../components/ProductList";
import { AddNewItem } from "../../components/AddNewItem";
import Stack from "@mui/material/Stack";
import { PageContainer, MainContainer } from './styles';

export function UserPage() {
    return (
        <PageContainer>
            <Navbar />
            <MainContainer>
							<Stack
								sx={{
									width: '900px',
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<AddNewItem />
								<ProductList />
							</Stack>
            </MainContainer>
            <Footer />
        </PageContainer>
    );
}
