import { useState, useEffect } from "react";
import { Product } from "../Product";
import { MainContainer, CustomStack } from "./styles";

export function Main() {
  const [marginTop, setMarginTop] = useState("calc(45vh - 550px)");

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      setMarginTop(`calc(45vh - ${Math.min(550, windowHeight / 2)}px)`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <MainContainer>
        <CustomStack style={{ marginTop: marginTop }}>
          <Product />
        </CustomStack>
      </MainContainer>
    </>
  );
}
