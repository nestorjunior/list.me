import { Button } from "@mui/material";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  width: 100%;
	color: #fff!important;
	background-color: var(--red-500)!important;
	&:hover {
		background-color: var(--red-700)!important;
	}
`;
