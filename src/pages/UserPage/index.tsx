import { WrapContainer, MainContainer } from "./styles";
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ProductList } from "../../components/ProductList";
import { AddNewItem } from "../../components/AddNewItem";
import Box from "@mui/material/Box";

export function UserPage() {
  return (
    <>
      <WrapContainer>
        <Navbar />
        <MainContainer>
          <Box
            width={900}
            display="flex"
            flexDirection="column"
            justifyContent="center"
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
