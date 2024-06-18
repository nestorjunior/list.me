import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import styled, { keyframes } from "styled-components";

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
  &&{
		cursor: pointer;
		color: var(--orange-500);
		font-size: 4rem;
		animation: ${jump} 1s ease infinite;
		&:hover {
			color: var(--orange-600);
		}
	}
`;
