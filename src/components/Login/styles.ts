import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";

export const StyledLoginForm = styled(Box)`
  border: 2px solid green;
  display: flex;
  flex-direction: column;
  gap: 2;
  width: 100%;
  max-width: 400px;
  background-color: #f4f5f6;
  padding: 5px;
  border-radius: 25px;
  border: 6px solid var(--white-100);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

export const StyledTypography = styled(Typography)`
  font-size: 1.6rem;
  color: var(--gray-900);
  font-weight: 600 !important;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  color: #fff !important;
  background-color: var(--red-500) !important;
  &:hover {
    background-color: var(--red-700) !important;
  }
`;
