import styled from 'styled-components';
import Stack from "@mui/material/Stack";

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

export const MainContainer = styled.main`
	flex: 1; 
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #d5e8eb;
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
