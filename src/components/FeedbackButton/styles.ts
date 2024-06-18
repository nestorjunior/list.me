import Fab from "@mui/material/Fab";
import styled from "styled-components";

export const FabButton = styled(Fab)`
	border: 1px solid red;
  position: absolute;
  bottom: 0px;
  right: 16px;
	border: 1px solid green;
`;

export const FeedbackModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  background-color: #fff;
  box-shadow: 24px;
  padding: 32px;
  border-radius: 8px;
`;
