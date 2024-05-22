import styled, { keyframes } from "styled-components";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";

export const ProductContainer = styled.div`
  &:first-child {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
  }
  &:last-child {
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
  }
`;

export const ProductShowMore = styled.div`
  margin-top: 20px;
  background-color: transparent;
`;

export const ProductButtonShowMore = styled.button`
  border: 0;
  width: 150px;
  padding: 10px 25px;
  background-color: transparent;
`;

const jump = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

export const StyledExpandCircleDownIcon = styled(ExpandCircleDownIcon)`
  cursor: pointer;
  margin-top: 20px;
  font-size: 20px;
  color: var(--orange-500);
  margin-top: 5px;
  font-size: 2rem;
  margin-right: 0.625rem;
  animation: ${jump} 1s ease infinite;
`;
