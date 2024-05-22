import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { PageContainer, MainContainer, CustomStack } from './styles'; // Certifique-se de que o caminho esteja correto
import { ProductList } from "../../components/ProductList";
import { AddNewItem } from "../../components/AddNewItem";

export function UserPage() {
    return (
        <PageContainer>
            <Navbar />
            <MainContainer>
                <CustomStack>
                    <AddNewItem />
                    <ProductList />
                </CustomStack>
            </MainContainer>
            <Footer />
        </PageContainer>
    );
}
