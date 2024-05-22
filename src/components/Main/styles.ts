import styled from "styled-components";
import Stack from "@mui/material/Stack";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 481px) and (max-width: 767px) {
    padding-right: 15px;
    padding-left: 15px;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding-right: 15px;
    padding-left: 15px;
  }
`;
export const SectionContainer = styled.section`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
export const CustomStack = styled(Stack)`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 481px) and (max-width: 767px) {
  }

  @media (min-width: 320px) and (max-width: 480px) {
  }
`;
