import styled from 'styled-components'
import Fab from '@mui/material/Fab';

export const FabButton = styled(Fab)`
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
  width: 400px;
  background-color: #fff;
  box-shadow: 24px;
  padding: 32px;
  border-radius: 8px;
`;